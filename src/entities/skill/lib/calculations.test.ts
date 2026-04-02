import { describe, expect, it } from 'vitest';

import { INITIAL_ATTRIBUTE_LEVELS } from '@/entities/skill';
import {
  calculateAttributeCost,
  calculatePerkCost,
  calculateTotalCost,
  getMinRequiredAttributeLevel,
  resolveAttributeLevels,
} from '@/entities/skill/lib/calculations';

describe('calculations', () => {
  it('derives the minimum required attribute level from invested perks', () => {
    expect(
      getMinRequiredAttributeLevel('Perception', {
        'Animal Tracker': 1,
        'Dead Eye': 4,
      }),
    ).toBe(7);
  });

  it('keeps attribute levels at or above invested perk requirements', () => {
    expect(
      resolveAttributeLevels(
        {
          ...INITIAL_ATTRIBUTE_LEVELS,
          Perception: 2,
        },
        {
          'Dead Eye': 4,
        },
      ),
    ).toMatchObject({
      Perception: 7,
    });
  });

  it('calculates attribute, perk and total costs consistently', () => {
    const attributeLevels = {
      ...INITIAL_ATTRIBUTE_LEVELS,
      Perception: 3,
      Strength: 2,
    };

    const perkLevels = {
      'Animal Tracker': 1,
      'Dead Eye': 2,
    };

    expect(calculateAttributeCost(attributeLevels)).toBe(3);
    expect(calculatePerkCost(perkLevels)).toBe(3);
    expect(calculateTotalCost(attributeLevels, perkLevels)).toBe(6);
  });
});
