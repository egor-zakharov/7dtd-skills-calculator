import type { Attribute, AttributeName, Perk, PerkLevel, PerkLevels } from '@/entities/skill';

interface AttributeSectionProps {
  attribute: Attribute;
  currentLevel: number;
  perkLevels: PerkLevels;
  onPerkLevelChange: (perkName: string, newLevel: number, attribute: AttributeName) => void;
  skillPoints: number;
  perk: Perk | Attribute;
  minRequiredLevel: number;
}

const AttributeSection = ({
  attribute,
  currentLevel,
  perkLevels,
  onPerkLevelChange,
  skillPoints,
  perk,
  minRequiredLevel,
}: AttributeSectionProps) => {
  const isAttribute = perk.name === attribute.name;
  const currentPerkLevel = isAttribute ? currentLevel : (perkLevels[perk.name] ?? 0);
  const maxLevel = isAttribute ? (attribute.levels?.length ?? 1) : (perk as Perk).levels.length;

  const handleLevelSelect = (newLevel: number) => {
    if (newLevel > maxLevel) {
      return;
    }

    const finalLevel =
      currentPerkLevel === newLevel && newLevel !== 0
        ? isAttribute
          ? currentLevel > minRequiredLevel
            ? currentLevel - 1
            : minRequiredLevel
          : 0
        : newLevel;

    onPerkLevelChange(perk.name, finalLevel, attribute.name);
  };

  const levelButtons = Array.from({ length: maxLevel }, (_, index) => {
    const level = index + 1;
    const levelData: PerkLevel =
      (isAttribute
        ? attribute.levels?.[index]
        : (perk as Perk).levels.find((entry) => entry.level === level)) ?? {
        level,
        name: perk.name,
        attributeRequirement: 1,
        description: 'No description',
        cost: 0,
      };
    const isActive = isAttribute ? currentLevel >= level : currentPerkLevel >= level;
    const isDisabledByRequirement = isAttribute && level < minRequiredLevel;
    const isDisabledByBudget = !isActive && levelData.cost > skillPoints;

    return (
      <button
        key={`${attribute.name}-${perk.name}-level-${level}`}
        className={`perk-level-btn ${isActive ? 'active' : ''}`}
        onClick={() => handleLevelSelect(level)}
        disabled={isDisabledByRequirement || isDisabledByBudget}
        type="button"
      >
        <div className="level-info">
          <span className="level">Level: {level}</span>
          <span className="name">{levelData.name}</span>
          <span className="cost">Cost: {levelData.cost} points</span>
        </div>
        <div className="description">{levelData.description}</div>
      </button>
    );
  });

  const description =
    isAttribute
      ? attribute.levels?.[currentLevel - 1]?.description ?? attribute.description ?? 'No description available'
      : (perk as Perk).levels[Math.max(currentPerkLevel - 1, 0)]?.description ??
          (perk as Perk).levels[0]?.description ??
          'No description available';

  return (
    <div className="perk-details-section">
      <h3 className="perk-name">{perk.name}</h3>
      <div className="perk-description">{description}</div>
      <div className="perk-levels-controls">{levelButtons}</div>
    </div>
  );
};

export default AttributeSection;
