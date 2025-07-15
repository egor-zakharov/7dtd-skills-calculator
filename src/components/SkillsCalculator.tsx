import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import AttributeSection from './AttributeSection';
import { attributes } from '../data';
import { Perk, Attribute } from '../types';

interface SkillsCalculatorProps {
  skillPoints: number;
  setSkillPoints: (updateFn: (prev: number) => number) => void;
  setAttributeLevels: (levels: Record<string, number> | ((prev: Record<string, number>) => Record<string, number>)) => void;
  setPerkLevels: (levels: Record<string, number> | ((prev: Record<string, number>) => Record<string, number>)) => void;
}

const SkillsCalculator: React.FC<SkillsCalculatorProps> = ({ 
  skillPoints: initialSkillPoints, 
  setAttributeLevels, 
  setPerkLevels
}) => {
  const attributeNames = ['Perception', 'Strength', 'Fortitude', 'Agility', 'Intellect', 'Common perks'] as const;
  type AttributeName = typeof attributeNames[number];

  const [attributeLevels, setLocalAttributeLevels] = useState<Record<AttributeName, number>>({
    Perception: 1,
    Strength: 1,
    Fortitude: 1,
    Agility: 1,
    Intellect: 1,
    'Common perks': 1,
  });
  const [manualAttributeLevels, setManualAttributeLevels] = useState<Record<AttributeName, number>>({
    Perception: 1,
    Strength: 1,
    Fortitude: 1,
    Agility: 1,
    Intellect: 1,
    'Common perks': 1,
  });
  const [perkLevels, setLocalPerkLevels] = useState<Record<string, number>>({});
  const [selectedAttribute, setSelectedAttribute] = useState<AttributeName | null>('Perception');
  const [selectedPerk, setSelectedPerk] = useState<string | null>(selectedAttribute === 'Perception' ? 'Perception' : null);
  const perkDetailsRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  useEffect(() => {
    const initialPerkLevels: Record<string, number> = {};
    setLocalPerkLevels(initialPerkLevels);
    setPerkLevels(initialPerkLevels);
    if (perkDetailsRef.current && selectedAttribute === 'Perception') {
      const height = perkDetailsRef.current.scrollHeight;
      setMaxHeight(height);
    }

    // Парсинг хэш-ссылки при загрузке
    const parseHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const attrOrder = ['Perception', 'Strength', 'Fortitude', 'Agility', 'Intellect', 'Common perks'] as const;
        const parts = hash.split('-');
        if (parts.length === attrOrder.length) {
          const newAttributeLevels = { ...attributeLevels };
          const newManualAttributeLevels = { ...manualAttributeLevels };
          parts.forEach((part, index) => {
            const attr = attrOrder[index] as AttributeName;
            const lastChar = part.slice(-1);
            const attrLevel = lastChar === 'a' ? 10 : parseInt(lastChar, 10) || 1;
            const perkLevelsStr = part.slice(0, -1).padEnd(10, '0');

            newManualAttributeLevels[attr] = attrLevel;
            newAttributeLevels[attr] = attrLevel;

            const attributeData = attributes.find(a => a.name === attr);
            const perks = attributeData?.perks || [];
            for (let i = 0; i < Math.min(perkLevelsStr.length, perks.length); i++) {
              const perkLevel = parseInt(perkLevelsStr[i], 10) || 0;
              if (!isNaN(perkLevel)) {
                initialPerkLevels[perks[i].name] = perkLevel;
              }
            }
          });
          setManualAttributeLevels(newManualAttributeLevels);
          setLocalAttributeLevels(newAttributeLevels);
          setAttributeLevels(newAttributeLevels);
          setPerkLevels(initialPerkLevels);
          setSelectedAttribute('Perception');

          // Генерация и установка хэша сразу после парсинга
          const newHash = generateShareLinkFromLevels(newAttributeLevels, initialPerkLevels);
          window.history.pushState({}, '', `/7dtd-skills-calculator/${newHash}`);
        } else {
          console.log('Invalid hash format: expected', attrOrder.length, 'parts, got', parts.length);
        }
      } else {
        console.log('No hash found in URL');
      }
    };

    // Парсинг при загрузке
    parseHash();

    // Слушатель изменения хэша
    window.addEventListener('hashchange', parseHash);

    // Очистка слушателя при размонтировании
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  useEffect(() => {
    if (perkDetailsRef.current) {
      const height = perkDetailsRef.current.scrollHeight;
      setMaxHeight((prev) => Math.max(prev, height));
    }
  }, [selectedAttribute, selectedPerk]);

  useEffect(() => {
    const newAttributeLevels = { ...attributeLevels };
    attributes.forEach(attr => {
      if (attr.name !== 'Common perks' && attr.levels) {
        const newLevel = updateAttributeLevel(attr.name);
        newAttributeLevels[attr.name as AttributeName] = newLevel;
      }
    });
    setLocalAttributeLevels(newAttributeLevels);
    setAttributeLevels(newAttributeLevels);
  }, [manualAttributeLevels, perkLevels]);

  const getPerkMaxLevel = (perk: Perk): number => {
    return perk.levels.length;
  };

  const getMinRequiredAttributeLevel = (attributeName: string): number => {
    const attribute = attributes.find(a => a.name === attributeName);
    if (!attribute || attribute.name === 'Common perks') return 1;

    const activePerks = attribute.perks?.filter(p => (perkLevels[p.name] || 0) > 0) || [];
    if (activePerks.length === 0) return 1;

    const minRequired = Math.max(
      ...activePerks.flatMap(p => {
        const currentLevel = perkLevels[p.name] || 0;
        const levelData = p.levels.find(l => l.level === currentLevel);
        return levelData ? [levelData.attributeRequirement] : [1];
      })
    );

    return minRequired > 0 ? minRequired : 1;
  };

  const updateAttributeLevel = (attribute: string) => {
    const attributeData = attributes.find(a => a.name === attribute);
    if (!attributeData || attributeData.name === 'Common perks' || !attributeData.levels) return manualAttributeLevels[attribute as AttributeName] || 1;
    
    const activePerks = attributeData.perks?.filter(p => (perkLevels[p.name] || 0) > 0) || [];
    if (activePerks.length === 0) return manualAttributeLevels[attribute as AttributeName] || 1;
    
    const maxRequiredLevel = Math.max(
      ...activePerks.flatMap(p => {
        const currentLevel = perkLevels[p.name] || 0;
        const levelData = p.levels.find(l => l.level === currentLevel);
        return levelData ? [levelData.attributeRequirement] : [0];
      })
    );
    return Math.max(manualAttributeLevels[attribute as AttributeName] || 1, maxRequiredLevel);
  };

  const calculateTotalCost = () => {
    let attributeCost = 0;
    let perkCost = 0;
    attributeCost = Object.entries(attributeLevels).reduce((sum, [name, level]) => {
      const attr = attributes.find(a => a.name === name && a.levels);
      if (attr && attr.levels) {
        const levelsUpToCurrent = attr.levels.filter(l => l.level <= level);
        const totalAttributeCost = levelsUpToCurrent.reduce((acc, l) => acc + (l.cost || 0), 0);
        return sum + totalAttributeCost;
      }
      return sum;
    }, 0);
    perkCost = Object.entries(perkLevels).reduce((sum, [name, level]) => {
      const perk = attributes.flatMap(a => a.perks || []).find(p => p.name === name);
      if (perk && level > 0) {
        const levelsUpToCurrent = perk.levels.filter(l => l.level <= level);
        const totalPerkCost = levelsUpToCurrent.reduce((acc, l) => acc + (l.cost || 0), 0);
        return sum + totalPerkCost;
      }
      return sum;
    }, 0);
    const totalCost = attributeCost + perkCost;
    return totalCost;
  };

  const handlePerkLevelChange = useCallback((perkName: string, newLevel: number, attribute: string) => {
    const isAttribute = attributes.find(a => a.name === perkName);
    if (isAttribute && perkName !== 'Common perks') {
      const minRequired = getMinRequiredAttributeLevel(perkName);
      let finalLevel = newLevel;
      const currentLevel = manualAttributeLevels[perkName as AttributeName] || 0;
      if (newLevel === currentLevel && newLevel !== 0) {
        finalLevel = currentLevel > minRequired ? currentLevel - 1 : minRequired;
      }
      const newManualAttributeLevels = { ...manualAttributeLevels, [perkName as AttributeName]: finalLevel };
      const newAttributeLevels = { ...attributeLevels, [perkName as AttributeName]: Math.max(finalLevel, updateAttributeLevel(perkName)) };
      setManualAttributeLevels(newManualAttributeLevels);
      setLocalAttributeLevels(newAttributeLevels);
      setAttributeLevels(newAttributeLevels);
      const newHash = generateShareLinkFromLevels(newAttributeLevels, perkLevels);
      window.history.pushState({}, '', `/7dtd-skills-calculator/${newHash}`);
    } else {
      const perk = attributes.find(a => a.perks?.some(p => p.name === perkName))?.perks?.find(p => p.name === perkName);
      if (perk) {
        const maxLevel = getPerkMaxLevel(perk);
        if (newLevel > maxLevel) return;
        
        const newPerkLevels = { ...perkLevels, [perkName]: newLevel };
        setLocalPerkLevels(newPerkLevels);
        setPerkLevels(newPerkLevels);
        const newHash = generateShareLinkFromLevels(attributeLevels, newPerkLevels); // Используем новые perkLevels
        window.history.pushState({}, '', `/7dtd-skills-calculator/${newHash}`);
      }
    }
    setSelectedPerk(perkName);
  }, [perkLevels, manualAttributeLevels, attributeLevels]);

  const handleReset = useCallback(() => {
    const initialLevels = {
      Perception: 1,
      Strength: 1,
      Fortitude: 1,
      Agility: 1,
      Intellect: 1,
      'Common perks': 1,
    };
    setLocalAttributeLevels(initialLevels);
    setManualAttributeLevels(initialLevels);
    setLocalPerkLevels({});
    setPerkLevels({});
    setSelectedAttribute('Perception');
    setSelectedPerk('Perception');
    setMaxHeight(0);
    if (perkDetailsRef.current) {
      const height = perkDetailsRef.current.scrollHeight;
      setMaxHeight(height);
    }

    const newHash = generateShareLink();
    window.history.pushState({}, '', `/7dtd-skills-calculator/${newHash}`);
  }, []);

  const generateShareLink = () => {
    const attrOrder = ['Perception', 'Strength', 'Fortitude', 'Agility', 'Intellect', 'Common perks'] as const;
    const maxPerks = Math.max(...attrOrder.map(attr => attributes.find(a => a.name === attr)?.perks.length || 0));
    const linkParts = attrOrder.map(attr => {
      const attrLevel = manualAttributeLevels[attr] || 1;
      const attrLetter = attrLevel === 10 ? 'a' : attrLevel.toString();
      const attributeData = attributes.find(a => a.name === attr);
      const perks = attributeData?.perks || [];
      const perkLevelsArray = perks.map(p => perkLevels[p.name] || 0);
      while (perkLevelsArray.length < maxPerks) perkLevelsArray.push(0);
      return `${perkLevelsArray.join('')}${attrLetter}`;
    });
    return `#${linkParts.join('-')}`;
  };

  const generateShareLinkFromLevels = (levels: Record<AttributeName, number>, perkLevelsData: Record<string, number>) => {
    const attrOrder = ['Perception', 'Strength', 'Fortitude', 'Agility', 'Intellect', 'Common perks'] as const;
    const maxPerks = Math.max(...attrOrder.map(attr => attributes.find(a => a.name === attr)?.perks.length || 0));
    const linkParts = attrOrder.map(attr => {
      const attrLevel = levels[attr] || 1;
      const attrLetter = attrLevel === 10 ? 'a' : attrLevel.toString();
      const attributeData = attributes.find(a => a.name === attr);
      const perks = attributeData?.perks || [];
      const perkLevelsArray = perks.map(p => perkLevelsData[p.name] || 0);
      while (perkLevelsArray.length < maxPerks) perkLevelsArray.push(0);
      return `${perkLevelsArray.join('')}${attrLetter}`;
    });
    return `#${linkParts.join('-')}`;
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 1500);
  };

  const totalCost = calculateTotalCost();
  const characterLevel = 1 + totalCost;
  const availableSkillPoints = initialSkillPoints - totalCost;

  const currentShareLink = useMemo(() => generateShareLink(), [attributeLevels, perkLevels]);

  const renderPerkItems = useMemo(() => {
    if (!selectedAttribute) return null;
    
    const attribute = attributes.find(a => a.name === selectedAttribute);
    if (!attribute) return null;

    const attributeItem = attribute.levels && (
      <div
        key={`${attribute.name}-attribute`}
        className={`perk-item ${selectedPerk === attribute.name ? 'active' : ''}`}
        onClick={() => {
          setSelectedPerk(attribute.name);
        }}
      >
        {attribute.icon && <img src={attribute.icon} alt={`${attribute.name} icon`} className="perk-icon" />}
        <span>{attribute.name}</span>
        <span>{attributeLevels[attribute.name as AttributeName] || 0}/10</span>
      </div>
    );

    const groupedPerks = attribute.perks?.reduce((acc, perk) => {
      (acc[perk.category] = acc[perk.category] || []).push(perk);
      return acc;
    }, {} as Record<string, Perk[]>) || {};

    return (
      <>
        {attributeItem}
        {Object.entries(groupedPerks).map(([category, perks]) => (
          <React.Fragment key={category}>
            <div className="perks-header">{category.toUpperCase()}</div>
            {perks.map(perk => (
              <div
                key={perk.name}
                className={`perk-item ${selectedPerk === perk.name ? 'active' : ''}`}
                onClick={() => setSelectedPerk(perk.name)}
              >
                {perk.icon && <img src={perk.icon} alt={`${perk.name} icon`} className="perk-icon" />}
                <span>{perk.name}</span>
                <span>{perkLevels[perk.name] || 0}/{getPerkMaxLevel(perk)}</span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </>
    );
  }, [selectedAttribute, selectedPerk, attributeLevels, perkLevels]);

  return (
    <div className="skills-calculator">
      <h1 className="calculator-title">Attributes</h1>
      
      <div className="total-info">
        <div className="total-cost">Total cost: {totalCost}</div>
        <div className="character-level">Character level: {characterLevel}</div>
        <div className="available-points">Avaibale points: {availableSkillPoints}</div>
      </div>

      <div className="buttons-container">
        <button
          className="reset-btn"
          onClick={handleReset}
        >
          <span>Reset</span>
        </button>
        <div className="share-wrapper">
          {showCopyMessage ? (
            <div className="copy-message">
              <span>Copied!</span>
            </div>
          ) : (
            <button
              className="reset-btn share-btn"
              onClick={handleShareClick}
            >
              <span>Share</span>
            </button>
          )}
        </div>
      </div>

      <div className="attributes-row">
        {attributes.map(attr => (
          <img
            key={attr.name}
            src={attr.icon || '/assets/default-icon.png'}
            alt={attr.name}
            className={`attribute-icon-image ${selectedAttribute === attr.name ? 'active' : ''}`}
            onClick={() => {
              setSelectedAttribute(attr.name as AttributeName);
              if (attr.name === 'Common perks' && attr.perks?.length > 0) {
                setSelectedPerk(attr.perks[0].name);
              } else {
                setSelectedPerk(attr.name);
              }
            }}
          />
        ))}
      </div>

      <div className="perks-container">
        <div className="perks-list">
          {selectedAttribute && (
            <>
              <div className="perks-header">Attribute</div>
              {renderPerkItems}
            </>
          )}
        </div>

        <div 
          className="perk-details" 
          ref={perkDetailsRef}
          style={{ height: maxHeight ? `${maxHeight}px` : 'auto', transition: 'height 0.3s ease' }}
        >
          {selectedAttribute && selectedPerk && (
            <AttributeSection
              attribute={attributes.find(a => a.name === selectedAttribute)!}
              currentLevel={attributeLevels[selectedAttribute] || 1}
              perkLevels={perkLevels}
              onPerkLevelChange={handlePerkLevelChange}
              skillPoints={availableSkillPoints}
              perk={selectedPerk ? attributes.find(a => a.name === selectedAttribute)!.perks?.find(p => p.name === selectedPerk) || attributes.find(a => a.name === selectedAttribute)! : attributes.find(a => a.name === selectedAttribute)!}
              minRequiredLevel={getMinRequiredAttributeLevel(selectedAttribute)}
            />
          )}
          {selectedAttribute && !selectedPerk && (
            <AttributeSection
              attribute={attributes.find(a => a.name === selectedAttribute)!}
              currentLevel={attributeLevels[selectedAttribute] || 1}
              perkLevels={perkLevels}
              onPerkLevelChange={handlePerkLevelChange}
              skillPoints={availableSkillPoints}
              perk={attributes.find(a => a.name === selectedAttribute)!}
              minRequiredLevel={getMinRequiredAttributeLevel(selectedAttribute)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SkillsCalculator);