import type { AttributeLevels } from './types';

export const MAX_CHARACTER_LEVEL = 300;
export const INITIAL_SKILL_POINTS = MAX_CHARACTER_LEVEL - 1;

export const INITIAL_ATTRIBUTE_LEVELS: AttributeLevels = {
  Perception: 1,
  Strength: 1,
  Fortitude: 1,
  Agility: 1,
  Intellect: 1,
  'Common perks': 1,
};
