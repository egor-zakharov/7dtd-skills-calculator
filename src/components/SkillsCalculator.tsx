import { useEffect, useMemo, useRef, useState } from 'react';

import AttributeSection from '@/components/AttributeSection';
import { getMinRequiredAttributeLevel, getPerkMaxLevel } from '@/entities/skill';
import type { Perk } from '@/entities/skill';
import { useSkillsCalculator } from '@/features/skills-calculator/model/useSkillsCalculator';

const SkillsCalculator = () => {
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [copyErrorMessage, setCopyErrorMessage] = useState(false);
  const copyFeedbackTimeoutRef = useRef<number | null>(null);
  const {
    attributes,
    attributeLevels,
    perkLevels,
    selectedAttribute,
    selectedAttributeData,
    selectedPerk,
    totalCost,
    availableSkillPoints,
    characterLevel,
    selectAttribute,
    selectPerk,
    handlePerkLevelChange,
    reset,
  } = useSkillsCalculator();

  const groupedPerks = useMemo(() => {
    if (!selectedAttributeData) {
      return [];
    }

    return Object.entries(
      selectedAttributeData.perks.reduce<Record<string, Perk[]>>((groups, perk) => {
        (groups[perk.category] = groups[perk.category] || []).push(perk);
        return groups;
      }, {}),
    );
  }, [selectedAttributeData]);

  useEffect(
    () => () => {
      if (copyFeedbackTimeoutRef.current) {
        window.clearTimeout(copyFeedbackTimeoutRef.current);
      }
    },
    [],
  );

  const showTemporaryFeedback = (type: 'copied' | 'failed') => {
    setShowCopyMessage(type === 'copied');
    setCopyErrorMessage(type === 'failed');

    if (copyFeedbackTimeoutRef.current) {
      window.clearTimeout(copyFeedbackTimeoutRef.current);
    }

    copyFeedbackTimeoutRef.current = window.setTimeout(() => {
      setShowCopyMessage(false);
      setCopyErrorMessage(false);
      copyFeedbackTimeoutRef.current = null;
    }, 1500);
  };

  const fallbackCopyToClipboard = (text: string): boolean => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();

    try {
      return document.execCommand('copy');
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const handleShareClick = async () => {
    const shareUrl = window.location.href;

    try {
      if (typeof navigator.share === 'function') {
        await navigator.share({
          title: '7 Days to Die Skill Calculator',
          url: shareUrl,
        });
        return;
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        showTemporaryFeedback('copied');
        return;
      }

      if (fallbackCopyToClipboard(shareUrl)) {
        showTemporaryFeedback('copied');
        return;
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }
    }

    showTemporaryFeedback('failed');
  };

  return (
    <div className="skills-calculator">
      <div className="topbar">
        <h1 className="calculator-title">Attributes</h1>
      </div>

      <div className="total-info">
        <div className="total-cost">Total cost: {totalCost}</div>
        <div className="character-level">Character level: {characterLevel}</div>
        <div className="available-points">Available points: {availableSkillPoints}</div>
      </div>

      <div className="buttons-container">
        <button className="reset-btn" onClick={reset} type="button">
          <span>Reset</span>
        </button>
        <div className="share-wrapper">
          {showCopyMessage || copyErrorMessage ? (
            <div
              className={`copy-message ${copyErrorMessage ? 'copy-message-error' : ''}`}
              aria-live="polite"
            >
              <span>{copyErrorMessage ? 'Unable to copy' : 'Copied!'}</span>
            </div>
          ) : (
            <button className="reset-btn share-btn" onClick={handleShareClick} type="button">
              <span>Share</span>
            </button>
          )}
        </div>
      </div>

      <div className="attributes-row">
        {attributes.map((attribute) => (
          <button
            key={attribute.name}
            className={`attribute-icon-button ${selectedAttribute === attribute.name ? 'active' : ''}`}
            onClick={() => selectAttribute(attribute.name)}
            type="button"
            aria-label={attribute.name}
          >
            <img
              src={attribute.icon || '/assets/default-icon.png'}
              alt={attribute.name}
              className={`attribute-icon-image ${selectedAttribute === attribute.name ? 'active' : ''}`}
            />
          </button>
        ))}
      </div>

      <div className="perks-container">
        <div className="perks-list">
          {selectedAttributeData && (
            <>
              <div className="perks-header">Attribute</div>

              {selectedAttributeData.levels && (
                <button
                  className={`perk-item ${selectedPerk?.name === selectedAttributeData.name ? 'active' : ''}`}
                  onClick={() => selectPerk(selectedAttributeData.name)}
                  type="button"
                >
                  {selectedAttributeData.icon && (
                    <img
                      src={selectedAttributeData.icon}
                      alt={`${selectedAttributeData.name} icon`}
                      className="perk-icon"
                    />
                  )}
                  <span className="perk-item-title">{selectedAttributeData.name}</span>
                  <span className="perk-item-level">
                    {attributeLevels[selectedAttributeData.name]}/{selectedAttributeData.levels.length}
                  </span>
                </button>
              )}

              {groupedPerks.map(([category, perks]) => (
                <div key={category}>
                  <div className="perks-header">{category.toUpperCase()}</div>

                  {perks.map((perk) => (
                    <button
                      key={perk.name}
                      className={`perk-item ${selectedPerk?.name === perk.name ? 'active' : ''}`}
                      onClick={() => selectPerk(perk.name)}
                      type="button"
                    >
                      {perk.icon && <img src={perk.icon} alt={`${perk.name} icon`} className="perk-icon" />}
                      <span className="perk-item-title">{perk.name}</span>
                      <span className="perk-item-level">
                        {perkLevels[perk.name] ?? 0}/{getPerkMaxLevel(perk)}
                      </span>
                    </button>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>

        <div className="perk-details">
          {selectedAttributeData && selectedPerk && (
            <AttributeSection
              attribute={selectedAttributeData}
              currentLevel={attributeLevels[selectedAttributeData.name] ?? 1}
              perkLevels={perkLevels}
              onPerkLevelChange={handlePerkLevelChange}
              skillPoints={availableSkillPoints}
              perk={selectedPerk}
              minRequiredLevel={getMinRequiredAttributeLevel(selectedAttributeData.name, perkLevels)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsCalculator;
