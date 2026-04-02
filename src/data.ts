import { Attribute } from './types';

// Generated from official 7 Days to Die progression/localization files.
// Run scripts/generate-data-from-game.ps1 to refresh this file.
export const attributes: Attribute[] = [
  {
    name: "Perception",
    description: "Perception is the measure of your sensory awareness. Increasing Perception raises the headshot bonus and dismemberment chance with spears, rifles, explosive weapons and tools.",
    icon: new URL("/assets/perception-icon.png", import.meta.url).href,
    levels: [
      { level: 1, name: "Oblivious", attributeRequirement: 1, cost: 0, description: "You are pretty oblivious in the perception department. Deal 200% head shot damage and have a 5% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations." },
      { level: 2, name: "Unaware", attributeRequirement: 2, cost: 1, description: "You are still unaware of most things around you. Deal 210% head shot damage and have a 10% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations." },
      { level: 3, name: "Unobservant", attributeRequirement: 3, cost: 1, description: "You are sometimes unobservant but getting better. Deal 220% head shot damage and have a 15% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations." },
      { level: 4, name: "Incognizant", attributeRequirement: 4, cost: 1, description: "Your incognizant perception is usually just a small setback. Deal 230% head shot damage and have a 20% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations." },
      { level: 5, name: "Observant", attributeRequirement: 5, cost: 1, description: "You are observant and notice just enough to make a big difference. Deal 240% head shot damage and have a 25% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations." },
      { level: 6, name: "Attentive", attributeRequirement: 6, cost: 2, description: "Your attention to detail is clearly aiding you in combat. Deal 250% head shot damage and have a 30% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations." },
      { level: 7, name: "Discerning", attributeRequirement: 7, cost: 2, description: "You can discern weak points in enemies with ease now. Deal 260% head shot damage and have a 35% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations." },
      { level: 8, name: "Perceptive", attributeRequirement: 8, cost: 2, description: "Your perception is astounding. Deal 270% head shot damage and have a 40% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations." },
      { level: 9, name: "Astute Awareness", attributeRequirement: 9, cost: 3, description: "Your awareness is astute. Deal 285% head shot damage and have a 45% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations." },
      { level: 10, name: "Boom Headshot", attributeRequirement: 10, cost: 3, description: "You are unrivaled at making heads go boom.  Deal 300% head shot damage and have a 50% chance to dismember with rifles, explosives, spears and tools governed by Salvage Operations." }
    ],
    perks: [
      {
        name: "Animal Tracker",
        icon: new URL("/assets/animal-tracker-icon.png", import.meta.url).href,
        category: "general",
        associatedAttribute: "Perception",
        levels: [
          { level: 1, name: "Trail Finder", attributeRequirement: 1, cost: 1, description: "Crouch down and use your keen eyesight to find the tracks of small animals like chickens, rabbits, or snakes.\nTracked animals are marked on your compass and map." },
          { level: 2, name: "Ranger", attributeRequirement: 2, cost: 1, description: "Your hawk like senses can detect deer and boars." },
          { level: 3, name: "Tracker", attributeRequirement: 3, cost: 1, description: "Become the ultimate tracker. You can detect predators like coyotes, wolves, and zombie dogs." },
          { level: 4, name: "Big Game Hunter", attributeRequirement: 5, cost: 1, description: "When the tracks get bigger, so does the danger. Track bigger game like mountain lions and bears." },
          { level: 5, name: "Predator\u0027s Instinct", attributeRequirement: 7, cost: 1, description: "Dire wolves and zombie bears might rule the wasteland, but you can track them with ease." }
        ]
      },
      {
        name: "Dead Eye",
        icon: new URL("/assets/dead-eye-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Perception",
        levels: [
          { level: 1, name: "Pot Shot", attributeRequirement: 1, cost: 1, description: "Pot Shot. You can hit the broad side of a barn and do 10% more damage with rifles. Aim and reload 10% faster." },
          { level: 2, name: "Rifleman", attributeRequirement: 3, cost: 1, description: "You are a rifleman and can hit a large rock at 30 yards. Rifles deal 20% more damage, aim 20% faster, reload 15% faster." },
          { level: 3, name: "Marksman", attributeRequirement: 5, cost: 1, description: "You are now a marksman and can hold your own. Rifles deal 30% more damage, aim 32% faster, reload 20% faster, and use 10% less stamina while aiming down the sights.\nKill Streak: Successive kills increase damage bonus by 10%, 20% to a maximum of 30%." },
          { level: 4, name: "Sharpshooter", attributeRequirement: 7, cost: 1, description: "You are now a sharpshooter. Rifles deal 40% more damage, aim 45% faster, reload 25% faster, and use 20% less stamina while aiming down the sights.\nKill Streak: Successive kills increase damage bonus by 20%, 30% to a maximum of 40%." },
          { level: 5, name: "Dead Eye", attributeRequirement: 10, cost: 1, description: "Dead Eye: Through all the hard training and countless shooting, you are now a dead eye sniper. Rifles deal 50% more damage, aim 60% faster, reload 30% faster, and use 30% less stamina while aiming down the sights.\nKill Streak: Successive kills increase damage bonus by 30%, 40% up to a maximum of 50%." }
        ]
      },
      {
        name: "Demolitions Expert",
        icon: new URL("/assets/demolitions-expert-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Perception",
        levels: [
          { level: 1, name: "Grenadier Initiate", attributeRequirement: 1, cost: 1, description: "You are now a grenadier initiate, be careful with those explosives. Increase damage 10%, reload speed 15%, aim 10% faster, and a 5% greater chance to dismember." },
          { level: 2, name: "I\u0027m TNT, I\u0027m dynamite.", attributeRequirement: 3, cost: 1, description: "Increase damage by 20%, reload speed 20%, aim 20% faster, and a 10% greater chance to dismember." },
          { level: 3, name: "Explosives Handler", attributeRequirement: 5, cost: 1, description: "You are now an explosives handler. Increase damage 30%, increase reload speed by 25%, aim 30% faster, have a 33% chance to cripple enemies and a 20% greater chance to dismember." },
          { level: 4, name: "Rocket Man", attributeRequirement: 7, cost: 1, description: "You are now a Rocket Man. Increase damage 40%, reload speed by 30%, aim 40% faster, have a 66% chance to cripple enemies and a 30% greater chance to dismember." },
          { level: 5, name: "Demolitions Expert", attributeRequirement: 10, cost: 1, description: "Demolitions expert. You make things go boom in a big way. Increase damage 50%, reload speed by 35%, aim 50% faster and a 45% greater chance to dismember." }
        ]
      },
      {
        name: "Perception Mastery",
        icon: new URL("/assets/perception-mastery-icon.png", import.meta.url).href,
        category: "general",
        associatedAttribute: "Perception",
        levels: [
          { level: 1, name: "Cushion Crawler", attributeRequirement: 6, cost: 1, description: "Harvest dukes and cash from cushioned seating, beds, shopping baskets, shopping carts, car seats, suitcases, and clothing piles." },
          { level: 2, name: "Salvage Specialist", attributeRequirement: 7, cost: 1, description: "Harvest steel from cars, gun safes, and shopping carts." },
          { level: 3, name: "Vital Wound", attributeRequirement: 8, cost: 1, description: "Spear and rifle primary attacks cause bleeding damage." },
          { level: 4, name: "Blood Rush", attributeRequirement: 9, cost: 1, description: "Sprinting power attacks with spears deal 25% more damage." },
          { level: 5, name: "Long shot", attributeRequirement: 10, cost: 1, description: "Rifle shots deal 50% more damage." }
        ]
      },
      {
        name: "Quick and Perceptive",
        icon: new URL("/assets/quick-and-perceptive-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Perception",
        levels: [
          { level: 1, name: "Quick Hands", attributeRequirement: 2, cost: 1, description: "You have developed quick hands.\nAttacks with spears are 5% faster." },
          { level: 2, name: "Sudden Strike", attributeRequirement: 4, cost: 1, description: "Your training has paid off! You\u0027ve now mastered the sudden strike.\nAttacks with spears are 10% faster." },
          { level: 3, name: "Rapid Onslaught", attributeRequirement: 6, cost: 1, description: "A relentless flurry of blows overwhelms your enemy.\nAttacks with spears are 15% faster." },
          { level: 4, name: "Swift Execution", attributeRequirement: 8, cost: 1, description: "You waste no motion; every attack is lethal.\nAttacks with spears are 20% faster." },
          { level: 5, name: "Lighting Reflexes", attributeRequirement: 10, cost: 1, description: "With lightning reflexes, most opponents never see it coming.\nAttacks with spears are 25% faster." }
        ]
      },
      {
        name: "Salvage Operations",
        icon: new URL("/assets/salvage-operations-icon.png", import.meta.url).href,
        category: "scavenging",
        associatedAttribute: "Perception",
        levels: [
          { level: 1, name: "Junk Collector", attributeRequirement: 1, cost: 1, description: "Who knows what useful items can be found when tearing things apart? Salvage tools deal 10% more damage and gain up to 20% more resources with a wrench, ratchet or impact driver. Stamina costs are reduced by 8% and 15% for power attacks. Find more salvage tools and parts in loot." },
          { level: 2, name: "Scavenger", attributeRequirement: 2, cost: 1, description: "Most people call you “Scavver”, but at least it\u0027s an honest living. Salvage tools deal 20% more damage and gain up to 40% more resources with a wrench, ratchet or impact driver. Stamina costs are reduced by 15% and 30% for power attacks. Find more salvage tools and parts in loot." },
          { level: 3, name: "Salvager", attributeRequirement: 3, cost: 1, description: "You have a knack for salvaging more useful parts than the average scrapper. Salvage tools deal 30% more damage and gain up to 60% more resources with a wrench, ratchet or impact driver. Stamina costs are reduced by 20% and 40% for power attacks. Find more salvage tools and parts in loot." },
          { level: 4, name: "Parts Collector", attributeRequirement: 5, cost: 1, description: "Your ability to gather salvaged parts is remarkable. Salvage tools deal 40% more damage and gain up to 80% more resources with a wrench, ratchet or impact driver. Stamina costs are reduced by 25% and 50% for power attacks. Find more salvage tools and parts in loot." },
          { level: 5, name: "Master Scavenger", attributeRequirement: 7, cost: 1, description: "You\u0027re king of the junk dealers and envy of the grease monkeys of the apocalypse. Salvage tools deal 50% more damage and gain up to 100% more resources with a wrench, ratchet or impact driver. Find more salvage tools and parts in loot." }
        ]
      },
      {
        name: "Spear Master",
        icon: new URL("/assets/spear-master-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Perception",
        levels: [
          { level: 1, name: "Sharp Sticks", attributeRequirement: 1, cost: 1, description: "Sticks and stones can\u0027t break my bones, but if combined make a nice spear. Spears do 10% more damage and power attacks have a 20% chance to slow enemies. Stamina costs are reduced by 8% and 15% for power attacks. Find more spears and parts in loot." },
          { level: 2, name: "Impaler", attributeRequirement: 3, cost: 1, description: "Spears inflict 20% more damage and power attacks have a 40% chance to slow enemies. Stamina costs are reduced by 15% and 30% for power attacks. Find more spears and parts in loot." },
          { level: 3, name: "Spearman", attributeRequirement: 5, cost: 1, description: "Spears inflict 30% more damage and power attacks have a 60% chance to slow enemies. Stamina costs are reduced by 20% and 40% for power attacks. Killing blows grant 10 stamina. Find more spears and parts in loot." },
          { level: 4, name: "Lanceman", attributeRequirement: 7, cost: 1, description: "Spears inflict 40% more damage and power attacks have a 80% chance to slow enemies. Stamina costs are reduced by 25% and 50% for power attacks. Killing blows grant 20 stamina. Find more spears and parts in loot." },
          { level: 5, name: "Spear Master", attributeRequirement: 10, cost: 1, description: "You\u0027re now a Spear Master! If this wasn\u0027t the apocalypse, you could be in the Olympics! Spears inflict 50% more damage and power attacks have a 100% chance to slow enemies. Killing blows grant 30 stamina. Find more spears and parts in loot." }
        ]
      },
      {
        name: "The Infiltrator",
        icon: new URL("/assets/the-infiltrator-icon.png", import.meta.url).href,
        category: "general",
        associatedAttribute: "Perception",
        levels: [
          { level: 1, name: "Mole", attributeRequirement: 1, cost: 1, description: "You are now a mole and can move through dangerous traps easier. \nLoose board traps and land mines trigger half a second slower.\nTake 20% less damage from land mines.\nCan pick up Tin Land Mines." },
          { level: 2, name: "Trespasser", attributeRequirement: 2, cost: 1, description: "A trespasser can move with confidence through dangerous settings.\nLoose board traps and land mines trigger 1 second slower.\nTake 35% less damage from land mines.\nCan pick up Cooking Pot Land Mines." },
          { level: 3, name: "The Infiltrator", attributeRequirement: 3, cost: 1, description: "The Infiltrator can safely navigate the most dangerous minefields.\nLoose board traps and land mines trigger 2 seconds slower.\nTake 50% less damage from land mines.\nCan pick up Hubcap Land Mines." },
          { level: 4, name: "Light Foot", attributeRequirement: 5, cost: 1, description: "Traps can\u0027t catch a Light Foot.\nLoose board traps and land mines trigger 3 seconds slower.\nTake 60% less damage from land mines.\nCan pick up Air Filter Land Mines." },
          { level: 5, name: "Land Mine Savant", attributeRequirement: 7, cost: 1, description: "Land Mine Savants walk freely without fear.\nLoose board traps and land mines trigger 5 seconds slower.\nTake 75% less damage from land mines." }
        ]
      },
      {
        name: "The Penetrator",
        icon: new URL("/assets/the-penetrator-icon.png", import.meta.url).href,
        category: "general",
        associatedAttribute: "Perception",
        levels: [
          { level: 1, name: "Piercing Shot", attributeRequirement: 1, cost: 1, description: "Ignore 10% of armor with firearms and archery, 20% on anything with Target Armor reduction." },
          { level: 2, name: "Perforator", attributeRequirement: 4, cost: 1, description: "Ignore 15% of armor with firearms and archery, 30% on anything with Target Armor reduction.\nArmor-piercing rounds can penetrate an additional target or a block of up to 500 hit points when using Hunting, Lever Action, or Sniper Rifles." },
          { level: 3, name: "Puncturer", attributeRequirement: 6, cost: 1, description: "Ignore 20% of armor with firearms and archery, 40% on anything with Target Armor reduction.\nArmor-piercing rounds can penetrate two additional targets or a block of up to 750 hit points when using Hunting, Lever Action, or Sniper Rifles." },
          { level: 4, name: "Impaler", attributeRequirement: 8, cost: 1, description: "Ignore 20% of armor with firearms and archery, 50% on anything with Target Armor reduction.\nArmor-piercing rounds can penetrate three additional targets or a block of up to 1000 hit points when using Hunting, Lever Action, or Sniper Rifles." },
          { level: 5, name: "The Penetrator", attributeRequirement: 10, cost: 1, description: "Ignore 20% of armor with firearms and archery, 50% on anything with Target Armor reduction.\nArmor-piercing rounds can penetrate four additional targets or a block of up to 1000 hit points when using Hunting, Lever Action, or Sniper Rifles." }
        ]
      },
      {
        name: "Treasure Hunter",
        icon: new URL("/assets/treasure-hunter-icon.png", import.meta.url).href,
        category: "scavenging",
        associatedAttribute: "Perception",
        levels: [
          { level: 1, name: "Plunderer", attributeRequirement: 1, cost: 1, description: "Treasure radius decreases 1m for every 7 blocks dug instead of 10.\nDo 50% more damage to dirt.\nFind 10% more items in buried chests." },
          { level: 2, name: "Marauder", attributeRequirement: 2, cost: 1, description: "Treasure radius decreases 1m for every 5 blocks dug.\nDo 100% more damage to dirt.\nFind 20% more items in buried chests." },
          { level: 3, name: "Treasure Hunter", attributeRequirement: 3, cost: 1, description: "Treasure radius decreases 1m for every 3 blocks dug.\nReduces damage taken from enemies by 50% when near buried chests.\nFind 30% more items in buried chests." },
          { level: 4, name: "Gold Digger", attributeRequirement: 5, cost: 1, description: "Adds extra dukes and cash to all buried chests." },
          { level: 5, name: "Relic Finder", attributeRequirement: 7, cost: 1, description: "Adds an extra weapon, armor, or rare item to all buried chests." }
        ]
      }
    ]
  },
  {
    name: "Strength",
    description: "Strength is the measure of your muscular might. Increasing Strength raises the headshot bonus and dismemberment chance with shotguns, clubs, sledgehammers and tools.",
    icon: new URL("/assets/strength-icon.png", import.meta.url).href,
    levels: [
      { level: 1, name: "Weakling", attributeRequirement: 1, cost: 0, description: "Everyone wants to be a bodybuilder but nobody wants to lift those heavy ass weights. Deal 200% head shot damage and have a 5% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69\u0027er." },
      { level: 2, name: "Scrawny", attributeRequirement: 2, cost: 1, description: "You might be scrawny but you have a fire inside to get big and strong. Deal 210% head shot damage and have a 10% chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69\u0027er." },
      { level: 3, name: "Milk Drinker", attributeRequirement: 3, cost: 1, description: "What is a milk drinker like you doing in the zombie apocalypse? Deal 220% head shot damage and have a 15% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69\u0027er." },
      { level: 4, name: "Softie", attributeRequirement: 4, cost: 1, description: "Your spare tire might keep you from starving but isn\u0027t helping you swing a sledgehammer. Deal 230% head shot damage and have a 20% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69\u0027er." },
      { level: 5, name: "Fit", attributeRequirement: 5, cost: 1, description: "You are fit and able to deal 240% head shot damage and have a 25% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69\u0027er." },
      { level: 6, name: "Strong", attributeRequirement: 6, cost: 2, description: "You are very strong and all the normies at the gym are envious. Deal 250% head shot damage and have a 30% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69\u0027er." },
      { level: 7, name: "Body Builder", attributeRequirement: 7, cost: 2, description: "Pumping clubs and sledgehammers has given you some gains bro. Deal 260% head shot damage and have a 35% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69\u0027er." },
      { level: 8, name: "Power Lifter", attributeRequirement: 8, cost: 2, description: "Your massive strength is legendary. Deal 270% head shot damage and have a 40% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69\u0027er." },
      { level: 9, name: "Beast Mode", attributeRequirement: 9, cost: 3, description: "Size, strength and power are all champion level now. Deal 285% head shot damage and have a 45% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69\u0027er." },
      { level: 10, name: "Olympic Champion", attributeRequirement: 10, cost: 3, description: "You could be an Olympic champion if the apocalypse hadn\u0027t crushed that dream. Now you can just crush zombies. Deal 300% head shot damage and have a 50% greater chance to dismember with shotguns, clubs, sledgehammers and tools governed by Miner 69\u0027er." }
    ],
    perks: [
      {
        name: "Big and Fast",
        icon: new URL("/assets/lightning-hands-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Strength",
        levels: [
          { level: 1, name: "Strong Start", attributeRequirement: 2, cost: 1, description: "You\u0027re big, you\u0027re strong, now get moving.\nClubs and sledgehammers are 5% faster." },
          { level: 2, name: "Big Guns", attributeRequirement: 4, cost: 1, description: "Swing those big guns faster!\nClubs and sledgehammers are 10% faster." },
          { level: 3, name: "Hard Hitter", attributeRequirement: 6, cost: 1, description: "The faster you swing, the harder you hit!\nClubs and sledgehammers are 15% faster." },
          { level: 4, name: "Bone Crusher", attributeRequirement: 8, cost: 1, description: "More muscle, more speed, more broken bones.\nClubs and sledgehammers are 20% faster." },
          { level: 5, name: "Heavy Metal", attributeRequirement: 10, cost: 1, description: "Let your enemies take a ride on heavy metal.\nClubs and sledgehammers are 25% faster." }
        ]
      },
      {
        name: "Boomstick",
        icon: new URL("/assets/boomstick-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Strength",
        levels: [
          { level: 1, name: "Shotgun Hobo", attributeRequirement: 1, cost: 1, description: "Maybe your aim isn\u0027t so good or you just like doing a lot of damage up close and personal. Either way a hobo with a shotgun is not to be messed with. Shotguns deal 10% more damage, 10% faster fire rate, and 10% faster reload. Stun enemies for 6 seconds. Find more shotguns, parts, and shotgun ammo in loot." },
          { level: 2, name: "Shotgun Nomad", attributeRequirement: 3, cost: 1, description: "Roaming the wastelands as a nomad have improved your abilities with shotguns. Shotguns deal 20% more damage, 20% faster fire rate, and 15% faster reload. Find more shotguns, parts, and shotgun ammo in loot." },
          { level: 3, name: "Shotgun Pro", attributeRequirement: 5, cost: 1, description: "If shotgun meets were still a thing, you\u0027d be hitting those clay ducks and be considered a shotgun pro. Shotguns deal 30% more damage, 30% faster fire rate, and 20% faster reload. Stun enemies for 8 seconds. Find more shotguns, parts, and shotgun ammo in loot." },
          { level: 4, name: "Shotgun Master", attributeRequirement: 7, cost: 1, description: "You are now very deadly with a shotgun and considered a shotgun master and master of the shotgun. Shotguns deal 40% more damage, 40% faster fire rate, and 25% faster reload. Find more shotguns, parts, and shotgun ammo in loot." },
          { level: 5, name: "Boomstick", attributeRequirement: 10, cost: 1, description: "You\u0027ve ascended to the legendary status of Shotgun Messiah, as you are the last thing they see before meeting their maker. Shotguns deal 50% more damage, 50% faster fire rate, and a 30% faster reload. Find more shotguns, parts, and shotgun ammo in loot.\nLeg shots cripple opponents." }
        ]
      },
      {
        name: "Grand Slam",
        icon: new URL("/assets/grand-slam-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Strength",
        levels: [
          { level: 1, name: "Single", attributeRequirement: 1, cost: 1, description: "Sprinting Power attacks with clubs, bats, or sledgehammers have a 10% chance to ragdoll enemies." },
          { level: 2, name: "Double", attributeRequirement: 3, cost: 1, description: "Sprinting Power attacks with clubs, bats, or sledgehammers have a 20% chance to ragdoll enemies." },
          { level: 3, name: "Triple", attributeRequirement: 5, cost: 1, description: "Sprinting Power attacks with clubs, bats, or sledgehammers have a 30% chance to ragdoll enemies." },
          { level: 4, name: "Home Run", attributeRequirement: 7, cost: 1, description: "Sprinting Power attacks with clubs, bats, or sledgehammers have a 40% chance to ragdoll enemies." },
          { level: 5, name: "Grand Slam King", attributeRequirement: 10, cost: 1, description: "Sprinting Power attacks with clubs, bats, or sledgehammers have a 50% chance to ragdoll enemies." }
        ]
      },
      {
        name: "Junk Miner",
        icon: new URL("/assets/junk-miner-icon.png", import.meta.url).href,
        category: "construction",
        associatedAttribute: "Strength",
        levels: [
          { level: 1, name: "Trash Digger", attributeRequirement: 1, cost: 1, description: "Gain 20% more resources from mining junk such as cloth, plastic etc." },
          { level: 2, name: "Scrap Shoveler", attributeRequirement: 3, cost: 1, description: "Gain 40% more resources from mining junk such as cloth, plastic etc." },
          { level: 3, name: "Debris Harvester", attributeRequirement: 5, cost: 1, description: "Gain 60% more resources from mining junk such as cloth, plastic etc." },
          { level: 4, name: "Industrial Pulverizer", attributeRequirement: 7, cost: 1, description: "Gain 80% more resources from mining junk such as cloth, plastic etc." },
          { level: 5, name: "Junkpocalypse", attributeRequirement: 10, cost: 1, description: "Gain 100% more resources from mining junk such as cloth, plastic etc." }
        ]
      },
      {
        name: "Miner 69\u0027er",
        icon: new URL("/assets/miner-69-er-icon.png", import.meta.url).href,
        category: "construction",
        associatedAttribute: "Strength",
        levels: [
          { level: 1, name: "Tool Nipper", attributeRequirement: 1, cost: 1, description: "Everyone has to start somewhere. Increase tool damage by 10% and block damage by 30% with any axe, pick, shovel, chainsaw or auger. Stamina costs are reduced by 8% and 15% for power attacks. Find more tools and parts in loot." },
          { level: 2, name: "Johnny Newcome", attributeRequirement: 2, cost: 1, description: "You\u0027re still a little green, but you aren\u0027t fetching the Muckmen blackstrap anymore. Increase tool damage by 20% and block damage by 60% with any axe, pick, shovel, chainsaw or auger. Stamina costs are reduced by 15% and 30% for power attacks. Find more tools and parts in loot." },
          { level: 3, name: "Muckman", attributeRequirement: 3, cost: 1, description: "You\u0027re now a professional miner, or what they called “Muckmen”, back in the day. Increase tool damage by 30% and block damage by 90% with any axe, pick, shovel, chainsaw or auger. Stamina costs are reduced by 20% and 40% for power attacks. Find more tools and parts in loot." },
          { level: 4, name: "Boulder Buster", attributeRequirement: 5, cost: 1, description: "You can crack rock with the best of them now. Increase tool damage by 40% and block damage by 120% with any axe, pick, shovel, chainsaw or auger. Stamina costs are reduced by 25% and 50% for power attacks. Find more tools and parts in loot." },
          { level: 5, name: "Miner 69\u0027er", attributeRequirement: 7, cost: 1, description: "You\u0027re the legendary Miner 69\u0027er and can find the juicy center of any rock faster than a horny bullfrog. Increase damage by 50% and block damage by 150% with any axe, pick, shovel, chainsaw or auger. Find more tools and parts in loot." }
        ]
      },
      {
        name: "Mother Lode",
        icon: new URL("/assets/mother-lode-icon.png", import.meta.url).href,
        category: "construction",
        associatedAttribute: "Strength",
        levels: [
          { level: 1, name: "Paydirt", attributeRequirement: 1, cost: 1, description: "You\u0027ve found your first small vein and are envy of all the Johnny Newcomes.\nHarvest 20% more from ore, stone, terrain blocks and trees with any axe, pick, shovel, chainsaw or auger." },
          { level: 2, name: "Main Vein", attributeRequirement: 2, cost: 1, description: "Finding more ore is starting to become second nature to you. Harvest 40% more from ore, stone, terrain blocks and trees with any axe, pick, shovel, chainsaw or auger." },
          { level: 3, name: "Struck Gold", attributeRequirement: 3, cost: 1, description: "You\u0027ve hit your stride and can probably make a decent living at this. Harvest 60% more from ore, stone, terrain blocks and trees with any axe, pick, shovel, chainsaw or auger." },
          { level: 4, name: "Gold Mine", attributeRequirement: 5, cost: 1, description: "You are going to need an Irish baby buggy to carry all this ore. Harvest 80% more from ore, stone, terrain blocks and trees with any axe, pick, shovel, chainsaw or auger." },
          { level: 5, name: "Mother Lode", attributeRequirement: 7, cost: 1, description: "Mining is second nature to you and you find the mother lode everywhere you go. Harvest 100% more from ore, stone, terrain blocks and trees with any axe, pick, shovel, chainsaw or auger." }
        ]
      },
      {
        name: "Pack Mule",
        icon: new URL("/assets/pack-mule-icon.png", import.meta.url).href,
        category: "general",
        associatedAttribute: "Strength",
        levels: [
          { level: 1, name: "Disorganized", attributeRequirement: 1, cost: 1, description: "Who has time to organize their stuff perfectly?\nCarry three more items without being encumbered.\nIncreases the crafting speed of items from your inventory by 10%.\nYour pack has a 5% chance to ignore physical damage when hit." },
          { level: 2, name: "Bag Lady", attributeRequirement: 2, cost: 1, description: "You know it\u0027s in there somewhere.\nCarry an additional three more items without being encumbered.\nIncreases the crafting speed of items from your inventory by 20%.\nYour pack has a 10% chance to ignore physical damage when hit." },
          { level: 3, name: "Neat and Tidy", attributeRequirement: 3, cost: 1, description: "You know exactly where everything is.\nCarry four additional items without being encumbered.\nIncreases the crafting speed of items from your inventory by 30%.\nYour pack has a 15% chance to ignore physical damage when hit." },
          { level: 4, name: "Shipshape", attributeRequirement: 4, cost: 1, description: "You just passed inspection, private.\nCarry four more items without being encumbered.\nIncreases the crafting speed of items from your inventory by 40%.\nYour pack has a 20% chance to ignore physical damage when hit." },
          { level: 5, name: "Pack Mule", attributeRequirement: 5, cost: 1, description: "Now you\u0027re showing off! You\u0027re either part mule or strongman.\nCarry four more items without being encumbered.\nIncreases the crafting speed of items from your inventory by 50%.\nYour pack has a 25% chance to ignore physical damage when hit." }
        ]
      },
      {
        name: "Pummel Pete",
        icon: new URL("/assets/pummel-pete.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Strength",
        levels: [
          { level: 1, name: "Roughneck", attributeRequirement: 1, cost: 1, description: "You might not pack a punch, but as a roughneck you can swing a club! Clubs deal 10% more damage, attacks do 40% more damage to stunned enemies, and power attacks have a 60% chance to knock foes down. Stamina reduced by 8% and power attacks by 15%. Find more clubs and parts in loot." },
          { level: 2, name: "Thug", attributeRequirement: 3, cost: 1, description: "You\u0027re making a name for yourself as a dangerous thug. Clubs deal 20% more damage, attacks do 80% more damage to stunned enemies, and power attacks have a 70% chance to knock foes down. Stamina reduced by 15% and power attacks by 30%. Find more clubs and parts in loot." },
          { level: 3, name: "Big Leagues", attributeRequirement: 5, cost: 1, description: "You hit hard enough to be in the big leagues now. Clubs deal 30% more damage, attacks do 120% more damage to stunned enemies, and power attacks have a 80% chance to knock foes down. Stamina reduced by 20% and power attacks by 40%. Killing blows grant 10 stamina. Landing 5 successive hits in a short time causes the last blow to do 100% extra damage. Find more clubs and parts in loot." },
          { level: 4, name: "Stay Down", attributeRequirement: 7, cost: 1, description: "When you said stay down, you meant it. Clubs deal 40% more damage, attacks do 160% more damage to stunned enemies, and power attacks have a 90% chance to knock foes down. Stamina reduced by 25% and power attacks by 50%. Killing blows grant 20 stamina. 4 successive hits in a short time causes the last blow to do 100% extra damage. Find more clubs and parts in loot." },
          { level: 5, name: "Pummel Pete", attributeRequirement: 10, cost: 1, description: "Pummel Pete once took on 50 zombies with just a club and he would be proud of you. Clubs deal 50% more damage, attacks do 200% more damage to stunned enemies, and power attacks have a 100% chance to knock foes back down. Killing blows grant 30 stamina. 3 successive hits in a short time causes the last blow to do 100% extra damage. Find more clubs and parts in loot." }
        ]
      },
      {
        name: "Skull Crusher",
        icon: new URL("/assets/skull-crusher-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Strength",
        levels: [
          { level: 1, name: "Bruiser", attributeRequirement: 1, cost: 1, description: "You\u0027re a bruiser! With a little luck, you can sometimes knock down geriatric zombies. Sledgehammers deal 10% more damage. 15% chance to knock down enemies with power attacks. Stamina costs are reduced by 8% and 15% for power attacks. Find more sledges and parts in loot." },
          { level: 2, name: "Mauler", attributeRequirement: 3, cost: 1, description: "You\u0027re now a mauler, but don\u0027t get too cocky yet. Sledgehammers deal 20% more damage. 30% chance to knock down enemies with power attacks. Stamina costs are reduced by 15% and 30% for power attacks. Find more sledges and parts in loot." },
          { level: 3, name: "Smasher", attributeRequirement: 5, cost: 1, description: "You\u0027re a certified smasher of things that get in your way. Sledgehammers deal 30% more damage. Power attacks have a 45% chance to knock down enemies and a 20% chance to knock down nearby foes. Stamina costs are reduced by 20% and 40% for power attacks. Killing blows grant 10 stamina. Find more sledges and parts in loot." },
          { level: 4, name: "Bone Breaker", attributeRequirement: 7, cost: 1, description: "You\u0027re a bone breaker! Sledgehammers deal 40% more damage. Power attacks have a 60% chance to knock down enemies and a 35% chance to knock down nearby foes. Stamina costs are reduced by 25% and 50% for power attacks. Killing blows grant 20 stamina. Find more sledges and parts in loot." },
          { level: 5, name: "Skull Crusher", attributeRequirement: 10, cost: 1, description: "Skull Crusher. If anyone pisses you off, you have the means to crush their skull. Sledgehammers deal 50% more damage. Power attacks have a 75% chance to knock down enemies and a 50% chance to knock down nearby foes. Killing blows grant 30 stamina. Find more sledges and parts in loot." }
        ]
      },
      {
        name: "Strength Mastery",
        icon: new URL("/assets/strength-mastery-icon.png", import.meta.url).href,
        category: "general",
        associatedAttribute: "Strength",
        levels: [
          { level: 1, name: "Miner\u0027s Mending", attributeRequirement: 6, cost: 1, description: "All critical injuries heal 100% faster when holding a mining tool." },
          { level: 2, name: "Brass Miner", attributeRequirement: 7, cost: 1, description: "Adds a 5% chance to gain scrap brass when harvesting ore blocks." },
          { level: 3, name: "Battle Miner", attributeRequirement: 8, cost: 1, description: "Mining tools like pickaxes and shovels deal more damage to zombies when used in combat." },
          { level: 4, name: "Headhunter", attributeRequirement: 9, cost: 1, description: "Headshots with clubs or sledgehammers have an additional 50% chance to dismember enemies." },
          { level: 5, name: "Adrenaline Berserker", attributeRequirement: 10, cost: 1, description: "Kills with strength-based weapons grant 25% damage resistance for 5 seconds." }
        ]
      }
    ]
  },
  {
    name: "Fortitude",
    description: "Fortitude is the measure of your physical resilience.",
    icon: new URL("/assets/fortitude-icon.png", import.meta.url).href,
    levels: [
      { level: 1, name: "Fragile Health", attributeRequirement: 1, cost: 0, description: "You aren\u0027t very durable or healthy but at least you are alive. Deal 200% head shot damage and have a 5% chance to dismember with fists and machine guns." },
      { level: 2, name: "Sickly", attributeRequirement: 2, cost: 1, description: "You feel a little better than you used to. Deal 210% head shot damage and have a 10% chance to dismember with fists, and machine guns." },
      { level: 3, name: "Unhealthy", attributeRequirement: 3, cost: 1, description: "You continue to defy gravity and keep standing. Deal 220% head shot damage and have a 15% chance to dismember with fists and machine guns." },
      { level: 4, name: "Weakened", attributeRequirement: 4, cost: 1, description: "You are starting to feel like normal people. Deal 230% head shot damage and have a 20% chance to dismember with fists, and machine guns." },
      { level: 5, name: "Hardy", attributeRequirement: 5, cost: 1, description: "You are in good health. Deal 240% head shot damage and have a 25% chance to dismember with fists and machine guns." },
      { level: 6, name: "Very Healthy", attributeRequirement: 6, cost: 2, description: "You are very healthy. Deal 250% head shot damage and have a 30% chance to dismember with fists and machine guns." },
      { level: 7, name: "Vigorous Health", attributeRequirement: 7, cost: 2, description: "You have vigorous health. Deal 260% head shot damage and have a 35% chance to dismember with fists and machine guns." },
      { level: 8, name: "Resilient", attributeRequirement: 8, cost: 2, description: "You are as resilient as they come. Deal 270% head shot damage and have a 40% chance to dismember with fists and machine guns." },
      { level: 9, name: "Amazing Constitution", attributeRequirement: 9, cost: 3, description: "You have an amazing constitution. Deal 285% head shot damage and have a 45% chance to dismember with fists and machine guns." },
      { level: 10, name: "Exuberant Fortitude", attributeRequirement: 10, cost: 3, description: "You have exuberant fortitude and can put a beat down on a tornado. Deal 300% head shot damage and have a 50% chance to dismember with fists and machine guns." }
    ],
    perks: [
      {
        name: "Fortitude Mastery",
        icon: new URL("/assets/fortitude-mastery-icon.png", import.meta.url).href,
        category: "survival",
        associatedAttribute: "Fortitude",
        levels: [
          { level: 1, name: "Bleed Stopper", attributeRequirement: 6, cost: 1, description: "Killing an enemy will instantly stop a bleeding injury without using a bandage." },
          { level: 2, name: "Antibodies", attributeRequirement: 7, cost: 1, description: "Consuming items that cure infection or after recovering from an infection will give you 2 real world hours of infection immunity." },
          { level: 3, name: "The Dentist", attributeRequirement: 8, cost: 1, description: "Turns out the undead have more than just bad breath, they\u0027ve got valuable dental work too!\nFist weapons have a 10% chance to gain silver or gold teeth fillings from zombie kills." },
          { level: 4, name: "Resilience", attributeRequirement: 9, cost: 1, description: "Nothing can shake your will to survive.\nPermanently adds 50 max health." },
          { level: 5, name: "Unbreakable", attributeRequirement: 10, cost: 1, description: "Your fortitude makes you harder to break.\nPermanently adds an additional 50 max health." }
        ]
      },
      {
        name: "Healing Factor",
        icon: new URL("/assets/healing-factor-icon.png", import.meta.url).href,
        category: "recovery",
        associatedAttribute: "Fortitude",
        levels: [
          { level: 1, name: "Fast Metabolism", attributeRequirement: 1, cost: 1, description: "You must have a fast metabolism. Gain 1 health every 35 seconds with natural healing. Critical injuries heal 20% faster." },
          { level: 2, name: "Quick Healer", attributeRequirement: 3, cost: 1, description: "You seem to be a quick healer. Gain 1 health every 25 seconds with natural healing. Critical injuries heal 40% faster." },
          { level: 3, name: "Animal", attributeRequirement: 5, cost: 1, description: "What are you part animal? Gain 1 health every 15 seconds with natural healing. Critical injuries heal 60% faster." },
          { level: 4, name: "Regeneration", attributeRequirement: 7, cost: 1, description: "You seem to just regenerate health super fast. Gain 1 health every 10 seconds with natural healing. Critical injuries heal 80% faster." },
          { level: 5, name: "Mutant Genes", attributeRequirement: 10, cost: 1, description: "You must have mutant genes from all the radiation. Gain 1 health every 5 seconds with natural healing. Critical injuries heal twice as fast." }
        ]
      },
      {
        name: "Iron Gut",
        icon: new URL("/assets/iron-gut-icon.png", import.meta.url).href,
        category: "recovery",
        associatedAttribute: "Fortitude",
        levels: [
          { level: 1, name: "Leaky Gut", attributeRequirement: 1, cost: 1, description: "Your stomach health isn\u0027t perfect but it\u0027s better than the average wastelander\u0027s. Reduce food and water loss from physical exertion by 5%.\nHold your breath for 84 seconds. Chance of Dysentery is reduced by 1%. Buffs from consumables last 10% longer." },
          { level: 2, name: "Strong Constitution", attributeRequirement: 3, cost: 1, description: "You get away with eating a lot of things that would kill most people. Reduce food and water loss from physical exertion by 10%.\nHold your breath for 108 seconds. Chance of Dysentery is reduced by 2%. Buffs from consumables last 20% longer." },
          { level: 3, name: "Great Metabolism", attributeRequirement: 5, cost: 1, description: "Even when you feel a little sick, you tend to get over it quickly. Reduce food and water loss from physical exertion by 15%.\nHold your breath for 132 seconds. Chance of Dysentery is reduced by 3%. Buffs from consumables last 30% longer." },
          { level: 4, name: "Intrinsic Immunity", attributeRequirement: 7, cost: 1, description: "You seem to be nearly immune to everything you eat. Reduce food and water loss from physical exertion by 20%.\nHold your breath for 156 seconds. Chance of Dysentery is reduced by 4%. Buffs from consumables last 40% longer." },
          { level: 5, name: "Iron Gut", attributeRequirement: 10, cost: 1, description: "You have an iron gut and could probably eat glass and survive. Reduce food and water loss from physical exertion by 25%.\nHold your breath for 180 seconds. Chance of Dysentery is reduced by 5%. Buffs from consumables last 50% longer." }
        ]
      },
      {
        name: "Lightning Hands",
        icon: new URL("/assets/big-and-fast-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Fortitude",
        levels: [
          { level: 1, name: "Quick Jab", attributeRequirement: 2, cost: 1, description: "You have really developed your quick jab.\nPunching is 5% faster." },
          { level: 2, name: "Cross", attributeRequirement: 4, cost: 1, description: "Every punch is a lesson.\nPunching is 10% faster." },
          { level: 3, name: "Uppercut", attributeRequirement: 6, cost: 1, description: "Aim for the chin and put \u0027em on the floor again.\nPunching is 15% faster." },
          { level: 4, name: "Haymaker", attributeRequirement: 8, cost: 1, description: "Put your enemies to sleep with bombs and haymakers.\nPunching is 20% faster." },
          { level: 5, name: "Relentless Onslaught", attributeRequirement: 10, cost: 1, description: "Your fists are so fast now that enemies will quickly be overwhelmed by your relentless onslaught of punches.\nPunching is 25% faster." }
        ]
      },
      {
        name: "Machine Gunner",
        icon: new URL("/assets/machine-gunner-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Fortitude",
        levels: [
          { level: 1, name: "Grunt", attributeRequirement: 1, cost: 1, description: "Spray and Pray is your thing. Machine guns deal 10% more damage, 5% faster fire rate and 10% faster reload.\nFind more machine guns, parts, and 7.62mm ammo in loot." },
          { level: 2, name: "Guerrilla", attributeRequirement: 3, cost: 1, description: "You are no commando, but you do what it takes to get the job done. Machine guns deal 20% more damage, 10% faster fire rate and 15% faster reload.\nFind more machine guns, parts, and 7.62mm ammo in loot." },
          { level: 3, name: "Soldier", attributeRequirement: 5, cost: 1, description: "All the combat has sharpened your skills and you are now a soldier. Machine guns deal 30% more damage, 15% faster fire rate and reload 20% faster. Commando Adrenaline: Each shot scored with automatic weapons gives you 2 stamina.\nFind more machine guns, parts, and 7.62mm ammo in loot." },
          { level: 4, name: "Special Forces", attributeRequirement: 7, cost: 1, description: "Your skill now matches the special forces. Machine guns deal 40% more damage, 20% faster fire rate and reload 25% faster. Commando Adrenaline: Each shot scored with automatic weapons gives you 4 stamina.\nFind more machine guns, parts, and 7.62mm ammo in loot." },
          { level: 5, name: "Machine Gunner", attributeRequirement: 10, cost: 1, description: "You are now the ultimate machine gunner. Machine guns deal 50% more damage, 25% faster fire rate and reload 30% faster. Commando Adrenaline: Each shot scored with automatic weapons gives you 6 stamina.\nFind more machine guns, parts, and 7.62mm ammo in loot." }
        ]
      },
      {
        name: "Pain Tolerance",
        icon: new URL("/assets/pain-tolerance-icon.png", import.meta.url).href,
        category: "survival",
        associatedAttribute: "Fortitude",
        levels: [
          { level: 1, name: "Tough", attributeRequirement: 1, cost: 1, description: "You like to think you are tough because you don\u0027t have a glass jaw anymore. Reduce HP loss by 5%.\n20% less chance to get stunned." },
          { level: 2, name: "Rugged", attributeRequirement: 3, cost: 1, description: "Broken bones and cuts are life when you are rugged. Reduce HP loss by 10%.\n40% less chance to get stunned." },
          { level: 3, name: "Durable", attributeRequirement: 5, cost: 1, description: "After all the beat downs you endured, you are now very durable. Reduce HP loss by 15% and have a 60% less chance to get stunned." },
          { level: 4, name: "Masochist", attributeRequirement: 7, cost: 1, description: "It\u0027s going to take a lot more than that to keep you down. Reduce HP loss by 20% and have a 80% less chance to get stunned." },
          { level: 5, name: "Iron Chin", attributeRequirement: 10, cost: 1, description: "You seem to thrive on pain and now possess an iron chin. Reduce HP loss by 25% and have no chance to get stunned." }
        ]
      },
      {
        name: "Rule 1: Cardio",
        icon: new URL("/assets/rule-1-cardio-icon.png", import.meta.url).href,
        category: "recovery",
        associatedAttribute: "Fortitude",
        levels: [
          { level: 1, name: "Hiker", attributeRequirement: 1, cost: 1, description: "Just put one foot in front of the other.\nIncrease stamina regen by 10% when sprinting." },
          { level: 2, name: "Running Man", attributeRequirement: 3, cost: 1, description: "Leave your enemies in the rear view mirror.\nIncrease stamina regen by 20% when sprinting." },
          { level: 3, name: "Joggernaut", attributeRequirement: 5, cost: 1, description: "Crush every mile with ease.\nIncrease stamina regen by 30% when sprinting." },
          { level: 4, name: "Marathoner", attributeRequirement: 7, cost: 1, description: "Outlast, outrun, outlive.\nPermanently add 25 max stamina." },
          { level: 5, name: "Triathlete", attributeRequirement: 10, cost: 1, description: "The ultimate test of endurance is like a walk in the park.\nPermanently adds an additional 25 max stamina." }
        ]
      },
      {
        name: "Siphoning Strikes",
        icon: new URL("/assets/siphoning-strikes-icon.png", import.meta.url).href,
        category: "recovery",
        associatedAttribute: "Fortitude",
        levels: [
          { level: 1, name: "First Cut", attributeRequirement: 1, cost: 1, description: "Your first taste of combat fuels you.\nMelee kills grant 2 HP." },
          { level: 2, name: "Wound Licker", attributeRequirement: 3, cost: 1, description: "Pain means nothing when you\u0027re too busy dishing it out.\nMelee kills grant 4 HP." },
          { level: 3, name: "Carnage Fuel", attributeRequirement: 5, cost: 1, description: "Every enemy that falls makes you stronger.\nMelee kills grant 6 HP." },
          { level: 4, name: "Bloodlust", attributeRequirement: 7, cost: 1, description: "When the blood starts flowing, you don\u0027t stop.\nMelee kills grant 8 HP." },
          { level: 5, name: "Warrior\u0027s Feast", attributeRequirement: 10, cost: 1, description: "The battlefield is your feast, and the fallen are your meal.\nMelee kills grant 10 HP." }
        ]
      },
      {
        name: "The Brawler",
        icon: new URL("/assets/the-brawler-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Fortitude",
        levels: [
          { level: 1, name: "Bully", attributeRequirement: 1, cost: 1, description: "Tired of being bullied by the undead? Zombies can\u0027t bite if you knock their damn teeth out! Knuckled weapons deal 10% more damage. Punches to the head negate infection ability. Stamina costs are reduced by 8% and 15% for power attacks. Find more knuckle weapons and parts in loot." },
          { level: 2, name: "Scrapper", attributeRequirement: 3, cost: 1, description: "You\u0027ve been in a few fights and can hold your own. Knuckle weapons deal 20% more damage and have a 30% chance to stagger opponents with power attacks. Stamina costs are reduced by 15% and 30% for power attacks. Find more knuckle weapons and parts in loot." },
          { level: 3, name: "Slugger", attributeRequirement: 5, cost: 1, description: "All the fighting and scrapping has added up and you\u0027re a real slugger now. Knuckle weapons deal 30% more damage. Power attacks to the head have a 20% chance to knock down your opponent. Stamina costs are reduced by 20% and 40% for power attacks. Killing blows grant 10 stamina. Find more knuckle weapons and parts." },
          { level: 4, name: "Professional Boxer", attributeRequirement: 7, cost: 1, description: "You\u0027re now good enough to compete in professional boxing, but smashing zombies faces in will have to do. Knuckle weapons deal 40% more damage. Power attacks to the head have a 30% chance to knock down your opponent. Stamina costs are reduced by 25% and 50% for power attacks. Killing blows grant 20 stamina. Find more knuckle weapons and parts in loot." },
          { level: 5, name: "Mixed Martial Artist", attributeRequirement: 10, cost: 1, description: "You\u0027re now a complete mixed martial artist and a registered lethal weapon. Knuckle weapons deal 50% more damage and have a higher chance to explode heads with punches. Killing blows grant 30 stamina. Find more knuckle weapons and parts in loot." }
        ]
      },
      {
        name: "The Huntsman",
        icon: new URL("/assets/the-huntsman-icon.png", import.meta.url).href,
        category: "survival",
        associatedAttribute: "Fortitude",
        levels: [
          { level: 1, name: "Pelter", attributeRequirement: 1, cost: 1, description: "You are on the path of the huntsman. Harvest 20% more resources from animals using any bladed tool or weapon." },
          { level: 2, name: "Poacher", attributeRequirement: 3, cost: 1, description: "You are becoming adept at skinning and harvesting meat. Harvest 40% more resources from animals using any bladed tool or weapon." },
          { level: 3, name: "Hunter", attributeRequirement: 5, cost: 1, description: "Living in the wild is becoming second nature to you. Harvest 60% more resources from animals using any bladed tool or weapon." },
          { level: 4, name: "Butcher", attributeRequirement: 7, cost: 1, description: "You know exactly how to get the perfect cuts. Harvest 80% more resources from animals using any bladed tool or weapon." },
          { level: 5, name: "The Huntsman", attributeRequirement: 10, cost: 1, description: "You are a true mountain man and let nothing go to waste. Harvest 100% more resources from animals using any bladed tool or weapon." }
        ]
      }
    ]
  },
  {
    name: "Agility",
    description: "Agility is the measure of your athletic prowess.",
    icon: new URL("/assets/agility-icon.png", import.meta.url).href,
    levels: [
      { level: 1, name: "Clumsy", attributeRequirement: 1, cost: 0, description: "You are as clumsy as they come but you still do 200% head shot damage and have a 5% chance to dismember with bows, handguns, and knives." },
      { level: 2, name: "Fumbling", attributeRequirement: 2, cost: 1, description: "You didn\u0027t make the football team but that didn\u0027t stop you from practicing. Deal 210% head shot damage and have a 10% chance to dismember with bows, handguns and knives." },
      { level: 3, name: "Clunky", attributeRequirement: 3, cost: 1, description: "You are still loud and clunky but can deal 220% head shot damage and have a 15% chance to dismember with bows, handguns and knives." },
      { level: 4, name: "Inept", attributeRequirement: 4, cost: 1, description: "Your dexterity is a bit inept, but you can deal 230% head shot damage and have a 20% chance to dismember with bows, handguns and knives." },
      { level: 5, name: "Agile", attributeRequirement: 5, cost: 1, description: "You are now agile and deal 240% head shot damage and have a 25% chance to dismember with bows, handguns and knives." },
      { level: 6, name: "Nimble", attributeRequirement: 6, cost: 2, description: "Your movement is now very nimble and deal 250% head shot damage and have a 30% chance to dismember with bows, handguns and knives." },
      { level: 7, name: "Dexterous", attributeRequirement: 7, cost: 2, description: "Your dexterity is very impressive. Deal 260% head shot damage and have a 35% chance to dismember with bows, handguns and knives." },
      { level: 8, name: "Gymnast", attributeRequirement: 8, cost: 2, description: "Moving fluid and landing on your feet are second nature for you. Deal 270% head shot damage and have a 40% chance to dismember with bows, handguns and knives." },
      { level: 9, name: "Professional Athlete", attributeRequirement: 9, cost: 3, description: "Your agility is good enough you could be a professional athlete. Deal 285% head shot damage and have a 45% chance to dismember with bows, handguns and knives." },
      { level: 10, name: "Parkour Master", attributeRequirement: 10, cost: 3, description: "Your dexterity is unmatched. Deal 300% head shot damage and have a 50% chance to dismember with bows, handguns and knives." }
    ],
    perks: [
      {
        name: "Agility Mastery",
        icon: new URL("/assets/agility-mastery-icon.png", import.meta.url).href,
        category: "athletics",
        associatedAttribute: "Agility",
        levels: [
          { level: 1, name: "Snare Shot", attributeRequirement: 6, cost: 1, description: "Leg hits have a 40% chance to instantly cripple enemies." },
          { level: 2, name: "Rapid Reload", attributeRequirement: 7, cost: 1, description: "Handguns reload 20% faster." },
          { level: 3, name: "Bleeding Hearts", attributeRequirement: 8, cost: 1, description: "Bows, Crossbows, and Handguns cause bleeding." },
          { level: 4, name: "Specter\u0027s Grace", attributeRequirement: 9, cost: 1, description: "Graceful reflexes deflect the first zombie or animal attack with ease.\nRecharges every 60 seconds." },
          { level: 5, name: "Piercing Precision", attributeRequirement: 10, cost: 1, description: "Fully drawn bow shots bypass enemy armor, dealing full damage plus an extra 25% damage." }
        ]
      },
      {
        name: "Archery",
        icon: new URL("/assets/archery-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Agility",
        levels: [
          { level: 1, name: "Bowman", attributeRequirement: 1, cost: 1, description: "Many start on the path of the ranger but few can reach it. Bows deal 10% more damage, 10% faster aim, draw and reload with bows.\nFind more bows and parts in loot." },
          { level: 2, name: "Archer", attributeRequirement: 3, cost: 1, description: "You still have much to learn, grasshopper. Bows deal 20% more damage, 20% faster aim, draw and reload with bows.\nFind more bows and parts in loot." },
          { level: 3, name: "Marksman", attributeRequirement: 5, cost: 1, description: "All the rigorous training has turned you into a marksman with Bows. Bows deal 30% more damage, 30% faster aim, draw and reload with bows.\nFind more bows and parts in loot." },
          { level: 4, name: "Hairsplitter", attributeRequirement: 7, cost: 1, description: "You can split a hair you are so good at archery now. Bows deal 40% more damage, 40% faster aim, draw and reload with bows.\nFind more bows and parts in loot." },
          { level: 5, name: "Ranger", attributeRequirement: 10, cost: 1, description: "You have mastered archery and are now a ranger. Bows deal 50% more damage, 50% faster aim, draw and reload with bows.\nFind more bows and parts in loot." }
        ]
      },
      {
        name: "Deep Cuts",
        icon: new URL("/assets/deep-cuts-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Agility",
        levels: [
          { level: 1, name: "Dull Blade", attributeRequirement: 1, cost: 1, description: "You might have a dull blade, but you know how to use it. Bladed weapons deal 10% more damage. Inflict up to 3 Bleeding Wounds on an enemy and a power attack inflicts 2. Every attack refreshes the duration on bleeding. Enemies run 10% slower while bleeding. Stamina costs are reduced by 8% and 15% for power attacks. Find more bladed weapons and parts in loot." },
          { level: 2, name: "Knife Guy", attributeRequirement: 3, cost: 1, description: "Your friends say you\u0027re a really knife guy. Bladed weapons deal 20% more damage. Inflict up to 4 Bleeding Wounds on an enemy and a power attack inflicts 3. Stamina costs are reduced by 15% and 30% for power attacks. Find more bladed weapons and parts in loot." },
          { level: 3, name: "Fencer", attributeRequirement: 5, cost: 1, description: "You\u0027re a cut above the rest. Bladed weapons deal 30% more damage. Inflict up to 5 Bleeding Wounds on an enemy and a power attack inflicts 4. Glancing blows have a 40% chance to cause 1 Bleeding Wound. Enemies run 15% slower while bleeding. Stamina costs are reduced by 20% and 40% for power attacks. Killing blows grant 10 stamina. Find more bladed weapons and parts in loot." },
          { level: 4, name: "Swordsman", attributeRequirement: 7, cost: 1, description: "You\u0027re quite lethal with bladed weapons. Bladed weapons deal 40% more damage. Inflict up to 6 Bleeding Wounds on an enemy and a power attack inflicts 4. Glancing blows have a 70% chance to cause 1 Bleeding Wound. Stamina costs are reduced by 25% and 50% for power attacks. Killing blows grant 20 stamina. Find more bladed weapons and parts in loot." },
          { level: 5, name: "Samurai", attributeRequirement: 10, cost: 1, description: "You\u0027re a samurai and can make sushi out of your foes. Bladed weapons deal 50% more damage. Inflict up to 7 Bleeding Wounds on an enemy and a power attack inflicts 5. All glancing blows cause 1 Bleeding Wound. Enemies run 20% slower while bleeding. Killing blows grant 30 stamina. Find more bladed weapons and parts in loot." }
        ]
      },
      {
        name: "From The Shadows",
        icon: new URL("/assets/from-the-shadows-icon.png", import.meta.url).href,
        category: "stealth",
        associatedAttribute: "Agility",
        levels: [
          { level: 1, name: "Lurker", attributeRequirement: 1, cost: 1, description: "Hide in the shadows 13% more effectively, noises from actions are muffled 10%, and sneak movement is 10% faster.\nEnemies will search for you for up to 50 seconds." },
          { level: 2, name: "Shadower", attributeRequirement: 3, cost: 1, description: "Hide in the shadows 26% more effectively, noises from actions are muffled 20% and sneak movement is 20% faster.\nEnemies will search for you for up to 40 seconds." },
          { level: 3, name: "Stalker", attributeRequirement: 5, cost: 1, description: "Hide in the shadows 39% more effectively, noises from actions are muffled 30%, and sneak movement is 30% faster.\nEnemies will search for you for up to 30 seconds." },
          { level: 4, name: "Prowler", attributeRequirement: 7, cost: 1, description: "Hide in the shadows 52% more effectively, noises from actions are muffled 40%, and sneak movement is 40% faster.\nEnemies will search for you for up to 25 seconds." },
          { level: 5, name: "Shadow Ninja", attributeRequirement: 10, cost: 1, description: "Hide in the shadows 65% more effectively, noises from actions are muffled 50% and sneak movement is 50% faster.\nEnemies will search for you for up to 20 seconds." }
        ]
      },
      {
        name: "Gunslinger",
        icon: new URL("/assets/gunslinger-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Agility",
        levels: [
          { level: 1, name: "Pea Shooter", attributeRequirement: 1, cost: 1, description: "You\u0027re no Wyatt Earp but you\u0027re better than the average drifter. Handguns deal 10% more damage, 5% faster fire rate, and 10% faster reload with handguns.\nFind more handguns, parts, and 9mm ammo in loot." },
          { level: 2, name: "Outlaw", attributeRequirement: 3, cost: 1, description: "You are making a name for yourself, outlaw. Handguns deal 20% more damage, 10% faster fire rate, and reload 15% faster with handguns.\nFind more handguns, parts, and 9mm ammo in loot." },
          { level: 3, name: "Sheriff", attributeRequirement: 5, cost: 1, description: "You can keep most situations under control, sheriff. Handguns deal 30% more damage, 15% faster fire rate, and reload 20% faster. Critical Damage: 5 successive hits in a short time cause critical damage.\nFind more handguns, parts, and 9mm ammo in loot." },
          { level: 4, name: "Gunfighter", attributeRequirement: 7, cost: 1, description: "You\u0027re now a gunfighter and can clear out a saloon full of rowdy bastards at the drop of a hat. Handguns deal 40% more damage, 20% faster fire rate, and reload 25% faster. Critical Damage: 4 successive hits in a short time cause the last shot to do 100% extra damage.\nFind more handguns, parts, and 9mm ammo in loot." },
          { level: 5, name: "Gunslinger", attributeRequirement: 10, cost: 1, description: "You are the fastest gunslinger in Navezgane. Handguns deal 50% more damage, 25% faster fire rate, and 30% faster reload with handguns. Critical Damage: 3 successive hits in a short time cause the last shot to do 100% extra damage.\nFind more handguns, parts, and 9mm ammo in loot." }
        ]
      },
      {
        name: "Hard Target",
        icon: new URL("/assets/hard-target-icon.png", import.meta.url).href,
        category: "athletics",
        associatedAttribute: "Agility",
        levels: [
          { level: 1, name: "Evasive Tactics", attributeRequirement: 1, cost: 1, description: "When moving, take 5% less damage." },
          { level: 2, name: "Dodge Instinct", attributeRequirement: 3, cost: 1, description: "When moving, take 10% less damage." },
          { level: 3, name: "Phantom Stride", attributeRequirement: 5, cost: 1, description: "When moving, take 15% less damage." },
          { level: 4, name: "Fluid Defense", attributeRequirement: 7, cost: 1, description: "When moving, take 20% less damage." },
          { level: 5, name: "Ghost Reflexes", attributeRequirement: 10, cost: 1, description: "When moving, take 25% less damage." }
        ]
      },
      {
        name: "Hidden Strike",
        icon: new URL("/assets/hidden-strike-icon.png", import.meta.url).href,
        category: "stealth",
        associatedAttribute: "Agility",
        levels: [
          { level: 1, name: "Cutthroat", attributeRequirement: 1, cost: 1, description: "You are a cutthroat who prefers to operate from the shadows and use stealth and sneak attacks. Sneak attacks deal an extra 50% damage." },
          { level: 2, name: "Butcher", attributeRequirement: 3, cost: 1, description: "You are now a butcher and have racked up some kills and are mastering the art assassination. Sneak attacks deal an extra 100% damage." },
          { level: 3, name: "Executioner", attributeRequirement: 5, cost: 1, description: "You are now an executioner and are beginning to master your craft. Sneak attacks deal an extra 150% damage." },
          { level: 4, name: "Cold Blooded Killer", attributeRequirement: 7, cost: 1, description: "You are a cold blooded killer and feel no remorse doing your dark deeds. Sneak attacks deal an extra 200% damage." },
          { level: 5, name: "Assassin", attributeRequirement: 10, cost: 1, description: "You are now the ultimate assassin and can deal maximum sneak damage to your victims. Sneak attacks deal an extra 250% damage." }
        ]
      },
      {
        name: "Parkour",
        icon: new URL("/assets/parkour-icon.png", import.meta.url).href,
        category: "athletics",
        associatedAttribute: "Agility",
        levels: [
          { level: 1, name: "Tumbler", attributeRequirement: 2, cost: 1, description: "You can do a few moves, but mostly just falling on your face.\nReduce stamina cost of jumping by 10%.\nIncrease safe fall distance by 1 meter." },
          { level: 2, name: "Stuntman", attributeRequirement: 4, cost: 1, description: "Stunts are easy, but your hospital bills are still expensive.\nReduce stamina cost of jumping by 20%.\nIncrease safe fall distance by 2 meters.\nJump 1 meter higher." },
          { level: 3, name: "Adrenaline Junkie", attributeRequirement: 6, cost: 1, description: "Adrenaline junkies are capable of death defying acts of insanity.\nReduce stamina cost of jumping by 30%.\nIncrease safe fall distance by 3 meters.\nNever get a broken leg when falling." },
          { level: 4, name: "Urban Acrobat", attributeRequirement: 8, cost: 1, description: "If it\u0027s vertical, it\u0027s just another path.\nReduce stamina cost of jumping by 40%.\nIncrease safe fall distance by 4 meters.\nJump 2 meters higher.\nNever get a sprained or broken leg when falling." },
          { level: 5, name: "Parkour Master", attributeRequirement: 10, cost: 1, description: "As a parkour master, you can navigate difficult situations easily.\nReduce stamina cost of jumping by 50%.\nNever take fall damage." }
        ]
      },
      {
        name: "Run and Gun",
        icon: new URL("/assets/run-and-gun-icon.png", import.meta.url).href,
        category: "athletics",
        associatedAttribute: "Agility",
        levels: [
          { level: 1, name: "Spray and Pray", attributeRequirement: 1, cost: 1, description: "Aiming is overrated, just shoot first and ask questions later.\nHip fire accuracy is improved by 5%\nMovement penalty when reloading is reduced to 40%." },
          { level: 2, name: "Twitchy Fingers", attributeRequirement: 3, cost: 1, description: "Twitchy fingers cause trouble, but they\u0027ve saved your skin plenty.\nHip fire accuracy is improved by 10%\nMovement penalty when reloading is reduced to 30%." },
          { level: 3, name: "Lead Slinger", attributeRequirement: 5, cost: 1, description: "Your gun spits bullets faster than your brain processes targets.\nHip fire accuracy is improved by 15%\nMovement penalty when reloading is reduced to 20%." },
          { level: 4, name: "Mad Dasher", attributeRequirement: 7, cost: 1, description: "Reload on the run like a maniac.\nHip fire accuracy is improved by 20%\nMovement penalty when reloading is reduced to 10%." },
          { level: 5, name: "Trigger Man", attributeRequirement: 10, cost: 1, description: "You\u0027re a deadly trigger man having mastered the art of run and gun.\nHip fire accuracy is improved by 25%\nNo movement penalty when reloading." }
        ]
      },
      {
        name: "Whirlwind",
        icon: new URL("/assets/whirlwind-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Agility",
        levels: [
          { level: 1, name: "Quick Shank", attributeRequirement: 2, cost: 1, description: "They won\u0027t see it coming.\nKnife attacks are 5% faster." },
          { level: 2, name: "Slice and Dice", attributeRequirement: 4, cost: 1, description: "Slice and dice enemies to ribbons with blazing knife speeds.\nKnife attacks are 10% faster." },
          { level: 3, name: "Rip and Tear", attributeRequirement: 6, cost: 1, description: "Rip and tear with no despair!\nKnife attacks are 15% faster." },
          { level: 4, name: "Slasher", attributeRequirement: 8, cost: 1, description: "Cut first, ask questions never.\nKnife attacks are 20% faster." },
          { level: 5, name: "Whirlwind", attributeRequirement: 10, cost: 1, description: "A whirlwind of slashes leaves nothing but shredded remains.\nKnife attacks are 25% faster." }
        ]
      }
    ]
  },
  {
    name: "Intellect",
    description: "Intellect is the measure of your mental ability. Increasing Intellect improves head shot damage with intellect governed weapons such as Robotic turrets and stun batons.",
    icon: new URL("/assets/intellect-icon.png", import.meta.url).href,
    levels: [
      { level: 1, name: "Blockhead", attributeRequirement: 1, cost: 0, description: "You are as dumb as a box of rocks but you still do 200% head shot damage and have a 5% chance to dismember with stun batons and Robotic turrets." },
      { level: 2, name: "Dullard", attributeRequirement: 2, cost: 1, description: "You aren\u0027t the brightest color in the box, but you occasionally hit the nail on the head. Deal 210% head shot damage and have a 10% chance to dismember with stun batons and Robotic turrets." },
      { level: 3, name: "Dimwit", attributeRequirement: 3, cost: 1, description: "Even dimwits have a bright idea once in a while. Deal 220% head shot damage and have a 15% chance to dismember with stun batons and Robotic turrets." },
      { level: 4, name: "Thick Headed", attributeRequirement: 4, cost: 1, description: "You don\u0027t like to learn new stuff but you will if you have to. Deal 230% head shot damage and have a 20% chance to dismember with stun batons and Robotic turrets." },
      { level: 5, name: "Average", attributeRequirement: 5, cost: 1, description: "Being average is better than being below average. Deal 240% head shot damage and have a 25% chance to dismember with stun batons and Robotic turrets." },
      { level: 6, name: "Smart", attributeRequirement: 6, cost: 2, description: "You are now getting pretty smart. Deal 250% head shot damage and have a 30% chance to dismember with stun batons and Robotic turrets." },
      { level: 7, name: "Brilliant", attributeRequirement: 7, cost: 2, description: "Your peers consider you brilliant. Deal 260% head shot damage and have a 35% chance to dismember with stun batons and Robotic turrets." },
      { level: 8, name: "Intellectual", attributeRequirement: 8, cost: 2, description: "Your intellect is quite impressive. Deal 270% head shot damage and have a 40% chance to dismember with stun batons and Robotic turrets." },
      { level: 9, name: "Genius", attributeRequirement: 9, cost: 3, description: "You are now a true genius. Deal 285% head shot damage and have a 45% chance to dismember with stun batons and Robotic turrets." },
      { level: 10, name: "Mastermind", attributeRequirement: 10, cost: 3, description: "You are a mastermind of intellect. Deal 300% head shot damage and have a 50% chance to dismember with stun batons and Robotic turrets." }
    ],
    perks: [
      {
        name: "Advanced Engineering",
        icon: new URL("/assets/advanced-engineering-icon.png", import.meta.url).href,
        category: "intellect",
        associatedAttribute: "Intellect",
        levels: [
          { level: 1, name: "Apprentice", attributeRequirement: 1, cost: 1, description: "You are now out of the stone age and an apprentice Engineer!\nGain 15% XP from electrical trap kills.\nItems craft 20% faster at the forge.\nCraft glue cheaper." },
          { level: 2, name: "Tinkerer", attributeRequirement: 4, cost: 1, description: "The long hours tinkering on projects is starting to pay dividends!\nGain 30% XP from electrical trap kills.\nItems craft 20% faster at workbenches and cement mixers." },
          { level: 3, name: "Craftsman", attributeRequirement: 6, cost: 1, description: "You really know your way around the workshop and can build about anything you set your mind to!\nGain 45% XP from electrical trap kills.\nAll forge recipes cost 10% less, crafting Forged Steel and electrical devices costs 15% less." },
          { level: 4, name: "Inventor", attributeRequirement: 8, cost: 1, description: "You are the da Vinci of the apocalypse with all your amazing inventions!\nGain 60% XP from electrical trap kills.\nAll forge recipes cost 15% less, crafting Forged Steel and electrical devices costs 25% less." },
          { level: 5, name: "Advanced Engineer", attributeRequirement: 10, cost: 1, description: "You are now an Advanced Engineer and would make MacDyver jealous.\nGain 75% XP from electrical trap kills.\nAll forge recipes cost 20% less, crafting Forged Steel and electrical devices costs 35% less." }
        ]
      },
      {
        name: "Better Barter",
        icon: new URL("/assets/better-barter-icon.png", import.meta.url).href,
        category: "influence",
        associatedAttribute: "Intellect",
        levels: [
          { level: 1, name: "Wheeler Dealer", attributeRequirement: 1, cost: 1, description: "You are good at wheeling and dealing and never pay full price for anything. Get a 5% better deal buying and selling merchandise with traders." },
          { level: 2, name: "Salesman", attributeRequirement: 3, cost: 1, description: "You must have been a salesman before the apocalypse with the kind of good deals you find. Get a 10% better deal buying and selling with traders." },
          { level: 3, name: "Sales Manager", attributeRequirement: 5, cost: 1, description: "You act like a sales manager and have authority to cut the best deals. Get a 15% better deal buying and selling with traders." },
          { level: 4, name: "Wall Street Tycoon", attributeRequirement: 7, cost: 1, description: "You would do well if the stock market still existed. Get a 20% better deal buying and selling with traders." },
          { level: 5, name: "Corporate Marketing CEO", attributeRequirement: 10, cost: 1, description: "You are like a Corporate Manager and buy goods at the lowest prices and sell for a huge profit. Get a 25% better deal buying and selling with traders." }
        ]
      },
      {
        name: "Calculated Attack",
        icon: new URL("/assets/calculated-attack-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Intellect",
        levels: [
          { level: 1, name: "Basic Math", attributeRequirement: 2, cost: 1, description: "It\u0027s as simple as basic math.\nAttack speeds with batons are 5% faster." },
          { level: 2, name: "Advanced Calculations", attributeRequirement: 4, cost: 1, description: "You see even quicker routes to success.\nAttack speeds with batons are 10% faster." },
          { level: 3, name: "The Algorithm", attributeRequirement: 6, cost: 1, description: "Every strike is perfectly calculated for speed and impact.\nAttack speeds with batons are 15% faster." },
          { level: 4, name: "Sherlock Holmes", attributeRequirement: 8, cost: 1, description: "Predict and use your enemies\u0027 movements against them.\nAttack speeds with batons are 20% faster." },
          { level: 5, name: "Einstein\u0027s Wrath", attributeRequirement: 10, cost: 1, description: "Attacks so fast, even physics can\u0027t keep up.\nAttack speeds with batons are 25% faster." }
        ]
      },
      {
        name: "Charismatic Nature",
        icon: new URL("/assets/charismatic-nature-icon.png", import.meta.url).href,
        category: "influence",
        associatedAttribute: "Intellect",
        levels: [
          { level: 1, name: "Inspirational", attributeRequirement: 5, cost: 1, description: "People find your survival stories inspiring.\nAllies and Party Members regenerate lost health 50% faster." },
          { level: 2, name: "Team Leader", attributeRequirement: 7, cost: 1, description: "You\u0027re a team leader that empowers others.\nAllies and Party Members gain 20% more Block and Melee Damage." },
          { level: 3, name: "Motivational Speaker", attributeRequirement: 8, cost: 1, description: "You\u0027re a strong motivational force.\nAllies and Party Members take 10% less damage from all sources, take half damage from bleeding and stop bleeding twice as fast." },
          { level: 4, name: "Captain", attributeRequirement: 9, cost: 1, description: "Your leadership abilities are top shelf.\nAllies and Party Members find 10% better loot." },
          { level: 5, name: "General", attributeRequirement: 10, cost: 1, description: "You\u0027re a true hero.\nAllies and Party Members find 20% better loot and gain +1 to all attributes." }
        ]
      },
      {
        name: "Electrocutioner",
        icon: new URL("/assets/electrocutioner-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Intellect",
        levels: [
          { level: 1, name: "Low Voltage", attributeRequirement: 1, cost: 1, description: "Where are the instructions? You\u0027re smart, but remember to point it away from you and pull the trigger. All batons deal 10% more damage. Stun batons electrify victims 20% longer. Stamina costs are reduced by 8% and 15% for power attacks. Find more batons and parts in loot." },
          { level: 2, name: "Stun Gun", attributeRequirement: 3, cost: 1, description: "You\u0027re getting the hang of using batons to incapacitate your enemies. All batons deal 20% more damage. Stun batons electrify victims 40% longer. Stamina costs are reduced by 15% and 30% for power attacks. Find more batons and parts in loot." },
          { level: 3, name: "Cattle Prod", attributeRequirement: 5, cost: 1, description: "You\u0027re getting dangerous with batons. You could probably knock out cattle if the zombies hadn\u0027t eaten them all. All batons deal 30% more damage. Stun batons electrify victims 60% longer. Stamina costs are reduced by 20% and 40% for power attacks. Killing blows grant 10 stamina. Find more batons and parts in loot." },
          { level: 4, name: "Danger: High Voltage", attributeRequirement: 7, cost: 1, description: "You\u0027re lethal with batons. All batons deal 40% more damage. Stun batons electrify victims 80% longer. Stamina costs are reduced by 25% and 50% for power attacks. Killing blows grant 20 stamina. Find more batons and parts in loot." },
          { level: 5, name: "Electrocutioner", attributeRequirement: 10, cost: 1, description: "You\u0027re the last thing they see coming and an executioner with batons. All batons deal 50% more damage. Stun batons electrify victims 100% longer. Killing blows grant 30 stamina." }
        ]
      },
      {
        name: "Grease Monkey",
        icon: new URL("/assets/grease-monkey-icon.png", import.meta.url).href,
        category: "intellect",
        associatedAttribute: "Intellect",
        levels: [
          { level: 1, name: "Bicycle Mechanic", attributeRequirement: 1, cost: 1, description: "Your passion to tinker and not walk everywhere has led you on the path of the bicycle mechanic.\nCraft wheels and bicycle parts 33% cheaper.\nRepair kits are 10 percent more effective on vehicles." },
          { level: 2, name: "Minibike Master", attributeRequirement: 4, cost: 1, description: "Why pedal everywhere when there is enough junk lying around to make a minibike?\nCraft minibike parts 33% cheaper.\nRepair kits are 20 percent more effective on vehicles." },
          { level: 3, name: "Motorcycle Maniac", attributeRequirement: 6, cost: 1, description: "It was only a matter of time before going faster and carrying more gear was a necessity.\nCraft motorcycle parts 33% cheaper.\nRepair kits are 30 percent more effective on vehicles." },
          { level: 4, name: "Truck Nut", attributeRequirement: 8, cost: 1, description: "Nothing beats the safety and warmth of a nice 4x4 truck.\nCraft 4x4 truck parts 33% cheaper.\nRepair kits are 40 percent more effective on vehicles." },
          { level: 5, name: "Avionics Wizard", attributeRequirement: 10, cost: 1, description: "Your tinkering desire is never satisfied and only a true genius could figure out how to take to the skies with scrap iron.\nCraft gyrocopter parts 33% cheaper.\nRepair kits are 50 percent more effective on vehicles." }
        ]
      },
      {
        name: "Intellect Mastery",
        icon: new URL("/assets/intellect-mastery-icon.png", import.meta.url).href,
        category: "intellect",
        associatedAttribute: "Intellect",
        levels: [
          { level: 1, name: "Master Pilot", attributeRequirement: 6, cost: 1, description: "Vehicles take 20% less damage and consume 20% less fuel." },
          { level: 2, name: "Bookworm", attributeRequirement: 7, cost: 1, description: "Adds a 25% chance to find a book, magazine, or schematic in loot." },
          { level: 3, name: "Photographic Memory", attributeRequirement: 8, cost: 1, description: "Adds a 50% chance to gain 2 skill points when reading magazines." },
          { level: 4, name: "Genius Fury", attributeRequirement: 9, cost: 1, description: "Stun batons only take 2 hits to charge." },
          { level: 5, name: "Baton Master", attributeRequirement: 10, cost: 1, description: "Increases shock damage by 300%." }
        ]
      },
      {
        name: "Physician",
        icon: new URL("/assets/physician-icon.png", import.meta.url).href,
        category: "intellect",
        associatedAttribute: "Intellect",
        levels: [
          { level: 1, name: "Intern", attributeRequirement: 3, cost: 1, description: "Treated Critical injuries heal 15% faster.\nMedical healing items heal 25% more health over time.\nGain 100% more XP using bandages, first aid bandages, first aid kits and splints.\nSplints and Casts cure sprains instantly." },
          { level: 2, name: "Doctor", attributeRequirement: 6, cost: 1, description: "Treated Critical injuries heal 25% faster.\nMedical healing items heal 50% more health over time.\nGain 200% more XP using bandages, first aid bandages, first aid kits and splints. Craft items in the Chemistry Station 20% faster." },
          { level: 3, name: "Surgeon", attributeRequirement: 8, cost: 1, description: "Treated Critical injuries heal 50% faster.\nMedical healing items heal 100% more health over time.\nGain 500% more XP using bandages, first aid bandages, first aid kits and splints.\nCasts cure broken limbs instantly." },
          { level: 4, name: "Amputator", attributeRequirement: 9, cost: 1, description: "Your medical knowledge makes removing limbs a breeze!\nGain an additional 20% chance to dismember enemies with batons. Craft items in the Chemistry Station 40% faster." },
          { level: 5, name: "Euthanizer", attributeRequirement: 10, cost: 1, description: "Use your knowledge of medicine to save lives, or end them.\nEach blow landed with a stun baton has a 10% chance for instant death." }
        ]
      },
      {
        name: "Robotics Inventor",
        icon: new URL("/assets/robotics-inventor-icon.png", import.meta.url).href,
        category: "combat",
        associatedAttribute: "Intellect",
        levels: [
          { level: 1, name: "Science Projects", attributeRequirement: 3, cost: 1, description: "You have some crazy innovative ideas but your implementation could use some work. Robotic weapons deal 10% more damage, 30% faster fire rate and reload an extra 10 rounds. Robot active range is increased from 10 to 14 meters.\nYou can deploy multiple robots but only the closest will be active." },
          { level: 2, name: "Basic Robotics", attributeRequirement: 5, cost: 1, description: "You are taking your projects to the next level now. Robotic weapons deal 20% more damage, 70% faster fire rate and reload an extra 20 rounds. Robot active range is 15 meters." },
          { level: 3, name: "Automated Weaponry", attributeRequirement: 6, cost: 1, description: "You have mastered the basics of automated weaponry. Robotic weapons deal 30% more damage, 90% faster fire rate and reload an extra 30 rounds. Robot active range is 16 meters." },
          { level: 4, name: "Advanced Robotics", attributeRequirement: 8, cost: 1, description: "You must be from the year 2077. You are creating some futuristic technology. Robotic weapons deal 40% more damage, 150% faster fire rate and reload an extra 40 rounds. Reload robotic weapons  10% faster. Robot active range is 17 meters." },
          { level: 5, name: "Robotics Expert", attributeRequirement: 10, cost: 1, description: "You are now a top expert in robotics. Reload robotic weapons 20% faster and reload an extra 50 rounds. Robot active range is 18 meters.\nTwo deployed robots can be active at once." }
        ]
      },
      {
        name: "The Daring Adventurer",
        icon: new URL("/assets/the-daring-adventurer-icon.png", import.meta.url).href,
        category: "influence",
        associatedAttribute: "Intellect",
        levels: [
          { level: 1, name: "Looter", attributeRequirement: 1, cost: 1, description: "Risking your neck every day has its advantages.\nGain access to better trader items and get 5% more dukes." },
          { level: 2, name: "Plunderer", attributeRequirement: 3, cost: 1, description: "The traders know you can get the job done, plunderer.\nGain access to better trader items and get 10% more dukes." },
          { level: 3, name: "Mercenary", attributeRequirement: 5, cost: 1, description: "You\u0027ve made a name for yourself as a mercenary for hire.\nGain access to better trader items and get 15% more dukes." },
          { level: 4, name: "Bounty Hunter", attributeRequirement: 7, cost: 1, description: "If there\u0027s a job that pays, you\u0027re the first in line.\nGain access to better trader items and get 20% more dukes." },
          { level: 5, name: "Daring Adventurer", attributeRequirement: 10, cost: 1, description: "You are the daring adventurer!\nGain access to better trader items and get 25% more dukes.\nPick two quest rewards for your daring efforts." }
        ]
      }
    ]
  },
  {
    name: "Common perks",
    description: "Shared perks that are not tied to a primary attribute.",
    icon: new URL("/assets/common-icon.png", import.meta.url).href,
    perks: [
      {
        name: "Heavy Armor",
        icon: new URL("/assets/heavy-armor-icon.png", import.meta.url).href,
        category: "general",
        associatedAttribute: "Common perks",
        levels: [
          { level: 1, name: "Tin Man", attributeRequirement: 0, cost: 1, description: "You might move a little awkward in heavy armor, but you\u0027re alive to talk about it. Reduce heavy armor movement and stamina penalty by 5%. Reduce durability use by 15%.\nFind more armor, armor parts, and legendary parts in loot." },
          { level: 2, name: "Heavy Metal", attributeRequirement: 0, cost: 2, description: "You can take a hit! Reduce heavy armor movement and stamina penalty by 10%. Reduce durability use by 30%.\nFind more armor, armor parts, and legendary parts in loot." },
          { level: 3, name: "Iron Man", attributeRequirement: 0, cost: 2, description: "Now we\u0027re talking about some serious protection. Reduce heavy armor movement and stamina penalty by 17%. Reduce durability use by 45%.\nFind more armor, armor parts, and legendary parts in loot." },
          { level: 4, name: "Get Tanked", attributeRequirement: 0, cost: 3, description: "You are now a walking tank. Reduce heavy armor movement and stamina penalty by 25%. Reduce durability use by 60%.\nFind more armor, armor parts, and legendary parts in loot." }
        ]
      },
      {
        name: "Light Armor",
        icon: new URL("/assets/light-armor-icon.png", import.meta.url).href,
        category: "general",
        associatedAttribute: "Common perks",
        levels: [
          { level: 1, name: "Delicate", attributeRequirement: 0, cost: 1, description: "Can withstand some stress, but requires care.\nReduce durability use by 15%.\nGain +1 Armor Rating for each piece of Light Armor equipped. \nFind more armor, armor parts, and legendary parts in loot." },
          { level: 2, name: "Sturdy", attributeRequirement: 0, cost: 2, description: "Holds up well under normal conditions.\nReduce durability use by 30%.\nGain +2 Armor Rating for each piece of Light Armor equipped.\nFind more armor, armor parts, and legendary parts in loot." },
          { level: 3, name: "Reinforced", attributeRequirement: 0, cost: 2, description: "Strengthened to resist damage.\nReduce durability use by 45%.\nGain +3 Armor Rating for each piece of Light Armor equipped.\nFind more armor, armor parts, and legendary parts in loot." },
          { level: 4, name: "Battle-Tested", attributeRequirement: 0, cost: 3, description: "Proven to endure extreme conditions.\nReduce durability use by 60%.\nGain +4 Armor Rating for each piece of Light Armor equipped.\nFind more armor, armor parts, and legendary parts in loot." }
        ]
      },
      {
        name: "Living off the Land",
        icon: new URL("/assets/living-off-the-lang-icon.png", import.meta.url).href,
        category: "general",
        associatedAttribute: "Common perks",
        levels: [
          { level: 1, name: "Gatherer", attributeRequirement: 0, cost: 1, description: "Double the harvest of wild or planted crops.\nFarm plots cost 30% less to craft." },
          { level: 2, name: "Forager", attributeRequirement: 0, cost: 2, description: "50% chance to harvest 1 additional crop.\nFarm plots cost 50% less to craft." },
          { level: 3, name: "Farmer", attributeRequirement: 0, cost: 2, description: "Triple the harvest of wild or planted crops." }
        ]
      },
      {
        name: "Lock Picking",
        icon: new URL("/assets/lock-picking-icon.png", import.meta.url).href,
        category: "general",
        associatedAttribute: "Common perks",
        levels: [
          { level: 1, name: "Burglar", attributeRequirement: 0, cost: 1, description: "Burglar. You are starting to make a name for yourself. You can pick locks 20% faster and have a 10% lower chance to break lockpicks." },
          { level: 2, name: "Lock Smith", attributeRequirement: 0, cost: 2, description: "You are now a lock smith and few locks will keep you out. You can pick locks 40% faster and have a 20% lower chance to break lockpicks. Find 1 extra lockpick when they are found in loot." },
          { level: 3, name: "Safe Cracker", attributeRequirement: 0, cost: 3, description: "You are now a world class safe cracker. Pick locks 60% faster and have a 30% lower chance to break lockpicks. Find 2 extra lockpicks when they are found in loot." }
        ]
      },
      {
        name: "Lucky Looter",
        icon: new URL("/assets/lucky-looter-icon.png", import.meta.url).href,
        category: "general",
        associatedAttribute: "Common perks",
        levels: [
          { level: 1, name: "Slim Chance", attributeRequirement: 0, cost: 1, description: "You\u0027ve got a slim chance to find better loot. Adds 5% to loot bonus for containers that you open personally. Looting is 10% faster." },
          { level: 2, name: "Potluck", attributeRequirement: 0, cost: 2, description: "Your luck is improving and no matter where you look you seem to find something good. Adds 10% to loot bonus. Looting is 20% faster." },
          { level: 3, name: "Good Fortune", attributeRequirement: 0, cost: 2, description: "Adds 15% to loot bonus. Looting is 40% faster." },
          { level: 4, name: "Blessed", attributeRequirement: 0, cost: 2, description: "You just seem to be blessed with finding great loot everywhere you look. Adds 20% to loot bonus. Looting is 60% faster." },
          { level: 5, name: "Lucky Looter", attributeRequirement: 0, cost: 3, description: "The Lucky Looter. You are on a roll and the dice are loaded. Adds 25% to loot bonus. Looting is 80% faster." }
        ]
      },
      {
        name: "Master Chef",
        icon: new URL("/assets/master-chef-icon.png", import.meta.url).href,
        category: "general",
        associatedAttribute: "Common perks",
        levels: [
          { level: 1, name: "Bachelor", attributeRequirement: 0, cost: 1, description: "Cooking is not your thing, but you know some basics.\nUse 20% less of a recipe\u0027s main ingredients.\nCook 40% faster.\nFind more cooking magazines and ingredients in loot." },
          { level: 2, name: "Dumpster Diver", attributeRequirement: 0, cost: 2, description: "Don\u0027t let good food go to waste!\nAdds a chance to find salvageable food in dumpsters.\nAdds a chance to find more seeds in dumpsters.\nCook 60% faster.\nFind even more cooking magazines and ingredients in loot." },
          { level: 3, name: "Army Cook", attributeRequirement: 0, cost: 3, description: "Cooking for an Army?\nUse 40% less of a recipe\u0027s main ingredients.\nCook 80% faster.\nFind even more cooking magazines and ingredients in loot." }
        ]
      },
      {
        name: "Medium Armor",
        icon: new URL("/assets/medium-armor-icon.png", import.meta.url).href,
        category: "general",
        associatedAttribute: "Common perks",
        levels: [
          { level: 1, name: "Squire", attributeRequirement: 0, cost: 1, description: "You have started on the path of the moderately armored warrior. Reduce medium armor movement penalty by 15% and stamina penalty by 10%. Reduce durability use by 15%.\nFind more armor, armor parts, and legendary parts in loot." },
          { level: 2, name: "Militant", attributeRequirement: 0, cost: 2, description: "You\u0027ve survived some battles and hope to be a knight one day. Reduce medium armor movement penalty by 30% and stamina penalty by 20%. Reduce durability use by 30%.\nFind more armor, armor parts, and legendary parts in loot." },
          { level: 3, name: "Knight", attributeRequirement: 0, cost: 2, description: "All the hard training and battles have paid off, you are now a knight. Reduce medium armor movement penalty by 50% and stamina penalty by 35%. Reduce durability use by 45%.\nFind more armor, armor parts, and legendary parts in loot." },
          { level: 4, name: "Gladiator", attributeRequirement: 0, cost: 3, description: "You have made a name for yourself and are feared by nearly all as you are now a gladiator. Reduce medium armor movement penalty by 75% and stamina penalty by 50%. Reduce durability use by 60%.\nFind more armor, armor parts, and legendary parts in loot." }
        ]
      }
    ]
  }
];

