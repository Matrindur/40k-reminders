import { IDetachments, IUnits } from 'types/army'
import {
  END_OF_DEPLOYMENT,
  PSYCHIC_PHASE,
  MOVEMENT_PHASE,
  END_OF_MOVEMENT_PHASE,
  CHARGE_PHASE,
  MORALE_PHASE,
  FIGHT_PHASE,
  END_OF_SHOOTING_PHASE,
  SHOOTING_PHASE,
  START_OF_PSYCHIC_PHASE,
  START_OF_CHARGE_PHASE,
  START_OF_GAME,
  DURING_DEPLOYMENT,
  TURN_ONE_MOVEMENT_PHASE,
  TURN_ONE_PSYCHIC_PHASE,
} from 'types/phases'

// Command Trait Keywords
export const Tags = {
  SLANN: 'Slann',
  SKINK: 'Skink',
  SAURUS: 'Saurus',
}

// Unit Names
export const Units: IUnits = {
  LORD_KROAK: {
    name: 'Lord Kroak',
    effects: [
      {
        name: 'Celestial Conjuration',
        desc:
          'Summon units with Lord Kroak. Summoned units must be set up wholly within 12" of a friendly SLANN or a friendly SAURUS ASTROLITH BEARER, and more than 9" from any enemy units.',
        when: END_OF_MOVEMENT_PHASE,
      },
    ],
  },
  SLANN: {
    name: 'Slann Starmaster',
    effects: [
      {
        name: 'Celestial Configuration',
        desc: 'Roll a dice and see which constellation is in the ascendant, and how it affects your army.',
        when: END_OF_DEPLOYMENT,
      },
      {
        name: 'Celestial Conjuration',
        desc:
          'Summon units with Slann. Summoned units must be set up wholly within 12" of a friendly SLANN or a friendly SAURUS ASTROLITH BEARER, and more than 9" from any enemy units.',
        when: END_OF_MOVEMENT_PHASE,
      },
    ],
  },
  OLDBLOOD_ON_CARNOSAUR: {
    name: 'Saurus Oldblood on Carnosaur',
    effects: [
      {
        name: 'Bloodroar',
        desc:
          'If your opponent takes a MORALE test for a unit within 8" of any Carnosaurs, roll a dice. If the result is higher than the result on your opponent’s dice, D3 models flee from the unit (as well as any that flee because of the test).',
        when: MORALE_PHASE,
      },
    ],
  },
  OLDBLOOD: {
    name: 'Saurus Oldblood',
    effects: [],
  },
  SCARVET_ON_COLD_ONE: {
    name: 'Saurus Scar-Veteran on Cold One',
    effects: [],
  },
  ETERNITY_WARDEN: {
    name: 'Saurus Eternity Warden',
    effects: [],
  },
  SUNBLOOD: {
    name: 'Saurus Sunblood',
    effects: [],
  },
  SCARVET: {
    name: 'Scar-Veteran with Battle Standard',
    effects: [],
  },
  SCARVET_ON_CARNOSAUR: {
    name: 'Saurus Scar-Veteran on Carnosaur',
    effects: [
      {
        name: 'Bloodroar',
        desc:
          'If your opponent takes a MORALE test for a unit within 8" of any Carnosaurs, roll a dice. If the result is higher than the result on your opponent’s dice, D3 models flee from the unit (as well as any that flee because of the test).',
        when: MORALE_PHASE,
      },
    ],
  },
  ASTROLITH_BEARER: {
    name: 'Saurus Astrolith Bearer',
    effects: [
      {
        name: 'Celestial Conduit',
        desc:
          'Add 1 to casting rolls for friendly Seraphon Wizards while they are within 12" of any Astrolith Bearer. In addition, add 8" to the range of any spells cast by friendly Seraphon Wizards while they are within 12" of any Astrolith Bearer',
        when: PSYCHIC_PHASE,
      },
    ],
  },
  SKINK_PRIEST: {
    name: 'Skink Priest',
    effects: [
      {
        name: 'Celestial Rites',
        desc:
          'Roll a dice. If the result is 4 or more, pick a SERAPHON unit within 8". You can re-roll run rolls, charge rolls and save rolls for that unit until your next PSYCHIC phase.',
        when: PSYCHIC_PHASE,
      },
    ],
  },
  SKINK_STARSEER: {
    name: 'Skink Starseer',
    effects: [
      {
        name: 'Cosmic Herald',
        desc:
          'At the start of your PSYCHIC phase, you can roll a dice for this model. If you do so, on a 2+, you receive 1 command point. On a 1, your opponent receives 1 command point instead.',
        when: START_OF_PSYCHIC_PHASE,
      },
    ],
  },
  SKINK_STARPRIEST: {
    name: 'Skink Starpriest',
    effects: [
      {
        name: 'Serpent Staff',
        desc:
          'A Skink Starpriest can level its staff at a SERAPHON unit in your army that is within 8", granting them the venom of the two-headed celestial serpent. Until your next PSYCHIC phase, whenever models from that unit attack with their bite or jaws, a wound roll of 6 or more causes twice the normal amount of Damage.',
        when: PSYCHIC_PHASE,
      },
    ],
  },
  ENGINE_OF_THE_GODS: {
    name: 'Engine of the Gods',
    effects: [
      {
        name: 'Cosmic Engine',
        desc: 'Roll for Engine of the Gods effect',
        when: PSYCHIC_PHASE,
      },
    ],
  },
  SAURUS_WARRIORS: {
    name: 'Saurus Warriors',
    effects: [
      {
        name: 'Stardrake Icon',
        desc: 'If a MORALE test is made for an enemy unit within 5" of any stardrake icons, add 1 to the result.',
        when: MORALE_PHASE,
      },
    ],
  },
  SAURUS_GUARD: {
    name: 'Saurus Guard',
    effects: [
      {
        name: 'Stardrake Icon',
        desc: 'If a MORALE test is made for an enemy unit within 5" of any stardrake icons, add 1 to the result.',
        when: MORALE_PHASE,
      },
    ],
  },
  SAURUS_KNIGHTS: {
    name: 'Saurus Knights',
    effects: [
      {
        name: 'Stardrake Icon',
        desc: 'If a MORALE test is made for an enemy unit within 5" of any stardrake icons, add 1 to the result.',
        when: MORALE_PHASE,
      },
      {
        name: 'Blazing Lances',
        desc:
          'If the wound roll for a Celestite Lance is 6 or higher and the model charged in the same turn, the attack inflicts an additional mortal wound.',
        when: FIGHT_PHASE,
      },
    ],
  },
  SKINKS: {
    name: 'Skinks',
    effects: [
      {
        name: 'Wary Fighters',
        desc:
          'When it is a Skink unit\'s turn to pile in and attack, it can withdraw instead. Move each model in the unit up to 8", so that each one ends up at least 3" from the enemy.',
        when: FIGHT_PHASE,
      },
      {
        name: 'Celestial Cohort',
        desc:
          'Add 1 to hit rolls for Skinks in the shooting phase if it has at least 20 models, or add 2 if it has at least 30 models.',
        when: SHOOTING_PHASE,
      },
    ],
  },
  CHAMELEON_SKINKS: {
    name: 'Chameleon Skinks',
    effects: [
      {
        name: 'Chameleon Ambush',
        desc:
          'Instead of setting up Chameleon Skinks on the battlefield, you can place it to one side and say that it is in hiding. In any of your movement phases, you can reveal a unit that is in hiding by setting it up anywhere on the battlefield.',
        when: MOVEMENT_PHASE,
      },
      {
        name: 'Disappear From Sight',
        desc:
          'Chameleon Skinks can blend with its surroundings and go into hiding. If it does so, remove it from the battlefield. You can reveal it via "Chameleon Ambush" in any subsequent turn.',
        when: PSYCHIC_PHASE,
      },
    ],
  },
  TERRADONS: {
    name: 'Terradon Riders',
    effects: [
      {
        name: 'Deadly Cargo',
        desc:
          'Once per game, the unit can drop its boulders onto an enemy unit it moves over during the movement phase. Roll a dice for each Terradon in this unit; for each result of 4 or more, the enemy unit is struck by an exploding boulder and suffers D3 mortal wounds.',
        when: MOVEMENT_PHASE,
      },
      {
        name: 'Swooping Dive',
        desc:
          'Remember to declare that your Terradons are swooping. In the following FIGHT phase you can re-roll failed hit and wound rolls for this unit.',
        when: END_OF_MOVEMENT_PHASE,
      },
    ],
  },
  RIPPERDACTYLS: {
    name: 'Ripperdactyl Riders',
    effects: [
      {
        name: 'Toad Rage',
        desc: 'Place Blot Toad for Ripperdactyls',
        when: TURN_ONE_PSYCHIC_PHASE,
      },
      {
        name: 'Toad Rage',
        desc: 'Move Blot Toad up to D6 inches',
        when: MOVEMENT_PHASE,
      },
      {
        name: 'Swooping Dive',
        desc:
          'Remember to declare that your Ripperdactyls are swooping. In the following FIGHT phase you can re-roll failed hit and wound rolls for this unit.',
        when: END_OF_MOVEMENT_PHASE,
      },
    ],
  },
  SKINK_HANDLERS: {
    name: 'Skink Handlers',
    effects: [],
  },
  SALAMANDERS: {
    name: 'Salamanders',
    effects: [
      {
        name: 'It Burns!',
        desc:
          'Roll a dice at the end of the shooting phase for each unit that suffered any wounds from a Salamander’s Stream of Fire in that phase. If the result is 4 or higher, the unit suffers D3 mortal wounds as the corrosive liquid eats through armour, flesh and bone.',
        when: END_OF_SHOOTING_PHASE,
      },
    ],
  },
  RAZORDONS: {
    name: 'Razordons',
    effects: [
      {
        name: 'Instinctive Defence',
        desc:
          'Once per turn, if an enemy unit ends a charge move within 3" of a Razordon unit, roll a dice. If the result is 4 or higher, the Razordons immediately attack the charging unit with their Volleys of Spikes.',
        when: CHARGE_PHASE,
      },
      {
        name: 'Piercing Barbs',
        desc: `If a Razordon shoots a Volley of Spikes at a target within 6", it has a Rend characteristic of -1 rather than '-'.`,
        when: SHOOTING_PHASE,
      },
    ],
  },
  KROXIGOR: {
    name: 'Kroxigor',
    effects: [],
  },
  STEGADON: {
    name: 'Stegadon',
    effects: [
      {
        name: 'Steadfast Majesty',
        desc: 'You can re-roll MORALE tests for units of SKINKS within 5" of any STEGADONS.',
        when: MORALE_PHASE,
      },
      {
        name: 'Skink Alpha',
        desc:
          'If a Stegadon is ridden by a Skink Alpha, then in your PSYCHIC phase the Alpha can give orders to a SKINK unit within 8". If that unit is not within 3" of an enemy unit, you can immediately roll a dice and move each of its models up to that many inches. In addition, until your next PSYCHIC phase, you can re-roll hit rolls of 1 for that unit.',
        when: PSYCHIC_PHASE,
      },
    ],
  },
  BASTILADON: {
    name: 'Bastiladon',
    effects: [],
  },
  TROGLODON: {
    name: 'Troglodon',
    effects: [
      {
        name: 'Divining Rod',
        desc:
          'The Skink Oracle can use its Divining Rod to attempt to unbind a spell in each enemy PSYCHIC phase in the same manner as a wizard.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Primeval Roar',
        desc: 'Enemy units within 8" of any Troglodons in the MORALE phase must subtract 1 from their Bravery.',
        when: MORALE_PHASE,
      },
    ],
  },
  DREAD_SAURIAN: {
    name: 'Dread Saurian',
    effects: [
      {
        name: 'Primal Presence',
        desc: 'Do not take MORALE tests for friendly Skink units while they are wholly within 24" of this model.',
        when: MORALE_PHASE,
      },
      {
        name: 'Arcane Glyphs',
        desc: 'You can heal up to D3 wounds allocated to this model.',
        when: PSYCHIC_PHASE,
      },
    ],
  },
}

