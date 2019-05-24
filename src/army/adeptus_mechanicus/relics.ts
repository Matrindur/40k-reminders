import { IRelics, IWarlordTraits, ISubfactions } from 'types/army'

import { 
	DURING_DEPLOYMENT,
	DURING_GAME, 
	START_OF_GAME, 
	PSYCHIC_PHASE, 
	ENEMY_CHARGE_PHASE, 
	START_OF_FIGHT_PHASE, 
	START_OF_MOVEMENT_PHASE, 
	MOVEMENT_PHASE, 
	END_OF_MOVEMENT_PHASE,
	START_OF_BATTLEROUND,
	MORALE_PHASE, FIGHT_PHASE, 
	ENEMY_SHOOTING_PHASE,
	START_OF_SHOOTING_PHASE,	
	SHOOTING_PHASE, 
	START_OF_TURN,
	END_OF_FIGHT_PHASE
} from 'types/phases'

// Subfactions
export const Subfactions: ISubfactions = {
  MARS: {
    name: 'Mars',
    effects: [
      {
        name: 'Glory to the Omnissiah',
        desc:
          'When you randomly determine a Canticle of the Omnissiah roll two dice instead of one. All units with this dogma recieve both effects',
        when: START_OF_BATTLEROUND,
      },
    ],
  },
  GRAIA: {
    name: 'Graia',
    effects: [
      {
        name: 'Refusal to Yield',
        desc:
          'When a Model is slain or flees roll a D6. On a 6 that models ignores the wound or does not flee. Models cant fall back unless there is a friendly <FORGE WORLD> CHARACTER on the Battlefield.',
        when: DURING_GAME,
      },
    ],
  },
  METALICA: {
    name: 'Metalica',
    effects: [
      {
        name: 'Relentless March',
        desc:
          'When a model Advances ignore the penalty for firing Assault weapons and treat Rapid Fire weapons as Assault weapons.',
        when: MOVEMENT_PHASE,
      },
    ],
  },
  LUCIUS: {
    name: 'Lucius',
    effects: [
      {
        name: 'The Solar Blessing',
        desc:
          'When making saving throws, enemy AP values of -1 are counted as 0 instead',
        when: DURING_GAME,
      },
    ],
  },
  AGRIPINAA: {
    name: 'Agripinaa',
    effects: [
      {
        name: 'Staunch Defenders',
        desc:
          'Overwatch hits on 5+ instead of 6.',
        when: ENEMY_CHARGE_PHASE,
      },
    ],
  },
  STYGIESVIII: {
    name: 'Stygies VIII',
    effects: [
      {
        name: 'Shroud Protocols',
        desc:
          'Your opponent must subtract 1 from their hit rolls when shooting at units with this dogma.',
        when: ENEMY_SHOOTING_PHASE,
      },
    ],
  },
  RYZA: {
    name: 'Ryza',
    effects: [
      {
        name: 'Red in Cog and Claw',
        desc:
          'Re-roll wound rolls of 1.',
        when: FIGHT_PHASE,
      },
    ],
  },
}

