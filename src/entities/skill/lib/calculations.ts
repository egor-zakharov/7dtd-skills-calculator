import { attributes } from '@/entities/skill/model/catalog';
import { ATTRIBUTE_NAMES_WITH_LEVELS } from '@/entities/skill/model/types';
import type { AttributeLevels, AttributeName, Perk, PerkLevels } from '@/entities/skill/model/types';

const getUnlockedLevel = (perk: Perk, currentLevel: number) =>
  perk.levels.find((levelData) => levelData.level === currentLevel);

export const getPerkMaxLevel = (perk: Perk): number => perk.levels.length;

export const getMinRequiredAttributeLevel = (
  attributeName: AttributeName,
  perkLevels: PerkLevels,
): number => {
  const attribute = attributes.find((entry) => entry.name === attributeName);

  if (!attribute || attribute.name === 'Common perks') {
    return 1;
  }

  const activePerks = attribute.perks.filter((perk) => (perkLevels[perk.name] ?? 0) > 0);

  if (activePerks.length === 0) {
    return 1;
  }

  return Math.max(
    1,
    ...activePerks.map((perk) => getUnlockedLevel(perk, perkLevels[perk.name] ?? 0)?.attributeRequirement ?? 1),
  );
};

export const resolveAttributeLevels = (
  manualAttributeLevels: AttributeLevels,
  perkLevels: PerkLevels,
): AttributeLevels => {
  const nextLevels: AttributeLevels = { ...manualAttributeLevels };

  for (const attributeName of ATTRIBUTE_NAMES_WITH_LEVELS) {
    nextLevels[attributeName] = Math.max(
      manualAttributeLevels[attributeName],
      getMinRequiredAttributeLevel(attributeName, perkLevels),
    );
  }

  return nextLevels;
};

export const calculateAttributeCost = (attributeLevels: AttributeLevels): number =>
  Object.entries(attributeLevels).reduce((totalCost, [attributeName, currentLevel]) => {
    const attribute = attributes.find(
      (entry) => entry.name === attributeName && entry.levels,
    );

    if (!attribute?.levels) {
      return totalCost;
    }

    const spentPoints = attribute.levels
      .filter((levelData) => levelData.level <= currentLevel)
      .reduce((sum, levelData) => sum + levelData.cost, 0);

    return totalCost + spentPoints;
  }, 0);

export const calculatePerkCost = (perkLevels: PerkLevels): number =>
  Object.entries(perkLevels).reduce((totalCost, [perkName, currentLevel]) => {
    if (currentLevel <= 0) {
      return totalCost;
    }

    const perk = attributes.flatMap((attribute) => attribute.perks).find((entry) => entry.name === perkName);

    if (!perk) {
      return totalCost;
    }

    const spentPoints = perk.levels
      .filter((levelData) => levelData.level <= currentLevel)
      .reduce((sum, levelData) => sum + levelData.cost, 0);

    return totalCost + spentPoints;
  }, 0);

export const calculateTotalCost = (
  attributeLevels: AttributeLevels,
  perkLevels: PerkLevels,
): number => calculateAttributeCost(attributeLevels) + calculatePerkCost(perkLevels);
