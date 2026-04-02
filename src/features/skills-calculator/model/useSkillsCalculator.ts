import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  ATTRIBUTE_NAMES,
  INITIAL_ATTRIBUTE_LEVELS,
  INITIAL_SKILL_POINTS,
  attributes,
  calculateTotalCost,
  getAttributeByName,
  getMinRequiredAttributeLevel,
  getPerkByName,
  getPerkMaxLevel,
  getPerksByAttribute,
  parseBuildFromHash,
  resolveAttributeLevels,
  serializeBuildToHash,
} from '@/entities/skill';
import type {
  Attribute,
  AttributeLevels,
  AttributeName,
  Perk,
  PerkLevels,
} from '@/entities/skill';

interface SkillsCalculatorState {
  manualAttributeLevels: AttributeLevels;
  perkLevels: PerkLevels;
  selectedAttribute: AttributeName;
  selectedPerk: string | null;
}

const DEFAULT_ATTRIBUTE = ATTRIBUTE_NAMES[0];

const getDefaultSelectedPerk = (attributeName: AttributeName): string | null => {
  if (attributeName === 'Common perks') {
    return getPerksByAttribute(attributeName)[0]?.name ?? null;
  }

  return attributeName;
};

const createInitialState = (): SkillsCalculatorState => ({
  manualAttributeLevels: { ...INITIAL_ATTRIBUTE_LEVELS },
  perkLevels: {},
  selectedAttribute: DEFAULT_ATTRIBUTE,
  selectedPerk: getDefaultSelectedPerk(DEFAULT_ATTRIBUTE),
});

const syncUrlHash = (hash: string) => {
  if (window.location.hash !== hash) {
    window.history.replaceState({}, '', `${window.location.pathname}${window.location.search}${hash}`);
  }
};

export const useSkillsCalculator = () => {
  const [state, setState] = useState<SkillsCalculatorState>(createInitialState);

  useEffect(() => {
    const applySnapshot = (hash: string) => {
      const snapshot = parseBuildFromHash(hash);

      if (!snapshot) {
        return;
      }

      setState((currentState) => ({
        ...currentState,
        manualAttributeLevels: snapshot.manualAttributeLevels,
        perkLevels: snapshot.perkLevels,
        selectedAttribute: DEFAULT_ATTRIBUTE,
        selectedPerk: getDefaultSelectedPerk(DEFAULT_ATTRIBUTE),
      }));
    };

    const handleHashChange = () => {
      applySnapshot(window.location.hash);
    };

    applySnapshot(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const attributeLevels = useMemo(
    () => resolveAttributeLevels(state.manualAttributeLevels, state.perkLevels),
    [state.manualAttributeLevels, state.perkLevels],
  );

  useEffect(() => {
    syncUrlHash(serializeBuildToHash(state.manualAttributeLevels, state.perkLevels));
  }, [state.manualAttributeLevels, state.perkLevels]);

  const totalCost = useMemo(
    () => calculateTotalCost(attributeLevels, state.perkLevels),
    [attributeLevels, state.perkLevels],
  );

  const availableSkillPoints = INITIAL_SKILL_POINTS - totalCost;
  const characterLevel = totalCost + 1;

  const selectedAttributeData = useMemo(
    () => getAttributeByName(state.selectedAttribute),
    [state.selectedAttribute],
  );

  const selectedPerk = useMemo<Perk | Attribute | null>(() => {
    if (!selectedAttributeData) {
      return null;
    }

    if (!state.selectedPerk || state.selectedPerk === selectedAttributeData.name) {
      return selectedAttributeData;
    }

    return (
      getPerkByName(state.selectedPerk) ??
      selectedAttributeData.perks.find((perk) => perk.name === state.selectedPerk) ??
      selectedAttributeData
    );
  }, [selectedAttributeData, state.selectedPerk]);

  const selectAttribute = useCallback((attributeName: AttributeName) => {
    setState((currentState) => ({
      ...currentState,
      selectedAttribute: attributeName,
      selectedPerk: getDefaultSelectedPerk(attributeName),
    }));
  }, []);

  const selectPerk = useCallback((perkName: string) => {
    setState((currentState) => ({
      ...currentState,
      selectedPerk: perkName,
    }));
  }, []);

  const handlePerkLevelChange = useCallback(
    (itemName: string, newLevel: number, attributeName: AttributeName) => {
      const selectedAttribute = getAttributeByName(attributeName);

      if (!selectedAttribute) {
        return;
      }

      const isAttributeLevel = selectedAttribute.name === itemName && Boolean(selectedAttribute.levels);

      if (isAttributeLevel) {
        setState((currentState) => ({
          ...currentState,
          manualAttributeLevels: {
            ...currentState.manualAttributeLevels,
            [attributeName]: Math.max(newLevel, getMinRequiredAttributeLevel(attributeName, currentState.perkLevels)),
          },
          selectedPerk: itemName,
        }));

        return;
      }

      const perk = getPerkByName(itemName);

      if (!perk) {
        return;
      }

      const clampedLevel = Math.min(Math.max(newLevel, 0), getPerkMaxLevel(perk));

      setState((currentState) => ({
        ...currentState,
        perkLevels: {
          ...currentState.perkLevels,
          [itemName]: clampedLevel,
        },
        selectedPerk: itemName,
      }));
    },
    [],
  );

  const reset = useCallback(() => {
    setState(createInitialState());
  }, []);

  return {
    attributes,
    attributeLevels,
    manualAttributeLevels: state.manualAttributeLevels,
    perkLevels: state.perkLevels,
    selectedAttribute: state.selectedAttribute,
    selectedAttributeData,
    selectedPerk,
    totalCost,
    availableSkillPoints,
    characterLevel,
    selectAttribute,
    selectPerk,
    handlePerkLevelChange,
    reset,
  };
};