// Warlord Traits
export const WarlordTraits: IWarlordTraits = {
  MONITOR_MALEVOLUS: {
    name: 'Monitor Malevolus',
    effects: [
      {
        name: 'Monitor Malevolus',
        desc:
          'You can re-roll a single hot, wound or damage roll for your Warlord. Each time you or your opponent use a Stratagem; on a 6, you gain a Command Point.',
        when: DURING_GAME,
      },
    ],
  },
  MAGOS_BIOLOGIS: {
    name: 'Magos Biologis',
    effects: [
      {
        name: 'Magos Biologis',
        desc:
          'Re-roll failed wound rolls when attacking enemy INFANTRY, BEAST or MONSTER units with your Warlord.',
        when: DURING_GAME,
      },
    ],
  },
  MECHADOMINATOR: {
    name: 'Mechadominator',
    effects: [
      {
        name: 'Mechadominator',
        desc:
          'Your opponent must subtract 1 from hit rolls they make for any of their VEHICLES that target your Warlord.',
        when: DURING_GAME,
      },
    ],
  },
  NECROMECHANIC: {
    name: 'Necromechanic',
    effects: [
      {
        name: 'Necromechanic',
        desc:
          'Each time your Warlord uses an ability to repair a friendly model, that model regains 1 additional wound.',
        when: END_OF_MOVEMENT_PHASE,
      },
    ],
  },
  CHORISTER_TECHNIS: {
    name: 'Chorister Technis',
    effects: [
      {
        name: 'Chorister Technis',
        desc:
          'Re-roll the dice to randomly select a Canticle of the Omnissiah. Only re-roll the first dice in case of Glory to the Omnissiah.',
        when: START_OF_BATTLEROUND,
      },
    ],
  },
  PRIME_HERMETICON: {
    name: 'Prime Hermeticon',
    effects: [
      {
        name: 'Prime Hermeticon',
        desc:
          'Friendly <FORGE WORLD> INFANTRY units within 6" of your Warlord can re-roll failed hit rolls in the Fight phase.',
        when: FIGHT_PHASE,
      },
    ],
  },
  STATIC_PSALM_CODE: {
    name: 'Mars|Static Psalm-code',
    effects: [
      {
        name: 'Static Psalm-code',
        desc:
          'Add 3" to the range of any aura abilities on your Warlords datasheet',
        when: DURING_GAME,
      },
    ],
  },
  EMOTIONLESS_CLARITY: {
    name: 'Graia|Emotionless Clarity',
    effects: [
      {
        name: 'Emotionless Clarity',
        desc:
          'Graia units within 6" of your Warlord can shoot with Assault and Rapid Fire weapons even if enemy units are within 1". Only target the closest unit even if there are friendly units within 1".',
        when: SHOOTING_PHASE,
      },
    ],
  },
  ORDERED_EFFICIENCY: {
    name: 'Metalica|Ordered Efficiency',
    effects: [
      {
        name: 'Ordered Efficiency',
        desc:
          'Metalica units within 6" of your Warlord can shoot after Falling Back. Subtract 1 from that units hit rolls.',
        when: SHOOTING_PHASE,
      },
    ],
  },
  SUPERIOR_BIONICS: {
    name: 'Lucius|Superior Bionics',
    effects: [
      {
        name: 'Superior Bionics',
        desc:
          'Add 1 to invulnerable saving throws made for your Warlord. ',
        when: DURING_GAME,
      },
    ],
  },
  REINFORCED_EXOSKELETON: {
    name: 'Agripinaa|Reinforced Exoskeleton',
    effects: [
      {
        name: 'Reinforced Exoskeleton',
        desc:
          'All damage suffered by your Warlord is reduced by 1 (to a minimum of 1). ',
        when: DURING_GAME,
      },
    ],
  },
  XENARITE_STUDIES: {
    name: 'STYGIES VIII|Xenarite Studies',
    effects: [
      {
        name: 'Xenarite Studies',
        desc:
          'Add 1 to any wound rolls made for your Warlord against units that do not have the CHAOS, IMPERIUM or UNALIGNED Faction keywords.',
        when: DURING_GAME,
      },
    ],
  },
  FIRST_HAND_FIELD_TESTING: {
    name: 'Ryza|First-hand Field Testing',
    effects: [
      {
        name: 'First-hand Field Testing',
        desc:
          'When setting up your Warlord, choose one of their weapons (this cannot be an Arcana Mechanicum); increase the Strength and Damage characteristics of that weapon by 1. ',
        when: DURING_DEPLOYMENT,
      },
    ],
  },
}

// Relics

