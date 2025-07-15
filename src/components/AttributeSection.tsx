import React, { useMemo } from 'react';
import { Perk, PerkLevel, Attribute } from '../types';

interface AttributeSectionProps {
  attribute: Attribute;
  currentLevel: number;
  perkLevels: Record<string, number>;
  onPerkLevelChange: (perkName: string, newLevel: number, attribute: string) => void;
  skillPoints: number;
  perk: Perk | Attribute;
  minRequiredLevel: number;
}

const AttributeSection: React.FC<AttributeSectionProps> = ({
  attribute,
  currentLevel,
  perkLevels,
  onPerkLevelChange,
  perk,
  minRequiredLevel,
}) => {
  const isAttribute = perk.name === attribute.name;
  const currentPerkLevel = isAttribute ? currentLevel : (perkLevels[perk.name] || 0);
  const maxLevel = isAttribute 
    ? (attribute.levels ? 10 : 1)
    : (perk as Perk).levels.length;

  const handleLevelSelect = (newLevel: number) => {
    if (newLevel <= maxLevel) {
      let finalLevel;
      if (currentPerkLevel === newLevel && newLevel !== 0) {
        finalLevel = isAttribute ? (currentLevel > minRequiredLevel ? currentLevel - 1 : minRequiredLevel) : 0;
      } else {
        finalLevel = newLevel;
      }
      onPerkLevelChange(perk.name, finalLevel, attribute.name);
    }
  };

  const levelButtons = useMemo(() => Array.from({ length: maxLevel }, (_, i) => {
    const levelData = isAttribute 
      ? (attribute.levels && attribute.levels[i]) || { level: i + 1, name: attribute.name, attributeRequirement: 1, description: 'No description', cost: 0 }
      : (perk as Perk).levels.find(l => l.level === i + 1) || { name: perk.name, attributeRequirement: 1, description: 'No description', cost: 0 };
    const isActive = isAttribute ? currentLevel >= (i + 1) : currentPerkLevel >= (i + 1);
    const isDisabled = isAttribute && (i + 1) < minRequiredLevel;
    return (
      <button
        key={`${attribute.name}-${perk.name}-level-${i + 1}`}
        className={`perk-level-btn ${isActive ? 'active' : ''}`}
        onClick={() => handleLevelSelect(i + 1)}
        disabled={isDisabled}
      >
        <div className="level-info">
          <span className="level">Level: {(i + 1)}</span>
          <span className="name">{levelData.name}</span>
          <span className="cost">Cost: {levelData.cost} points</span>
        </div>
        <div className="description">
          {levelData.description}
        </div>
      </button>
    );
  }), [isAttribute, attribute.levels, currentLevel, currentPerkLevel, minRequiredLevel, perk, perkLevels]);

  return (
    <div className="perk-details-section">
      <h3 className="perk-name">{perk.name}</h3>
      <div className="perk-description">
        {isAttribute 
          ? (attribute.levels && attribute.levels[currentLevel - 1]?.description) || attribute.description || 'No description available'
          : (perk as Perk).levels[currentPerkLevel]?.description || (perk as Perk).levels[0].description}
      </div>
      <div className="perk-levels-controls">
        {levelButtons}
      </div>
    </div>
  );
};

export default React.memo(AttributeSection);