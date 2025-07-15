import React, { useEffect, useMemo } from 'react';
import { Perk } from '../types';

interface PerkCardProps {
  perk: Perk;
  currentLevel: number;
  onLevelChange: (level: number, requiredAttributeLevel: number) => void;
  attributeLevel: number;
  skillPoints: number;
  perkLevels: Record<string, number>;
}

const PerkCard: React.FC<PerkCardProps> = ({ perk, currentLevel, onLevelChange, attributeLevel, skillPoints, perkLevels = {} }) => {
  if (!perk || !perk.name) {
    return <div>Invalid perk data</div>;
  }

  const levelOptions = useMemo(() => [0, ...perk.levels.map((level) => level.level)], [perk.levels]);
  const selectedLevelDescription = useMemo(() => perk.levels.find((level) => level.level === currentLevel)?.description || '', [perk.levels, currentLevel]);
  const currentPerkLevel = perkLevels[perk.name] || 0;

  useEffect(() => {
  }, [perkLevels, currentLevel, attributeLevel, skillPoints]);

  return (
    <div className="perk-card">
      <h4 className="perk-card h4">{perk.name}</h4>
      <div className="space-y-1">
        {levelOptions.map((level) => {
          const requiredAttributeLevel = perk.levels.find((l) => l.level === level)?.attributeRequirement || 1;
          return (
            <label key={level} className="perk-card label">
              <input
                type="radio"
                name={perk.name}
                value={level}
                checked={currentLevel === level}
                onChange={() => onLevelChange(level, requiredAttributeLevel)}
                className="perk-card input"
              />
              <span className="perk-card span">{level === 0 ? 'None' : `Level ${level}`}</span>
            </label>
          );
        })}
      </div>
      {currentLevel > 0 && (
        <p className="perk-card p">{selectedLevelDescription}</p>
      )}
    </div>
  );
};

export default React.memo(PerkCard);