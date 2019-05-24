import { IDetachments, IUnits } from 'types/army'
import {
  END_OF_DEPLOYMENT,
  PSYCHIC_PHASE,
  START_OF_MOVEMENT_PHASE,
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
  DURING_GAME,
  START_OF_TURN,
  START_OF_BATTLEROUND,
} from 'types/phases'

// Command Trait Keywords
export const Tags = {
  SLANN: 'Slann',
  SKINK: 'Skink',
  SAURUS: 'Saurus',
}

// Unit Names
export const Units: IUnits = {
  BELISARIUS_CAWL: {
    name: 'Belisarius Cawl',
    effects: [
      {
        name: 'Archmagos',
        desc:
          'You can add or subtract 1 when rolling on the Canticles of the Omnissiah table while Belisarius Cawl is on the battlefield.',
        when: START_OF_BATTLEROUND,
      },
	  {
		name: 'Self-repair Mechanisms',
		desc: 
		  'Belisarius Cawl regains D3 lost wounds.',
		when: START_OF_TURN,
	  },
	  {
		name: 'Master of Machines',
		desc: 
		  'Regain D3 wounds on a friendly ADEPTUS MECHANICUS model or 1 wound on a IMPERIUM model within 3" of Belisarius Cawl. A model can not be the target of the Master of Machines ability more than once per turn.',
		when: END_OF_MOVEMENT_PHASE,
	  },
	  {
		name: 'Lord of Mars',
		desc: 
		  'Re-roll hit rolls for friendly MARS units within 6".',
		when: SHOOTING_PHASE,
	  },
    ],
  },
  TECH_PRIEST_DOMINUS: {
    name: 'Tech-Priest Dominus',
    effects: [
	  {
		name: 'Master of Machines',
		desc: 
		  'Regain D3 wounds on a friendly <FORGE WORLD> model or 1 wound on a QUESTOR MECHANICUS model within 3" of this unit. A model can not be the target of the Master of Machines ability more than once per turn.',
		when: END_OF_MOVEMENT_PHASE,
	  },
      {
        name: 'Masterwork Bionics',
        desc: 
		  'This model regains D3 lost wounds.',
		when: START_OF_TURN,
      },
      {
        name: 'Lord of the Machine Cult',
		desc: 
		  'Re-roll hit rolls of 1 for friendly <FORGE WORLD> units within 6".',
		when: SHOOTING_PHASE,
      },
    ],
  },
  TECH_PRIEST_ENGINSEER: {
    name: 'Tech-Priest Enginseer',
    effects: [
	  {
		name: 'Master of Machines',
		desc: 
		  'Regain D3 wounds on a friendly <FORGE WORLD> VEHICLE or ASTRA MILITARUM VEHICLE or 1 wound on a QUESTOR MECHANICUS model within 3" of this unit. A model can not be the target of the Master of Machines ability more than once per turn.',
		when: END_OF_MOVEMENT_PHASE,
	  },
    ],
  },
  TECH_PRIEST_MANIPULUS: {
    name: 'Tech-Priest Manipulus',
    effects: [
	  {
		name: 'Master of Machines',
		desc: 
		  'Regain D3 wounds on a friendly <FORGE WORLD> model or 1 wound on a QUESTOR MECHANICUS model within 3" of this unit. A model can not be the target of the Master of Machines ability more than once per turn.',
		when: END_OF_MOVEMENT_PHASE,
	  },
      {
        name: 'Blessed Bionics',
        desc: 
		  'This model regains D3 lost wounds.',
		when: START_OF_TURN,
      },
      {
        name: 'Galvanic Field',
		desc: 
		  'EITHER add 1 to the Move characteristic, and the Charge and Advance rolls of friendly <FORGE WORLD> units that start their move within 6" of this model until your next Movement phase OR this model cannot move for any reason and friendly <FORGE WORLD> units within 6" add 6" to their ranged weapons if they have a Range characteristic of 24" or more, otherwise add 3".',
		when: START_OF_MOVEMENT_PHASE,
      },
    ],
  },
  KATAPHRON_BREACHERS: {
    name: 'Kataphron Breachers',
    effects: [
    ],
  },
  KATAPHRON_DESTROYERS: {
    name: 'Kataphron Destroyers',
    effects: [
    ],
  },
  SKITARII_RANGERS: {
    name: 'Skitarii Rangers',
    effects: [
	  {
		name: 'Omnispex',
		desc: 
		  'Enemy units dont get benefits to their saving rolls for beeing in cover against this unit.',
		when: SHOOTING_PHASE,
	  },
	  {
		name: 'Enhanced Data-tether',
		desc: 
		  'Reroll failed Morale tests.',
		when: MORALE_PHASE,
	  },
    ],
  },
  SKITARII_VANGUARD: {
    name: 'Skitarii Vanguard',
    effects: [
	  {
		name: 'Omnispex',
		desc: 
		  'Enemy units dont get benefits to their saving rolls for beeing in cover against this unit.',
		when: SHOOTING_PHASE,
	  },
	  {
		name: 'Enhanced Data-tether',
		desc: 
		  'Reroll failed Morale tests.',
		when: MORALE_PHASE,
	  },
	  {
		name: 'Rad-saturation',
		desc: 
		  'Reduce Toughness of enemy units other than Vehicles within 1" of any Skitarii Vanguard by 1.',
		when: SHOOTING_PHASE,
	  },
	  {
		name: 'Rad-saturation',
		desc: 
		  'Reduce Toughness of enemy units other than Vehicles within 1" of any Skitarii Vanguard by 1.',
		when: FIGHT_PHASE,
	  },
    ],
  },
  TERRAX_PATTERN_TERMITE_ASSAULT_DRILL: {
    name: 'Terrax-pattern Termite Assault Drill',
    effects: [
	  {
		name: 'Subterranean Assault',
		desc: 
		  'You can set this model up underground.',
		when: DURING_DEPLOYMENT,
	  },
	  {
		name: 'Subterranean Assault',
		desc: 
		  'If this model was set up underground you can set it up more than 9" away from enemy models. Embarked units can immediately disembark.',
		when: END_OF_MOVEMENT_PHASE,
	  },
    ],
  },
  CORPUSCARII_ELECTRO_PRIEST: {
    name: 'Corpuscarii Electro-Priests',
    effects: [
	  {
		name: 'Voltagheist Field',
		desc: 
		  'When this unit completes a charge move, pick one unit you charged and roll a D6 for every model. Any rolls of 6 inflict a mortal wound on the unit.',
		when: CHARGE_PHASE,
	  },
    ],
  },
  FULGRITE_ELECTRO_PRIEST: {
    name: 'Fulgurite Electro-Priests',
    effects: [
	  {
		name: 'Voltagheist Field',
		desc: 
		  'When this unit completes a charge move, pick one unit you charged and roll a D6 for every model. Any rolls of 6 inflict a mortal wound on the unit.',
		when: CHARGE_PHASE,
	  },
	  {
		name: 'Siphoned Vigour',
		desc: 
		  'If this units wipes out an enemy unit, their invulnerable save is increased to 3+ for the rest of the game.',
		when: FIGHT_PHASE,
	  },
    ],
  },
  CYBERNETICA_DATASMITH: {
    name: 'Cybernetica Datasmith',
    effects: [
	  {
		name: 'Master of Machines',
		desc: 
		  'Regain D3 wounds on a friendly Kastelan Robot within 3" of this unit. A model can not be the target of the Master of Machines ability more than once per turn.',
		when: END_OF_MOVEMENT_PHASE,
	  },
    ],
  },
  SERVITORS: {
    name: 'Servitors',
    effects: [
    ],
  },
  SICARIAN_INFILTRATORS: {
    name: 'Sicarian Infiltrators',
    effects: [
	  {
		name: 'Infiltrators',
		desc: 
		  'You can set this unit up in concealment.',
		when: DURING_DEPLOYMENT,
	  },
	  {
		name: 'Infiltrators',
		desc: 
		  'You can set this mdoel up anywhere that is more than 9" from any enemy model.',
		when: END_OF_MOVEMENT_PHASE,
	  },
    ],
  },
  SICARIAN_RUSTSTALKERS: {
    name: 'Sicarian Ruststalkers',
    effects: [
    ],
  },
  SECUTARII_HOPLITES: {
    name: 'Secutarii Hoplites',
    effects: [
	  {
		name: 'Omnispex',
		desc: 
		  'Enemy units dont get benefits to their saving rolls for beeing in cover against this unit.',
		when: SHOOTING_PHASE,
	  },
	  {
		name: 'Enhanced Data-tether',
		desc: 
		  'Reroll failed Morale tests.',
		when: MORALE_PHASE,
	  },
	  {
		name: 'Mag-inverter Shield',
		desc: 
		  'When you make an unmodified saving throw of 6 for a model with a mag-inverter shield, the attacking unit suffers 1 mortal wound after it has made all of its attacks.',
		when: FIGHT_PHASE,
	  },
    ],
  },
  SECUTARII_PELTASTS: {
    name: 'Secutarii Peltasts',
    effects: [
	  {
		name: 'Omnispex',
		desc: 
		  'Enemy units dont get benefits to their saving rolls for beeing in cover against this unit.',
		when: SHOOTING_PHASE,
	  },
	  {
		name: 'Enhanced Data-tether',
		desc: 
		  'Reroll failed Morale tests.',
		when: MORALE_PHASE,
	  },
	  {
		name: 'Blind Barrage',
		desc: 
		  'Instead of shooting, until the start of your next Shooting phase, your opponent must subtract 1 from hit rolls for attacks with ranged weapons that target this unit.',
		when: SHOOTING_PHASE,
	  },
    ],
  },
  IRONSTRIDER_BALLISTARII: {
    name: 'Ironstrider Ballistarii',
    effects: [
	  {
		name: 'Broad Spectrum Data-tether',
		desc: 
		  '<FORGE WORLD> units within 3" add 1 to their Leadership.',
		when: MORALE_PHASE,
	  },
    ],
  },
  SYDONIAN_DRAGOONS: {
    name: 'Sydonian Dragoons',
    effects: [
	  {
		name: 'Broad Spectrum Data-tether',
		desc: 
		  '<FORGE WORLD> units within 3" add 1 to their Leadership.',
		when: MORALE_PHASE,
	  },
	  {
		name: 'Incense Cloud',
		desc: 
		  'Your opponent must subtract 1 from all hit rolls that target this unit.',
		when: SHOOTING_PHASE,
	  },
    ],
  },
  KASTELAN_ROBOTS: {
    name: 'Kastelan Robots',
    effects: [
	  {
		name: 'Battle Protocols',
		desc: 
		  'You can attempt to change the units battle protocol if there is a friendly <FORGE WORLD> Cybernetica Datasmith within 6". Roll a D6; on a 2+ select one of the three battle protocols.',
		when: START_OF_MOVEMENT_PHASE,
	  },
    ],
  },
  ONAGER_DUNECRAWLER: {
    name: 'Onager Dunecrawler',
    effects: [
	  {
		name: 'Smoke Launchers',
		desc: 
		  'Instead of shooting, until the start of your next Shooting phase, your opponent must subtract 1 from hit rolls for attacks with ranged weapons that target this unit.',
		when: SHOOTING_PHASE,
	  },
	  {
		name: 'Broad Spectrum Data-tether',
		desc: 
		  '<FORGE WORLD> units within 3" add 1 to their Leadership.',
		when: MORALE_PHASE,
	  },
    ],
  },
  KNIGHT_CRUSADER: {
    name: 'Knight Crusader',
    effects: [
	  {
		name: 'Super-heavy Walker',
		desc: 
		  'This model can Fall Back and still shoot and/or charge. It can move over enemy INFANTRY and SWARM models.',
		when: MOVEMENT_PHASE,
	  },
    ],
  },
  KNIGHT_ERRANT: {
    name: 'Knight Errant',
    effects: [
	  {
		name: 'Super-heavy Walker',
		desc: 
		  'This model can Fall Back and still shoot and/or charge. It can move over enemy INFANTRY and SWARM models.',
		when: MOVEMENT_PHASE,
	  },
    ],
  },
  KNIGHT_GALLANT: {
    name: 'Knight Gallant',
    effects: [
	  {
		name: 'Super-heavy Walker',
		desc: 
		  'This model can Fall Back and still shoot and/or charge. It can move over enemy INFANTRY and SWARM models.',
		when: MOVEMENT_PHASE,
	  },
    ],
  },
  KNIGHT_PALADIN: {
    name: 'Knight Paladin',
    effects: [
	  {
		name: 'Super-heavy Walker',
		desc: 
		  'This model can Fall Back and still shoot and/or charge. It can move over enemy INFANTRY and SWARM models.',
		when: MOVEMENT_PHASE,
	  },
    ],
  },
  KNIGHT_WARDEN: {
    name: 'Knight Warden',
    effects: [
	  {
		name: 'Super-heavy Walker',
		desc: 
		  'This model can Fall Back and still shoot and/or charge. It can move over enemy INFANTRY and SWARM models.',
		when: MOVEMENT_PHASE,
	  },
    ],
  },
}

// Detachments
export const Detachments: IDetachments = {
  CYBERNETICA_COHORT: {
    name: 'Cybernetica Cohort',
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
  SERVITOR_MANIPLE: {
    name: 'Servitor Maniple',
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
}
