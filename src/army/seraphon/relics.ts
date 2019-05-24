import { IRelics, IWarlordTraits, ISubfactions } from 'types/army'

import { DURING_GAME, START_OF_GAME, PSYCHIC_PHASE, START_OF_FIGHT_PHASE, START_OF_MOVEMENT_PHASE } from 'types/phases'

// Subfactions
export const Subfactions: ISubfactions = {
  BAUM: {
    name: 'Baum',
    effects: [
      {
        name: 'Hey',
        desc:
          'If the unmodified wound roll for an attack made with a melee weapon used by a model from the Troggherd detachment is 6, add 1 to the Damage characteristic for that attack.',
        when: START_OF_FIGHT_PHASE,
      },
    ],
  },
}

// Warlord Traits
export const WarlordTraits: IWarlordTraits = {
  HAPPY: {
    name: 'Happy',
    effects: [
      {
        name: 'Eat on the Move',
        desc:
          'If the unmodified wound roll for an attack made with a melee weapon used by a model from the Troggherd detachment is 6, add 1 to the Damage characteristic for that attack.',
        when: START_OF_FIGHT_PHASE,
      },
    ],
  },
}

export const Relics: IRelics = {
  ZOETIC_DIAL: {
    name: 'Zoetic Dial',
    effects: [
      {
        name: 'Zoetic Dial',
        desc:
          'Roll a dice after set-up is complete, but before the battle begins. In the battle round corresponding to the number you roll, you can re-roll failed save rolls for the bearer. If you roll a 6, you can decide to use this ability at the start of any one battle round, rather than having to use it in the 6th battle round.',
        when: DURING_GAME,
      },
    ],
  },
  INCANDESCENT_RETRICES: {
    name: 'Incandescent Rectrices',
    effects: [
      {
        name: 'Incandescent Rectrices',
        desc:
          'Roll a dice the first time a wound is allocated to the bearer that would slay them. On a 1-2 the bearer is slain. On a 3+ heal D6 wounds allocated to the bearer instead.',
        when: DURING_GAME,
      },
    ],
  },
  BLADE_OF_REALITIES: {
    name: 'Blade of Realities',
    effects: [
      {
        name: 'Blade of Realities',
        desc: 'Pick one of the bearer’s melee weapons. Improve the Rend characteristic of that weapon by 1.',
        when: START_OF_GAME,
      },
    ],
  },
  LIGHT_OF_DRACOTHIAN: {
    name: 'Light of Dracothion',
    effects: [
      {
        name: 'Light of Dracothion',
        desc:
          'Once per battle, you can automatically unbind one spell cast by an enemy WIZARD within 15" of the bearer.',
        when: PSYCHIC_PHASE,
      },
    ],
  },
  CORONAL_SHIELD: {
    name: 'Coronal Shield',
    effects: [
      {
        name: 'Coronal Shield',
        desc:
          'At the start of each FIGHT phase, roll a dice for each enemy unit within 3" of the bearer. On a 4+ subtract 1 from hit rolls for that unit in that FIGHT phase.',
        when: START_OF_FIGHT_PHASE,
      },
    ],
  },
  PRISM_OF_AMYNTOK: {
    name: 'Prism of Amyntok',
    effects: [
      {
        name: 'Prism of Amyntok',
        desc:
          'Once per the battle, at the start of your movement phase, pick an enemy unit within 12" of the bearer and roll a dice. On a 1 that unit suffers 1 mortal wound. On a 2-5 that unit suffers D3 mortal wounds. On a 6 that unit suffers D6 mortal wounds.',
        when: START_OF_MOVEMENT_PHASE,
      },
    ],
  },
}

export default Relics
