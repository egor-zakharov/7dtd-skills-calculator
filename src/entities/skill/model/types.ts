export const ATTRIBUTE_NAMES = [
  'Perception',
  'Strength',
  'Fortitude',
  'Agility',
  'Intellect',
  'Common perks',
] as const;

export const ATTRIBUTE_NAMES_WITH_LEVELS = ATTRIBUTE_NAMES.filter(
  (attributeName) => attributeName !== 'Common perks',
) as Exclude<AttributeName, 'Common perks'>[];

export type AttributeName = (typeof ATTRIBUTE_NAMES)[number];

export type AttributeLevels = Record<AttributeName, number>;

export type PerkLevels = Record<string, number>;

export type PerkCategory =
  | 'combat'
  | 'general'
  | 'scavenging'
  | 'survival'
  | 'construction'
  | 'athletics'
  | 'stealth'
  | 'influence'
  | 'intellect'
  | 'recovery';

export interface PerkLevel {
  level: number;
  name?: string;
  attributeRequirement: number;
  description: string;
  cost: number;
}

export interface Perk {
  name: string;
  category: PerkCategory;
  levels: PerkLevel[];
  associatedAttribute: AttributeName;
  icon?: string;
}

export interface Attribute {
  name: AttributeName;
  description?: string;
  levels?: PerkLevel[];
  perks: Perk[];
  icon?: string;
}
