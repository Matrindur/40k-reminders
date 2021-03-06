import { IDetachments, IUnits } from 'types/army'
import {
  MORALE_PHASE,
  PSYCHIC_PHASE,
  MOVEMENT_PHASE,
  DURING_GAME,
  FIGHT_PHASE,
  CHARGE_PHASE,
  START_OF_FIGHT_PHASE,
  START_OF_PSYCHIC_PHASE,
  END_OF_TURN,
  TURN_ONE_DURING_TURN,
  TURN_TWO_DURING_TURN,
  SHOOTING_PHASE,
  START_OF_MOVEMENT_PHASE,
  START_OF_CHARGE_PHASE,
  START_OF_SHOOTING_PHASE,
  START_OF_DEPLOYMENT,
  END_OF_MOVEMENT_PHASE,
} from 'types/phases'

// Command Trait Keywords
export const Tags = {}

// Unit Names
export const Units: IUnits = {
  SKRAGROTT: {
    name: 'Skragrott, The Loonking',
    effects: [
      {
        name: 'Babbling Wand',
        desc:
          'If Skragrott is your general and is on the battlefield at the start of your PSYCHIC phase, roll a dice. On a 4+ you receive D3 extra command points.',
        when: START_OF_PSYCHIC_PHASE,
      },
      {
        name: 'Da Moon Onna Stikk',
        desc:
          'If any wounds inflicted by Da Moon Onna Stikk are allocated to an enemy model and not negated, that enemy model suffers 1 mortal wound at the end of each battle round (even if the wounds inflicted by Da Moon Onna Stikk are subsequently healed).',
        when: END_OF_TURN,
      },
      {
        name: "Loonking's Crown",
        desc:
          'Add 1 to casting and unbinding rolls for Skragrott. In addition, roll a dice each time a wound or mortal wound is allocated to this model. On a 4+ that wound or mortal wound is negated.',
        when: DURING_GAME,
      },
    ],
  },
  GROT_WARBOSS: {
    name: 'Grot Warboss',
    effects: [],
  },
  LOONBOSS: {
    name: 'Loonboss',
    effects: [
      {
        name: 'Dead Tricksy',
        desc: 'Subtract 1 from hit rolls for attacks that target a Loonboss.',
        when: DURING_GAME,
      },
      {
        name: 'I’m Da Boss, Now Stab ’Em Good!',
        desc:
          'You can use this command ability at the start of the FIGHT phase. If you do so, pick 1 friendly Moonclan Grot unit wholly within 12" of a friendly model with this command ability, or wholly within 24" of a model with this command ability that is your general.’The same unit cannot be picked to be affected by this command ability more than once per phase.',
        when: START_OF_FIGHT_PHASE,
      },
    ],
  },
  LOONBOSS_ON_MANGLER_SQUIG: {
    name: 'Loonboss on Mangler Squigs',
    effects: [
      {
        name: 'Redcaps Mushrooms',
        desc:
          'Once per battle, in your PSYCHIC phase, you can say that this Loonboss on Mangler Squigs is eating a redcap mushroom. If you do so, until your next PSYCHIC phase, you can re-roll hit and wound rolls for this model (but not for the model’s mount or crew).',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Watch out!',
        desc:
          'If a Loonboss on Mangler Squigs is slain, before the model is removed from play roll a dice for each unit within 6" of this model. On a 4+ that unit suffers D3 mortal wounds.',
        when: DURING_GAME,
      },
      {
        name: 'Command Ability: Bite Da Moon!',
        desc:
          'You can use this command ability at the start of a FIGHT phase. If you do so, pick 1 friendly model with this command ability. In that FIGHT phase you can add 1 to wound rolls for friendly SQUIG units while they are wholly within 18" of that model.',
        when: START_OF_FIGHT_PHASE,
      },
    ],
  },
  LOONBOSS_ON_GIANT_CAVE_SQUIG: {
    name: 'Loonboss on Giant Cave Squig',
    effects: [
      {
        name: 'Redcap Mushrooms',
        desc:
          'Once per battle, in your PSYCHIC phase, you can say that this Loonboss on Giant Cave Squig is eating a redcap mushroom. If you do so, you can re-roll hit and wound rolls for this model’s Moon-cutta or Moonclan Stabba until your next PSYCHIC phase.',
        when: DURING_GAME,
      },
      {
        name: "Command Ability: Let's Get Bouncing!",
        desc:
          'You can use this command ability at the start of your movement phase. If you do so, pick 1 friendly model with this command ability. All friendly SQUIG units wholly within 12" of that model at the start of that phase can move an extra 3" if they make a move in that phase. A unit cannot benefit from this command ability more than once per movement phase.',
        when: START_OF_MOVEMENT_PHASE,
      },
    ],
  },
  LOONBOSS_WITH_GIANT_CAVE_SQUIG: {
    name: 'Loonboss with Giant Cave Squig',
    effects: [
      {
        name: 'Dead Tricksy',
        desc: 'Subtract 1 from hit rolls for attacks that target a Loonboss with Giant Cave Squig.',
        when: DURING_GAME,
      },
      {
        name: 'I’m Da Boss, Now Stab ’Em Good!',
        desc:
          'You can use this command ability at the start of the FIGHT phase. If you do so, pick 1 friendly Moonclan Grot unit wholly within 12" of a friendly model with this command ability, or wholly within 24" of a model with this command ability that is your general.’The same unit cannot be picked to be affected by this command ability more than once per phase.',
        when: START_OF_FIGHT_PHASE,
      },
    ],
  },
  MADCAP_SHAMAN: {
    name: 'Madcap Shaman',
    effects: [
      {
        name: 'Madcap Mushrooms',
        desc:
          'Once per battle, in your PSYCHIC phase, you can attempt to cast one additional spell with a Madcap Shaman. If you do so, and the casting roll is a double, this model suffers D3 mortal wounds after the effects of the spell (if any) have been resolved.',
        when: PSYCHIC_PHASE,
      },
    ],
  },
  FUNGOID_CAVE_SHAMAN: {
    name: 'Fungoid Cave-Shaman',
    effects: [
      {
        name: 'Mouthpiece of Mork',
        desc:
          'If the Fungoid Cave-Shaman is on the battlefield at the start of your PSYCHIC phase, roll a dice. On a 4+ you receive 1 extra command point.',
        when: START_OF_PSYCHIC_PHASE,
      },
      {
        name: 'Deffcap Mushroom',
        desc: 'Once per battle, a Fungoid Cave-Shaman can attempt to cast 1 extra spell in your PSYCHIC phase.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Spore Squig',
        desc:
          'Roll a dice each time you allocate a wound or mortal wound to a Fungoid Cave-Shaman. On a 4+ the wound or mortal wound is negated.',
        when: DURING_GAME,
      },
    ],
  },
  ZARBAG: {
    name: 'Zarbag',
    effects: [
      {
        name: 'Sniffer Spite',
        desc:
          'Once per battle, before you attempt to cast a spell with Zarbag, you can roll a dice. On a 2+ add 2 to the casting roll.',
        when: PSYCHIC_PHASE,
      },
    ],
  },
  STABBAS: {
    name: 'Stabbas',
    effects: [],
  },
  SHOOTAS: {
    name: 'Shootas',
    effects: [],
  },
  LOONSMASHA_FANATICS: {
    name: 'Loonsmasha Fanatics',
    effects: [
      {
        name: 'Release the Fanatics!',
        desc:
          'At the start of a charge phase, you can release this unit. If you do so, set up this unit wholly within 3" of the unit it was with, and more than 3" from any enemy units. If this unit was released in your charge phase, it can attempt to make a charge move in that phase unless the unit it was with has any restrictions that would stop it from attempting to charge (if it ran, for example); if it was released in the enemy charge phase, it cannot attempt to make a charge move. This unit is destroyed if the unit it is with is destroyed before this unit is released.',
        when: START_OF_CHARGE_PHASE,
      },
      {
        name: 'Whirling Death',
        desc:
          'This unit fights at the start of the FIGHT phase, before the players pick any other units to fight in that FIGHT phase. This unit cannot fight again in the FIGHT phase unless an ability or spell allows it to fight more than once.',
        when: START_OF_CHARGE_PHASE,
      },
      {
        name: 'Splat!',
        desc:
          'If the charge roll for this unit is a double, after the charge move (or after the charge fails), this unit suffers 1 mortal wound and each other unit within 1" of this unit suffers D3 mortal wounds.',
        when: CHARGE_PHASE,
      },
    ],
  },
  SPORESPLATTA_FANATICS: {
    name: 'Sporesplatta Fanatics',
    effects: [
      {
        name: 'Puffshroom Frenzy',
        desc:
          'At the start of your PSYCHIC phase, friendly MOONCLAN GROTS units wholly within 12" of any friendly units with this ability become frenzied until your next PSYCHIC phase. Add 1 to the Attacks characteristic of melee weapons used by frenzied units.',
        when: START_OF_PSYCHIC_PHASE,
      },
      {
        name: 'Whirling Death',
        desc:
          'This unit fights at the start of the FIGHT phase, before the players pick any other units to fight in that FIGHT phase. This unit cannot fight again in the FIGHT phase unless an ability or spell allows it to fight more than once.',
        when: START_OF_CHARGE_PHASE,
      },
      {
        name: 'Splat!',
        desc:
          'If the charge roll for this unit is a double, after the charge move (or after the charge fails), this unit suffers 1 mortal wound and each other unit within 1" of this unit suffers D3 mortal wounds.',
        when: CHARGE_PHASE,
      },
    ],
  },
  SQUIG_HOPPERS: {
    name: 'Squig Hoppers',
    effects: [
      {
        name: 'Boing! Boing! Boing!',
        desc:
          'After a unit of Squig Hoppers has made a normal move, pick 1 enemy unit and roll a dice for each model in this unit that passed across a model from that unit. For each 4+ that unit suffers 1 mortal wound.',
        when: MOVEMENT_PHASE,
      },
    ],
  },
  BOINGROT_BOUNDERZ: {
    name: 'Boingrot Bounderz',
    effects: [
      {
        name: 'Boing! Smash!',
        desc:
          'After a unit of Boingrot Bounderz has made a charge move, pick 1 enemy unit within 1" of this unit and roll a dice for each model in this unit. For each 4+ that enemy unit suffers 1 mortal wound.',
        when: CHARGE_PHASE,
      },
      {
        name: 'Lances of the Bounderz',
        desc:
          "Add 1 to wound rolls for attacks made with Boingrot Bounderz Pokin' Lances if this unit made a charge move in the same turn.",
        when: FIGHT_PHASE,
      },
    ],
  },
  GROT_SQUIG_HERDERS: {
    name: 'Grot Squig Herders',
    effects: [],
  },
  ZARBAGS_GITZ: {
    name: "Zarbag's Gitz",
    effects: [
      {
        name: 'Squigs Go Wild',
        desc:
          'Roll a dice each time a Cave Squig model from this unit flees, before the model is removed from play. On a 4+ the nearest other unit within 6" of the fleeing model suffers 1 mortal wound. If two or more such units are equally close, you can pick which suffers the mortal wound.',
        when: MORALE_PHASE,
      },
    ],
  },
  SCAREMONGER: {
    name: 'Scaremonger',
    effects: [
      {
        name: 'Hallucinogenic Fungus Brews (Scaremonger)',
        desc: 'Add 2 to save rolls for attacks that target this model.',
        when: TURN_ONE_DURING_TURN,
      },
      {
        name: 'Hallucinogenic Fungus Brews (Scaremonger)',
        desc: 'Add 1 to save rolls for attacks that target this model.',
        when: TURN_TWO_DURING_TURN,
      },
      {
        name: 'Bogeyman',
        desc:
          'You can make a Gobbapalooza Know-wotz roll for a Scaremonger. If you do so, roll a dice. On a 3+ pick 1 friendly MOONCLAN GROT unit wholly within 18" of this model that is visible to them. You can re-roll charge rolls and run rolls for that unit until your next PSYCHIC phase.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Slippery Git (Scaremonger)',
        desc:
          'Subtract 1 from hit rolls for attacks made with missile weapons that target this model while it is within 3" of a friendly MOONCLAN unit with 3 or more models.',
        when: SHOOTING_PHASE,
      },
    ],
  },
  BREWGIT: {
    name: 'Brewgit',
    effects: [
      {
        name: 'Hallucinogenic Fungus Brews (Brewgit)',
        desc: 'Add 2 to save rolls for attacks that target this model.',
        when: TURN_ONE_DURING_TURN,
      },
      {
        name: 'Hallucinogenic Fungus Brews (Brewgit)',
        desc: 'Add 1 to save rolls for attacks that target this model.',
        when: TURN_TWO_DURING_TURN,
      },
      {
        name: 'Loonshine Potion',
        desc:
          'You can make a Gobbapalooza Know-wotz roll for a Brewgit. If you do so, roll a dice. On a 3+ pick 1 friendly MOONCLAN GROT PSYCHIC within 18" of this model that is visible to them. You can re-roll hit rolls for that PSYCHIC until your next PSYCHIC phase.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Slippery Git (Brewgit)',
        desc:
          'Subtract 1 from hit rolls for attacks made with missile weapons that target this model while it is within 3" of a friendly MOONCLAN unit with 3 or more models.',
        when: SHOOTING_PHASE,
      },
    ],
  },
  SPIKER: {
    name: 'Spiker',
    effects: [
      {
        name: 'Hallucinogenic Fungus Brews (Spiker)',
        desc: 'Add 2 to save rolls for attacks that target this model.',
        when: TURN_ONE_DURING_TURN,
      },
      {
        name: 'Hallucinogenic Fungus Brews (Spiker)',
        desc: 'Add 1 to save rolls for attacks that target this model.',
        when: TURN_TWO_DURING_TURN,
      },
      {
        name: 'Poison Brewer',
        desc:
          'You can make a Gobbapalooza Know-wotz roll for a Spiker. If you do so, roll a dice. On a 3+ pick 1 friendly MOONCLAN GROT unit wholly within 18" of this model that is visible to them. You can re-roll wound rolls of 1 for that unit until your next PSYCHIC phase.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Slippery Git (Spiker)',
        desc:
          'Subtract 1 from hit rolls for attacks made with missile weapons that target this model while it is within 3" of a friendly MOONCLAN unit with 3 or more models.',
        when: SHOOTING_PHASE,
      },
    ],
  },
  BOGGLEYE: {
    name: 'Boggleye',
    effects: [
      {
        name: 'Hallucinogenic Fungus Brews (Boggleye)',
        desc: 'Add 2 to save rolls for attacks that target this model.',
        when: TURN_ONE_DURING_TURN,
      },
      {
        name: 'Hallucinogenic Fungus Brews (Boggleye)',
        desc: 'Add 1 to save rolls for attacks that target this model.',
        when: TURN_TWO_DURING_TURN,
      },
      {
        name: 'Slippery Git (Boggleye)',
        desc:
          'Subtract 1 from hit rolls for attacks made with missile weapons that target this model while it is within 3" of a friendly MOONCLAN unit with 3 or more models.',
        when: SHOOTING_PHASE,
      },
    ],
  },
  SHROOMANCER: {
    name: 'Shroomancer',
    effects: [
      {
        name: 'Hallucinogenic Fungus Brews (Shroomancer)',
        desc: 'Add 2 to save rolls for attacks that target this model.',
        when: TURN_ONE_DURING_TURN,
      },
      {
        name: 'Hallucinogenic Fungus Brews (Shroomancer)',
        desc: 'Add 1 to save rolls for attacks that target this model.',
        when: TURN_TWO_DURING_TURN,
      },
      {
        name: 'Slippery Git (Shroomancer)',
        desc:
          'Subtract 1 from hit rolls for attacks made with missile weapons that target this model while it is within 3" of a friendly MOONCLAN unit with 3 or more models.',
        when: SHOOTING_PHASE,
      },
    ],
  },
  SNEAKY_SNUFFLERS: {
    name: 'Sneaky Snufflers',
    effects: [
      {
        name: 'Looncap Mushrooms',
        desc:
          'At the start of your movement phase, you can say that this unit of Sneaky Snufflers is harvesting looncap mushrooms. If you do so, it cannot move in that movement phase, but you can roll a dice. If the roll is less than or equal to the number of models in this unit, pick 1 friendly MOONCLAN unit wholly within 12" of this unit. Add 1 to the Attacks Rend Damage -1 - 1 characteristic of melee weapons used by that unit until your next movement phase. If you pick the same unit to be affected by this ability more than once in the same turn, it suffers 2D6 mortal wounds each time you pick it an additional time.',
        when: START_OF_MOVEMENT_PHASE,
      },
    ],
  },
  SQUIG_HERD: {
    name: 'Squig Herd',
    effects: [
      {
        name: 'Squigs Go Wild',
        desc:
          'Roll a dice each time a Cave Squig model from this unit flees, before the model is removed from play. On a 4+ the nearest other unit within 6" of the fleeing model suffers 1 mortal wound. If two or more such units are equally close, you can pick which suffers the mortal wound.',
        when: MORALE_PHASE,
      },
    ],
  },
  MANGER_SQUIGS: {
    name: 'Mangler Squigs',
    effects: [
      {
        name: 'Ker-splat!',
        desc:
          'Add 1 to hit rolls for attacks made with Mangler Squigs Balls and Chains if this model made a charge move in the same turn.',
        when: FIGHT_PHASE,
      },
      {
        name: 'Watch Out!',
        desc:
          'If a Mangler Squigs model is slain, before the model is removed from play roll a dice for each unit within 6" of this model. On a 4+ that unit suffers D3 mortal wounds.',
        when: DURING_GAME,
      },
    ],
  },
  COLOSSAL_SQUIG: {
    name: 'Colossal Squig',
    effects: [],
  },
  SQUIG_GOBBAS: {
    name: 'Squig Gobba',
    effects: [],
  },
  WEBSPINNER_SHAMAN_ON_ARACHNAROK_SPIDER: {
    name: 'Webspinner Shaman on Arachnarok Spider',
    effects: [
      {
        name: 'Spider Venom',
        desc:
          'If the unmodified hit roll for an attack made with this model’s Monstrous Fangs is 6, that attack inflicts D3 mortal wounds on the target and the attack sequence ends (do not make a wound or save roll).',
        when: FIGHT_PHASE,
      },
      {
        name: 'Catchweb Spidershrine',
        desc:
          'Add 1 to casting and unbinding rolls for friendly SPIDERFANG WIZARDS while they are within 12" of any friendly models with this ability.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Prophet of the Spider God',
        desc:
          'If the Webspinner Shaman on Arachnarok Spider is the general of your army, you can add 2 to the Bravery characteristic of friendly SPIDERFANG units wholly within 24" of this model.',
        when: MORALE_PHASE,
      },
    ],
  },
  SCUTTLEBOSS_ON_GIGANTIC_SPIDER: {
    name: 'Scuttleboss on Gigantic Spider',
    effects: [
      {
        name: 'Spider Venom',
        desc:
          'If the unmodified hit roll for an attack made by this model is 6, that attack inflicts 1 mortal wound on the target and the attack sequence ends (do not make a wound or save roll).',
        when: FIGHT_PHASE,
      },
      {
        name: 'Command Ability: Ride Em All Down',
        desc:
          'You can use this command ability at the start of your charge phase. If you do so, pick 1 friendly Spiderfang Grot unit wholly within 18" of a friendly model with this command ability. You can re-roll charge rolls for that unit in that charge phase. In addition, you can re-roll hit rolls for attacks made with that unit’s Crooked Spears in the following FIGHT phase.',
        when: START_OF_CHARGE_PHASE,
      },
    ],
  },
  WEBSPINNER_SHAMAN: {
    name: 'Webspinner Shaman',
    effects: [
      {
        name: 'Touched by the Spider God',
        desc:
          'Roll a dice each time you allocate a wound or mortal wound to a Webspinner Shaman. On a 5+ that wound or mortal wound is negated.',
        when: DURING_GAME,
      },
    ],
  },
  SPIDER_RIDERS: {
    name: 'Spider Riders',
    effects: [
      {
        name: 'Spider Venom',
        desc:
          'If the unmodified hit roll for an attack made by this model’s Giant Spider’s Fangs is 6, that attack inflicts 1 mortal wound on the target and the attack sequence ends (do not make a wound or save roll).',
        when: FIGHT_PHASE,
      },
    ],
  },
  ARACHNAROK_SPIDER_WITH_FLINGER: {
    name: 'Arachnarok Spider with Flinger',
    effects: [
      {
        name: 'Spider Venom',
        desc:
          'If the unmodified hit roll for an attack made with this model’s Monstrous Fangs is 6, that attack inflicts D3 mortal wounds on the target and the attack sequence ends (do not make a wound or save roll).',
        when: FIGHT_PHASE,
      },
    ],
  },
  ARACHNAROK_SPIDER_WITH_SPIDERFANG_WARPARTY: {
    name: 'Arachnarok Spider with Spiderfang Warparty',
    effects: [
      {
        name: 'Spider Venom',
        desc:
          'If the unmodified hit roll for an attack made with this model’s Monstrous Fangs is 6, that attack inflicts D3 mortal wounds on the target and the attack sequence ends (do not make a wound or save roll).',
        when: FIGHT_PHASE,
      },
      {
        name: 'Voracious Predator',
        desc:
          'You can re-roll charge rolls for this model. In addition, roll a dice for each enemy unit that is within 1" of this model after this model makes a charge move. On a 2+ that enemy unit suffers D3 mortal wounds.',
        when: FIGHT_PHASE,
      },
      {
        name: 'Voracious Predator',
        desc: 'You can re-roll run rolls for this model.',
        when: MOVEMENT_PHASE,
      },
    ],
  },
  SKITTERSTRAND_ARACHNAROK: {
    name: 'Skitterstrand Arachnarok',
    effects: [
      {
        name: 'Spider Venom',
        desc:
          'If the unmodified hit roll for an attack made with this model’s Monstrous Fangs is 6, that attack inflicts D3 mortal wounds on the target and the attack sequence ends (do not make a wound or save roll).',
        when: FIGHT_PHASE,
      },
      {
        name: 'Ambush From Beyond',
        desc:
          'Instead of setting up the Skitterstrand Arachnarok on the battlefield, you can place it to one side and say that it is set up in ambush as a reserve unit.',
        when: START_OF_DEPLOYMENT,
      },
      {
        name: 'Ambush From Beyond',
        desc:
          'At the end of your movement phase, you can set up one or more of the reserve units that are in ambush on the battlefield more than 9" from any enemy units. Any reserve units that are in ambush that are not set up on the battlefield before the start of the fourth battle round are slain.',
        when: END_OF_MOVEMENT_PHASE,
      },
    ],
  },
  TROGGOTH_HAG: {
    name: 'Troggoth Hag',
    effects: [],
  },
  DANKHOLD_TROGGBOSS: {
    name: 'Dankhold Troggboss',
    effects: [
      {
        name: 'Reassuring Presence',
        desc:
          'Add 1 to the Bravery characteristic of friendly GLOOMSPITE GITZ units that are wholly within 18" of any friendly models with this ability.',
        when: MORALE_PHASE,
      },
      {
        name: 'Regeneration',
        desc:
          'In your PSYCHIC phase, you can roll a dice for a Dankhold Troggboss. If you do so, on a 4+ heal up to D3 wounds allocated to this unit.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Squiggly-beast Followers',
        desc:
          'At the start of the FIGHT phase, roll 1 dice for each enemy unit within 3" of any friendly models with this ability. If the roll is equal to or greater than the number of models in that enemy unit, that enemy unit suffers 1 mortal wound.',
        when: START_OF_FIGHT_PHASE,
      },
      {
        name: 'Magical Resistance',
        desc:
          'Each time a Dankhold Troggboss is affected by a spell or endless spell, you can roll a dice. If you do so, on a 4+, ignore the effects of that spell or endless spell on this model.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Command Ability: Instinctive Leader',
        desc:
          'Use this command ability at the start of the FIGHT phase. If you do so, pick 1 friendly DANKHOLD TROGGOTH PSYCHIC with this command ability. Until the end of that phase, you can re-roll hit rolls of 1 for attacks made by friendly TROGGOTH units wholly within 18" of that model when they attack.',
        when: START_OF_FIGHT_PHASE,
      },
    ],
  },
  MOLLOG: {
    name: 'Mollog',
    effects: [
      {
        name: 'Jabbertoad',
        desc:
          'If any wounds inflicted by a Jabbertoad are allocated to an enemy model and not negated, subtract 1 from hit rolls for attacks made by that model for the rest of that battle round (even if the wounds inflicted by the Jabbertoad are subsequently healed).',
        when: SHOOTING_PHASE,
      },
      {
        name: 'Magical Resistance',
        desc:
          'Each time a Mollog is affected by a spell or endless spell, you can roll a dice. If you do so, on a 4+, ignore the effects of that spell or endless spell on this model.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Reassuring Presence',
        desc:
          'Add 1 to the Bravery characteristic of friendly GLOOMSPITE GITZ units that are wholly within 18" of any friendly models with this ability.',
        when: MORALE_PHASE,
      },
      {
        name: 'Regeneration',
        desc:
          'In your PSYCHIC phase, you can roll a dice for a Mollog. If you do so, on a 4+ heal up to D3 wounds allocated to this unit.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Minion Abilities: Batsquig',
        desc:
          'At the start of your shooting phase, you can pick 1 enemy unit within 18" of this Mollog and roll a dice. On a 5+ that enemy unit suffers 1 mortal wound. This ability cannot be used if the Bat Squig minion has been removed.',
        when: START_OF_SHOOTING_PHASE,
      },
      {
        name: 'Minion Abilities: Spiteshroom',
        desc:
          'At the start of the FIGHT phase, you can pick 1 enemy unit within 3" of this Mollog and roll a dice. On a 5+ subtract 1 from hit rolls for attacks made by that unit in that FIGHT phase. This ability cannot be used if the Spiteshroom minion has been removed before the start of that FIGHT phase.',
        when: START_OF_FIGHT_PHASE,
      },
      {
        name: 'Minion Abilities: Stalagsquig',
        desc:
          'If you choose to remove this minion when you use the Loyal to the End ability, roll a dice. On a 5+ this minion is not removed, but the wound or mortal wound is still negated.',
        when: DURING_GAME,
      },
      {
        name: 'Minion Abilities: Loyal to the End',
        desc:
          'Each time a wound or mortal wound is allocated to this model and not negated, you can choose to remove 1 minion. If you do so, the wound or mortal wound is negated.',
        when: DURING_GAME,
      },
    ],
  },
  FELLWATER_TROGGOTHS: {
    name: 'Fellwater Troggoths',
    effects: [
      {
        name: 'Regeneration',
        desc:
          'In your PSYCHIC phase, you can roll a dice for Fellwater Troggoths. If you do so, on a 4+ heal up to D3 wounds allocated to this unit.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Terrible Stench',
        desc: 'Subtract 1 from hit rolls for attacks made with melee weapons that target Fellwater Troggoths.',
        when: FIGHT_PHASE,
      },
    ],
  },
  SOURBREATH_TROGGOTHS: {
    name: 'Sourbreath Troggoths',
    effects: [],
  },
  ROCKGUT_TROGGOTHS: {
    name: 'Rockgut Troggoths',
    effects: [
      {
        name: 'Regeneration',
        desc:
          'In your PSYCHIC phase, you can roll a dice for Rockgut Troggoths. If you do so, on a 4+ heal up to D3 wounds allocated to this unit.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Stony Skin',
        desc:
          'Roll a dice each time you allocate a wound or mortal wound to Rockgut Troggoths. On a 5+ that wound or mortal wound is negated.',
        when: DURING_GAME,
      },
      {
        name: "Throwin' Boulders",
        desc:
          'In your shooting phase, pick 1 enemy unit within 12" of Rockgut Troggoths and visible to it, and roll a dice. If the roll is equal to or less than the number of models in this unit, that enemy unit suffers D3 mortal wounds.',
        when: SHOOTING_PHASE,
      },
    ],
  },
  DANKHOLD_TROGGOTHS: {
    name: 'Dankhold Troggoths',
    effects: [
      {
        name: 'Reassuring Presence',
        desc:
          'Add 1 to the Bravery characteristic of friendly GLOOMSPITE GITZ units that are wholly within 12" of any friendly models with this ability.',
        when: MORALE_PHASE,
      },
      {
        name: 'Regeneration',
        desc:
          'In your PSYCHIC phase, you can roll a dice for Dankhold Troggoths. If you do so, on a 4+ heal up to D3 wounds allocated to this unit.',
        when: PSYCHIC_PHASE,
      },
      {
        name: 'Squiggly-beast Followers',
        desc:
          'At the start of the FIGHT phase, roll 1 dice for each enemy unit within 3" of any friendly models with this ability. If the roll is equal to or greater than the number of models in that enemy unit, that enemy unit suffers 1 mortal wound.',
        when: START_OF_FIGHT_PHASE,
      },
      {
        name: 'Magical Resistance',
        desc:
          'Each time a unit of Dankhold Troggoths is affected by a spell or endless spell, you can roll a dice. If you do so, on a 4+, ignore the effects of that spell or endless spell on this model.',
        when: PSYCHIC_PHASE,
      },
    ],
  },
  ALEGUZZLER_GARGANT: {
    name: 'Aleguzzler Gargant',
    effects: [
      {
        name: 'Drunken Stagger',
        desc:
          'If a charge roll for an Aleguzzler Gargant is a double, this model cannot make a charge move that phase. In addition, the players must roll off. The player who wins the roll-off picks a point on the battlefield 3" from this model. Each unit within 2" of that point suffers D3 mortal wounds.',
        when: CHARGE_PHASE,
      },
      {
        name: 'Stuff Em In Me Bag',
        desc:
          'After an Aleguzzler Gargant piles in, you can pick 1 enemy model within 3" of this model and roll a dice. If the roll is equal to or greater than double that model’s Wounds characteristic, it is slain.',
        when: CHARGE_PHASE,
      },
      {
        name: 'Timber!',
        desc:
          'If an Aleguzzler Gargant is slain, before removing the model from the battlefield the players must roll off. The player who wins the roll-off picks a point on the battlefield 3" from this model. Each unit within 2" of that point suffers D3 mortal wounds. This model is then removed from the battlefield.',
        when: DURING_GAME,
      },
    ],
  },
  BONEGRINDER_GARGANT: {
    name: 'Bonegrinder Gargant',
    effects: [],
  },
}

