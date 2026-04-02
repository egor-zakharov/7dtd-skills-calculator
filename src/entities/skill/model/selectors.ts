import { attributes } from './catalog';
import type { Attribute, AttributeName, Perk } from './types';

export const getAttributeByName = (attributeName: AttributeName): Attribute | undefined =>
  attributes.find((attribute) => attribute.name === attributeName);

export const getPerksByAttribute = (attributeName: AttributeName): Perk[] =>
  getAttributeByName(attributeName)?.perks ?? [];

export const getPerkByName = (perkName: string): Perk | undefined =>
  attributes.flatMap((attribute) => attribute.perks).find((perk) => perk.name === perkName);

export const getPerkOwnerAttribute = (perkName: string): Attribute | undefined =>
  attributes.find((attribute) => attribute.perks.some((perk) => perk.name === perkName));

export const getMaxPerksPerAttribute = (): number =>
  Math.max(...attributes.map((attribute) => attribute.perks.length));
