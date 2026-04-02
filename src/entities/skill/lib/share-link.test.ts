import { describe, expect, it } from 'vitest';

import {
  ATTRIBUTE_NAMES,
  INITIAL_ATTRIBUTE_LEVELS,
  getMaxPerksPerAttribute,
  getPerksByAttribute,
} from '@/entities/skill';
import { parseBuildFromHash, serializeBuildToHash } from '@/entities/skill/lib/share-link';

describe('share-link', () => {
  it('round-trips build state through the URL hash format', () => {
    const manualAttributeLevels = {
      ...INITIAL_ATTRIBUTE_LEVELS,
      Perception: 3,
      Strength: 2,
    };

    const perkLevels = {
      'Animal Tracker': 1,
      'Dead Eye': 2,
      'Pack Mule': 1,
    };

    const parsedBuild = parseBuildFromHash(serializeBuildToHash(manualAttributeLevels, perkLevels));

    expect(parsedBuild?.manualAttributeLevels).toEqual(manualAttributeLevels);
    expect(parsedBuild?.perkLevels['Animal Tracker']).toBe(1);
    expect(parsedBuild?.perkLevels['Dead Eye']).toBe(2);
    expect(parsedBuild?.perkLevels['Pack Mule']).toBe(1);
  });

  it('rejects hashes with the wrong segment count', () => {
    expect(parseBuildFromHash('#invalid')).toBeNull();
  });

  it('clamps malformed attribute and perk levels to safe ranges', () => {
    const maxPerksPerAttribute = getMaxPerksPerAttribute();
    const invalidSegment = `${'9'.repeat(maxPerksPerAttribute)}z`;
    const safeSegment = `${'0'.repeat(maxPerksPerAttribute)}1`;
    const malformedHash = `#${[invalidSegment, ...ATTRIBUTE_NAMES.slice(1).map(() => safeSegment)].join('-')}`;

    const parsedBuild = parseBuildFromHash(malformedHash);
    const firstPerceptionPerk = getPerksByAttribute('Perception')[0];

    expect(parsedBuild).not.toBeNull();
    expect(parsedBuild?.manualAttributeLevels.Perception).toBe(1);
    expect(parsedBuild?.perkLevels[firstPerceptionPerk.name]).toBe(firstPerceptionPerk.levels.length);
  });
});
