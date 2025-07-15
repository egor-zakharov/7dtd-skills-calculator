export interface PerkLevel {
  level: number;
  name?: string;
  attributeRequirement: number;
  description: string;
  cost: number;
}

export interface Perk {
  name: string;
  category: 'combat' | 'general' | 'scavenging' | 'survival' | 'construction' | 'athletics' | 'stealth' | 'influence' | 'intellect' | 'recovery';
  levels: PerkLevel[];
  associatedAttribute: 'Perception' | 'Strength' | 'Fortitude' | 'Agility' | 'Intellect' | 'Common perks';
  icon?: string; 
}

export interface Attribute {
  name: string;
  description?: string; 
  levels?: PerkLevel[];
  perks: Perk[];
  icon?: string;
}