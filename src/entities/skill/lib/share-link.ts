import { INITIAL_ATTRIBUTE_LEVELS } from '@/entities/skill/model/constants';
import { ATTRIBUTE_NAMES } from '@/entities/skill/model/types';
import type { AttributeLevels, PerkLevels } from '@/entities/skill/model/types';
import {
  getAttributeByName,
  getMaxPerksPerAttribute,
  getPerksByAttribute,
} from '@/entities/skill/model/selectors';

export interface SkillBuildSnapshot {
  manualAttributeLevels: AttributeLevels;
  perkLevels: PerkLevels;
}

const decodeAttributeLevel = (token: string): number => {
  if (token === 'a') {
    return 10;
  }

  const parsedLevel = Number.parseInt(token, 10);

  return Number.isFinite(parsedLevel) && parsedLevel > 0 ? parsedLevel : 1;
};

const encodeAttributeLevel = (level: number): string => (level === 10 ? 'a' : String(level));

const clampAttributeLevel = (attributeName: (typeof ATTRIBUTE_NAMES)[number], level: number): number => {
  const maxLevel = getAttributeByName(attributeName)?.levels?.length ?? 1;

  return Math.min(Math.max(level, 1), maxLevel);
};

export const serializeBuildToHash = (
  manualAttributeLevels: AttributeLevels,
  perkLevels: PerkLevels,
): string => {
  const maxPerksPerAttribute = getMaxPerksPerAttribute();
  const segments = ATTRIBUTE_NAMES.map((attributeName) => {
    const perkLevelTokens = getPerksByAttribute(attributeName).map(
      (perk) => perkLevels[perk.name] ?? 0,
    );

    while (perkLevelTokens.length < maxPerksPerAttribute) {
      perkLevelTokens.push(0);
    }

    return `${perkLevelTokens.join('')}${encodeAttributeLevel(manualAttributeLevels[attributeName] ?? 1)}`;
  });

  return `#${segments.join('-')}`;
};

export const parseBuildFromHash = (hash: string): SkillBuildSnapshot | null => {
  const normalizedHash = hash.replace(/^#/, '');

  if (!normalizedHash) {
    return null;
  }

  const segments = normalizedHash.split('-');

  if (segments.length !== ATTRIBUTE_NAMES.length) {
    return null;
  }

  const manualAttributeLevels: AttributeLevels = { ...INITIAL_ATTRIBUTE_LEVELS };
  const perkLevels: PerkLevels = {};

  ATTRIBUTE_NAMES.forEach((attributeName, index) => {
    const segment = segments[index];
    const encodedAttributeLevel = segment.slice(-1);
    const perkSegment = segment.slice(0, -1);

    manualAttributeLevels[attributeName] = clampAttributeLevel(
      attributeName,
      decodeAttributeLevel(encodedAttributeLevel),
    );

    getPerksByAttribute(attributeName).forEach((perk, perkIndex) => {
      const parsedLevel = Number.parseInt(perkSegment[perkIndex] ?? '0', 10) || 0;
      perkLevels[perk.name] = Math.min(Math.max(parsedLevel, 0), perk.levels.length);
    });
  });

  return { manualAttributeLevels, perkLevels };
};
