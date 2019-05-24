import { ICommandTraits } from 'types/army'

import { PSYCHIC_PHASE, FIGHT_PHASE, DURING_GAME, START_OF_PSYCHIC_PHASE, START_OF_FIGHT_PHASE } from 'types/phases'
import { Tags } from './units'

const CommandTraits: ICommandTraits = {
  [Tags.SLANN]: {
    'Arcane Might': {
      desc: 'You can re-roll one casting or unbinding roll for this general each PSYCHIC phase.',
      when: PSYCHIC_PHASE,
    },
    'Vast Intellect': {
      desc:
        'This general can use the Curse of Fates and Summon Starlight spells from the Skink Starseer and Skink Starpriest warscrolls.',
      when: PSYCHIC_PHASE,
    },
    'Great Rememberer': {
      desc:
        'If this general is on the battlefield, you can use the Lords of Space and Time battle trait twice in each of your PSYCHIC phases rather than only once.',
      when: PSYCHIC_PHASE,
    },
  },
  [Tags.SAURUS]: {
    'Disciplined Fury': {
      desc: 'You can re-roll hit rolls of 1 for attacks made with this general’s melee weapons.',
      when: FIGHT_PHASE,
    },
    'Thickly Scaled Hide': {
      desc: 'You can re-roll save rolls of 1 for this general.',
      when: DURING_GAME,
    },
    'Mighty War Leader': {
      desc:
        'At the start of your PSYCHIC phase, if this general is on the battlefield, roll a dice. On a 5+ you receive 1 extra command point.',
      when: START_OF_PSYCHIC_PHASE,
    },
  },
  [Tags.SKINK]: {
    'Master of Star Rituals': {
      desc:
        'If this general is a SKINK PRIEST from the Skink Priest warscroll, they can use the Celestial Rites ability from their warscroll twice in each of their PSYCHIC phases rather than once. If they are not a SKINK PRIEST from the Skink Priest warscroll, then they can use the Celestial Rites ability.',
      when: PSYCHIC_PHASE,
    },
    Nimble: {
      desc:
        'Add 1 to this general’s Move characteristic. In addition, add 1 to save rolls for this general as long as they are not riding upon a mount.',
      when: DURING_GAME,
    },
    Cunning: {
      desc:
        'Roll a dice at the start of the FIGHT phase if this general is within 3" of an enemy PSYCHIC. On a 4+ the enemy PSYCHIC suffers 1 mortal wound.',
      when: START_OF_FIGHT_PHASE,
    },
  },
}

export default CommandTraits