// Detachments
export const Detachments: IDetachments = {
  BLOODCLAW_STARHOST: { name: 'Bloodclaw Starhost', effects: [] },
  ETERNAL_STARHOST: { name: 'Eternal Starhost', effects: [] },
  HEAVENSWATCH_STARHOST: { name: 'Heavenswatch Starhost', effects: [] },
  SHADOWSTRIKE_STARHOST: {
    name: 'Shadowstrike Starhost',
    effects: [
      {
        name: 'Stealthy Advance',
        desc:
          'After set-up is complete, you can roll two dice for each unit in a Shadowstrike Starhost and move all of its models up to that many inches.',
        when: END_OF_DEPLOYMENT,
      },
      {
        name: 'The Trap is Sprung',
        desc:
          'Pick a unit that is visible to the starhost’s Skink Priest or Starpriest. Until your next PSYCHIC phase, you can re-roll hit and wound rolls of 1 for units from the Shadowstrike Starhost that attack the unit you picked.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Strike From the Skies',
        desc:
          'Instead of setting up the flying unit from Shadowstrike Starhost on the battlefield, you can place it to one side and say that it is hidden amid the clouds. In any of your movement phases, the unit can plummet from the skies to assail the foe. When it does so, you can set it up anywhere more than 3" from the enemy. In the following FIGHT phase, add 1 to the result of any wound rolls made for models from that unit.',
        when: MOVEMENT_PHASE,
      },
    ],
  },
  FIRELANCE_STARHOST: {
    name: 'Firelance Starhost',
    effects: [
      {
        name: 'Blazing Cohort',
        desc:
          ' If the wound roll for a Celestite weapon carried by a model from a Firelance Starhost is 6 or higher and it charged in the same turn, the attack inflicts an additional mortal wound, as well as any caused by the Saurus Knights Blazing Lances ability.',
        when: FIGHT_PHASE,
      },
      {
        name: 'Azyrite Hunters',
        desc:
          'Add 3 to the result of any run and charge rolls for Saurus Knights that are within 10" of their Scar-Veteran.',
        when: MOVEMENT_PHASE,
      },
      {
        name: 'Azyrite Hunters',
        desc:
          'Add 3 to the result of any run and charge rolls for Saurus Knights that are within 10" of their Scar-Veteran.',
        when: CHARGE_PHASE,
      },
    ],
  },
  STARBEAST_CONSTELLATION: {
    name: 'Starbeast Constellation',
    effects: [
      {
        name: 'Ordered Constellation',
        desc: 'Units in a Starbeast Constellation do not need to take MORALE tests.',
        when: MORALE_PHASE,
      },
      {
        name: 'Strategic Mastery',
        desc: 'You receive D3+1 command points, instead of 1, for each Starbeast Constellation in your army.',
        when: START_OF_GAME,
      },
    ],
  },
  SUNCLAW_STARHOST: {
    name: 'Sunclaw Starhost',
    effects: [
      {
        name: 'Predatory Starhost',
        desc:
          'Saurus Warriors from a Sunclaw Starhost make 2 attacks with their Powerful Jaws and Stardrake Shields rather than 1.',
        when: FIGHT_PHASE,
      },
    ],
  },
  THUNDERQUAKE_STARHOST: {
    name: 'Thunderquake Starhost',
    effects: [
      {
        name: "Creator's Will",
        desc:
          'The Engine of the Gods or Troglodon, and any units from the Thunderquake Starhost within 8", are guided by the will of their creator. At the start of your charge phase, you can declare that all of those units will be swift until your next charge phase, in which case you can re-roll charge rolls for those units and hit rolls for attacks made by those units. You can instead declare that all those units will be savage until your next charge phase, in which case you can re-roll wound rolls for attacks made by those units and save rolls for attacks that target those units',
        when: START_OF_CHARGE_PHASE,
      },
      {
        name: 'Celestial Surge',
        desc:
          'The great beasts of the seraphon are almost invincible when they march forth as a pack, even more so when in the presence of the Starmaster that created them. In your PSYCHIC phase, each model from a Thunderquake Starhost heals a wound. Models from a Thunderquake Starhost that are within 10" of a SLANN heal D3 wounds instead.',
        when: PSYCHIC_PHASE,
      },
    ],
  },
  FANGS_OF_SOTEK: {
    name: 'Fangs of Sotek',
    effects: [
      {
        name: 'First to Battle',
        desc:
          'In the first battle round, add 3" to the Move characteristic of Fangs of Sotek units, excluding Zectoka.',
        when: TURN_ONE_MOVEMENT_PHASE,
      },
      {
        name: 'First Oldblood',
        desc: 'Add 1 to the number of command points you start the battle with.',
        when: START_OF_GAME,
      },
    ],
  },
  DRACOTHIANS_TAIL: {
    name: "Dracothion's Tail",
    effects: [
      {
        name: "Appear at Kuoteq's Command",
        desc:
          'Instead of setting up a unit from this detachment on the battlefield, you can place it to one side and say that it is set up waiting to appear at Kuoteq’s command as a reserve unit. You can set up one reserve unit waiting to appear at Kuoteq’s command for each unit from the same detachment you set up on the battlefield.',
        when: DURING_DEPLOYMENT,
      },
      {
        name: "Appear at Kuoteq's Command",
        desc:
          'You can set up one or more of the reserve units waiting to appear at Kuoteq\'s command on the battlefield more than 9" from any enemy units and wholly within 18" of Kuoteq. However, each reserve unit set up in the same turn must be a different unit chosen from a different warscroll – Kuoteq cannot command the same unit to appear more than once in the same turn. Reserve units that are set up on the battlefield for the first time cannot move in the following movement phase. Any reserve units waiting to appear at Kuoteq’s command which are not set up on the battlefield before the start of the fourth battle round are slain.',
        when: PSYCHIC_PHASE,
      },
    ],
  },
}