export const Relics: IRelics = {
  ANZIONS_PSEUDOGENETOR: {
    name: 'Anzions Pseudogenerator',
    effects: [
      {
        name: 'Anzions Pseudogenerator',
        desc:
          'You can make D6 additional attacks with the Anzions Pseudogenerator profile.',
        when: FIGHT_PHASE,
      },
    ],
  },
  AUTOCADUCEUS_OF_ARKHAN_LAND: {
    name: 'Autocaduceus of Arkhan Land',
    effects: [
      {
        name: 'Autocaduceus of Arkhan Land',
        desc:
          'Heal 1 wound. Additionaly abilities that repair a friendly ADEPTUS MECHANICUS model, you may re-roll the dice.',
        when: START_OF_TURN,
      },
    ],
  },
  PATER_COG_TOOTH: {
    name: 'Pater Cog-Tooth',
    effects: [
    ],
  },
  PHOSPHOENIX: {
    name: 'Phosphoenix',
    effects: [
    ],
  },
  RAIMENT_OF_THE_TECHNOMARTYR: {
    name: 'Raiment of the Technomartyr',
    effects: [
      {
        name: 'Raiment of the Technomartyr',
        desc:
          'Every time the bearer loses a wound roll a dice. On a 6 do not lose that wound. Additionally every time a friendly <FORGE WORLD> model rolls a 6 to hit when firing Overwatch make a bonus attack with the same weapon.',
        when: DURING_GAME,
      },
    ],
  },
  THE_ADAMANTINE_ARM: {
    name: 'The Adamantine Arm',
    effects: [
    ],
  },
  THE_CEREBRAL_TECHNO_MITRE: {
    name: 'The Cerebral Techo-Mitre',
    effects: [
      {
        name: 'The Cerebral Techo-Mitre',
        desc:
          'Start the battle with an additional Command Point.',
        when: START_OF_GAME,
      },
    ],
  },
  THE_EYE_OF_XI_LEXUM: {
    name: 'The Eye of XI-Lexum',
    effects: [
      {
        name: 'The Eye of XI-Lexum',
        desc:
          'Re-roll wound rolls of 1 for friendly AGRIPINAA units that target an enemy VEHICLE that you picked within 18" of the bearer. If the unit you picked is a CHAOS VEHICLE re-roll failed wound rolls instead.',
        when: START_OF_SHOOTING_PHASE,
      },
    ],
  },
  THE_OMNISSIAHS_MASK: {
    name: 'The Omnissiahs Mask',
    effects: [
      {
        name: 'The Omnissiahs Mask',
        desc:
          'Re-roll failed hit-rolls for friendly SKITARII units within 6".',
        when: FIGHT_PHASE,
      },
    ],
  },
  THE_OMNISSIAHS_HAND: {
    name: 'The Omnissiahs Hand',
    effects: [
      {
        name: 'The Omnissiahs Hand',
        desc:
          'Roll a dice for each enemy unit within 1", on a 4+ that unit suffers a mortal wound.',
        when: END_OF_FIGHT_PHASE,
      },
    ],
  },
  THE_RED_AXE: {
    name: 'The Red Axe',
    effects: [
    ],
  },
  THE_SKULL_OF_ELDER_NIKOLA: {
    name: 'The Skull of Elder Nikola',
    effects: [
      {
        name: 'The Skull of Elder Nikola',
        desc:
          'Once per game: Roll a dice for each enemy VEHICLE within 2D6"; on a roll of 2+ that unit suffers a mortal wound.',
        when: SHOOTING_PHASE,
      },
    ],
  },
  THE_SOLAR_FLARE: {
    name: 'The Solar Flare',
    effects: [
      {
        name: 'The Solar Flare',
        desc:
          'Once per game: The bearer can teleport instead of moving normally. Replace them anywhere within 30" of their starting position and more than 9" away from enemy models.',
        when: END_OF_MOVEMENT_PHASE,
      },
    ],
  },
  UNCREATOR_GAUNTLET: {
    name: 'Uncreator Gauntlet',
    effects: [
    ],
  },
  WEAPON_XCIX: {
    name: 'Weapon XCIX',
    effects: [
    ],
  },
}

export default Relics