// Detachments
export const Detachments: IDetachments = {
  ARACHNAROK_SPIDER_CLUSTER: {
    name: 'Arachnarok Spider Cluster',
    effects: [
      {
        name: 'Hunting Brood',
        desc:
          'You can re-roll hit rolls of 1 for attacks made by a model from the Arachnarok Spider Cluster detachment while it is within 6" of another model from the same detachment.',
        when: FIGHT_PHASE,
      },
    ],
  },
  GOBBAPALOOZA: {
    name: 'Gobbapalooza',
    effects: [
      {
        name: 'Brew-fuelled Madness',
        desc:
          'Add 1 to casting and Gobbapalooza Know-wotz rolls for a model from the Gobbapalooza detachment while that model is within 8" of any other models from the same detachment.',
        when: PSYCHIC_PHASE,
      },
    ],
  },
  MOONCLAN_SKRAP: {
    name: 'Moonclan Skrap',
    effects: [
      {
        name: 'Spreading Loonacy',
        desc:
          'Do not take MORALE tests for units from the Moonclan Skrap detachment while they are affected by the light of the Bad Moon.',
        when: MORALE_PHASE,
      },
    ],
  },
  SKITTERSTRAND_NEST: {
    name: 'Skitterstrand Nest',
    effects: [
      {
        name: 'Burst from Beyond',
        desc:
          'Add 1 to charge rolls for models from the Skitterstrand Nest detachment for each model from this detachment that was set up in the same turn.',
        when: CHARGE_PHASE,
      },
    ],
  },
  SKULKMOB_HORDE: {
    name: 'Skulkmob Horde',
    effects: [
      {
        name: 'Endless Hordes',
        desc:
          'Once per battle, when you use a Bad Moon Loonshrine’s Moonclan Lair ability to successfully replace a destroyed unit from the Endless Hordes detachment, the replacement unit has all of the models from the destroyed unit instead of half.',
        when: PSYCHIC_PHASE,
      },
    ],
  },
  SPIDERFANG_STALK_TRIBE: {
    name: 'Spiderfang Stalk Tribe',
    effects: [
      {
        name: 'Power of the Spider God',
        desc:
          'You can re-roll save rolls of 1 for attacks that target a unit from a Spiderfang Stalk Tribe detachment while the target unit is wholly within 24" of a SPIDERFANG WIZARD from the same detachment.',
        when: DURING_GAME,
      },
    ],
  },
  SPIDER_RIDER_SKITTERMOB: {
    name: 'Spider Rider Skittermob',
    effects: [
      {
        name: 'Outriders of the Spider God',
        desc: 'Add 2" to the Move characteristic of units from the Spider Rider Skittermob detachment.',
        when: MOVEMENT_PHASE,
      },
    ],
  },
  SQUIGALANCHE: {
    name: 'Squigalanche',
    effects: [
      {
        name: 'Over Da Moon',
        desc:
          'If the light of the Bad Moon affects a unit from the Squigalanche detachment at the start of a FIGHT phase, that unit is eligible to fight in the FIGHT phase if it is within 6" of an enemy unit instead of 3", and can move an extra 3" when it piles in.',
        when: START_OF_FIGHT_PHASE,
      },
    ],
  },
  SQUIG_RIDER_STAMPEDE: {
    name: 'Squig Rider Stampede',
    effects: [
      {
        name: 'Madcap Momentum',
        desc:
          'You can re-roll the roll that determines the Move characteristic of units from the Squig Rider Stampede detachment.',
        when: MOVEMENT_PHASE,
      },
    ],
  },
  TROGGHERD: {
    name: 'Troggherd',
    effects: [
      {
        name: 'Eat on the Move',
        desc:
          'If the unmodified wound roll for an attack made with a melee weapon used by a model from the Troggherd detachment is 6, add 1 to the Damage characteristic for that attack.',
        when: FIGHT_PHASE,
      },
    ],
  },
}
