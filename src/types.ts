export interface PerkLevel {
  level: number;
  name?: string;
  attributeRequirement: number;
  description: string;
  cost: number; // Новая стоимость в скиллпоинтах
}

export interface Perk {
  name: string;
  category: 'combat' | 'general' | 'scavenging' | 'survival' | 'construction' | 'athletics' | 'stealth' | 'influence' | 'intellect' | 'recovery';
  levels: PerkLevel[];
  associatedAttribute: 'Perception' | 'Strength' | 'Fortitude' | 'Agility' | 'Intellect' | 'Common perks';
  icon?: string; // Опциональное поле для иконки перка
}

export interface Attribute {
  name: string;
  description?: string; // Сделали опциональным
  levels?: PerkLevel[]; // Сделали опциональным
  perks: Perk[];
  icon?: string; // Опциональное поле для иконки перка
}