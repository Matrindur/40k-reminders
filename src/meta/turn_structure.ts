import * as Phases from 'types/phases'

export interface ITurnAction {
  condition: string[]
  action: string
  name?: string
  hint?: string
}

export type TGameStructure = { [key in Phases.TTurnWhen]: ITurnAction[] }

export const Game: TGameStructure = {
  // General actions
  [Phases.START_OF_GAME]: [],
  [Phases.START_OF_DEPLOYMENT]: [],
  [Phases.DURING_DEPLOYMENT]: [],
  [Phases.END_OF_DEPLOYMENT]: [],
  [Phases.DURING_GAME]: [],
  
  // Any Battleround Actions
  [Phases.START_OF_BATTLEROUND]: [],
  [Phases.DURING_BATTLEROUND]: [],

  // Per-turn actions
  [Phases.TURN_ONE_START_OF_TURN]: [],
  [Phases.TURN_ONE_DURING_TURN]: [],
  // PSYCHIC
  [Phases.TURN_ONE_START_OF_PSYCHIC_PHASE]: [],
  [Phases.TURN_ONE_PSYCHIC_PHASE]: [],
  [Phases.TURN_ONE_END_OF_PSYCHIC_PHASE]: [],
  // Movement
  [Phases.TURN_ONE_START_OF_MOVEMENT_PHASE]: [],
  [Phases.TURN_ONE_MOVEMENT_PHASE]: [],
  [Phases.TURN_ONE_END_OF_MOVEMENT_PHASE]: [],
  // Shooting
  [Phases.TURN_ONE_START_OF_SHOOTING_PHASE]: [],
  [Phases.TURN_ONE_SHOOTING_PHASE]: [],
  [Phases.TURN_ONE_END_OF_SHOOTING_PHASE]: [],
  // Charging
  [Phases.TURN_ONE_START_OF_CHARGE_PHASE]: [],
  [Phases.TURN_ONE_CHARGE_PHASE]: [],
  [Phases.TURN_ONE_END_OF_CHARGE_PHASE]: [],
  // FIGHT
  [Phases.TURN_ONE_START_OF_FIGHT_PHASE]: [],
  [Phases.TURN_ONE_FIGHT_PHASE]: [],
  [Phases.TURN_ONE_END_OF_FIGHT_PHASE]: [],
  // MORALE
  [Phases.TURN_ONE_START_OF_MORALE_PHASE]: [],
  [Phases.TURN_ONE_MORALE_PHASE]: [],
  [Phases.TURN_ONE_END_OF_MORALE_PHASE]: [],
  // Turn End
  [Phases.TURN_ONE_END_OF_TURN]: [],

  [Phases.TURN_TWO_START_OF_TURN]: [],
  [Phases.TURN_TWO_DURING_TURN]: [],
  // PSYCHIC
  [Phases.TURN_TWO_START_OF_PSYCHIC_PHASE]: [],
  [Phases.TURN_TWO_PSYCHIC_PHASE]: [],
  [Phases.TURN_TWO_END_OF_PSYCHIC_PHASE]: [],
  // Movement
  [Phases.TURN_TWO_START_OF_MOVEMENT_PHASE]: [],
  [Phases.TURN_TWO_MOVEMENT_PHASE]: [],
  [Phases.TURN_TWO_END_OF_MOVEMENT_PHASE]: [],
  // Shooting
  [Phases.TURN_TWO_START_OF_SHOOTING_PHASE]: [],
  [Phases.TURN_TWO_SHOOTING_PHASE]: [],
  [Phases.TURN_TWO_END_OF_SHOOTING_PHASE]: [],
  // Charging
  [Phases.TURN_TWO_START_OF_CHARGE_PHASE]: [],
  [Phases.TURN_TWO_CHARGE_PHASE]: [],
  [Phases.TURN_TWO_END_OF_CHARGE_PHASE]: [],
  // FIGHT
  [Phases.TURN_TWO_START_OF_FIGHT_PHASE]: [],
  [Phases.TURN_TWO_FIGHT_PHASE]: [],
  [Phases.TURN_TWO_END_OF_FIGHT_PHASE]: [],
  // MORALE
  [Phases.TURN_TWO_START_OF_MORALE_PHASE]: [],
  [Phases.TURN_TWO_MORALE_PHASE]: [],
  [Phases.TURN_TWO_END_OF_MORALE_PHASE]: [],
  // Turn End
  [Phases.TURN_TWO_END_OF_TURN]: [],

  [Phases.TURN_THREE_START_OF_TURN]: [],
  [Phases.TURN_THREE_DURING_TURN]: [],
  // PSYCHIC
  [Phases.TURN_THREE_START_OF_PSYCHIC_PHASE]: [],
  [Phases.TURN_THREE_PSYCHIC_PHASE]: [],
  [Phases.TURN_THREE_END_OF_PSYCHIC_PHASE]: [],
  // Movement
  [Phases.TURN_THREE_START_OF_MOVEMENT_PHASE]: [],
  [Phases.TURN_THREE_MOVEMENT_PHASE]: [],
  [Phases.TURN_THREE_END_OF_MOVEMENT_PHASE]: [],
  // Shooting
  [Phases.TURN_THREE_START_OF_SHOOTING_PHASE]: [],
  [Phases.TURN_THREE_SHOOTING_PHASE]: [],
  [Phases.TURN_THREE_END_OF_SHOOTING_PHASE]: [],
  // Charging
  [Phases.TURN_THREE_START_OF_CHARGE_PHASE]: [],
  [Phases.TURN_THREE_CHARGE_PHASE]: [],
  [Phases.TURN_THREE_END_OF_CHARGE_PHASE]: [],
  // FIGHT
  [Phases.TURN_THREE_START_OF_FIGHT_PHASE]: [],
  [Phases.TURN_THREE_FIGHT_PHASE]: [],
  [Phases.TURN_THREE_END_OF_FIGHT_PHASE]: [],
  // MORALE
  [Phases.TURN_THREE_START_OF_MORALE_PHASE]: [],
  [Phases.TURN_THREE_MORALE_PHASE]: [],
  [Phases.TURN_THREE_END_OF_MORALE_PHASE]: [],
  // Turn End
  [Phases.TURN_THREE_END_OF_TURN]: [],

  [Phases.TURN_FOUR_START_OF_TURN]: [],
  [Phases.TURN_FOUR_DURING_TURN]: [],
  // PSYCHIC
  [Phases.TURN_FOUR_START_OF_PSYCHIC_PHASE]: [],
  [Phases.TURN_FOUR_PSYCHIC_PHASE]: [],
  [Phases.TURN_FOUR_END_OF_PSYCHIC_PHASE]: [],
  // Movement
  [Phases.TURN_FOUR_START_OF_MOVEMENT_PHASE]: [],
  [Phases.TURN_FOUR_MOVEMENT_PHASE]: [],
  [Phases.TURN_FOUR_END_OF_MOVEMENT_PHASE]: [],
  // Shooting
  [Phases.TURN_FOUR_START_OF_SHOOTING_PHASE]: [],
  [Phases.TURN_FOUR_SHOOTING_PHASE]: [],
  [Phases.TURN_FOUR_END_OF_SHOOTING_PHASE]: [],
  // Charging
  [Phases.TURN_FOUR_START_OF_CHARGE_PHASE]: [],
  [Phases.TURN_FOUR_CHARGE_PHASE]: [],
  [Phases.TURN_FOUR_END_OF_CHARGE_PHASE]: [],
  // FIGHT
  [Phases.TURN_FOUR_START_OF_FIGHT_PHASE]: [],
  [Phases.TURN_FOUR_FIGHT_PHASE]: [],
  [Phases.TURN_FOUR_END_OF_FIGHT_PHASE]: [],
  // MORALE
  [Phases.TURN_FOUR_START_OF_MORALE_PHASE]: [],
  [Phases.TURN_FOUR_MORALE_PHASE]: [],
  [Phases.TURN_FOUR_END_OF_MORALE_PHASE]: [],
  // Turn End
  [Phases.TURN_FOUR_END_OF_TURN]: [],

  [Phases.TURN_FIVE_START_OF_TURN]: [],
  [Phases.TURN_FIVE_DURING_TURN]: [],
  // PSYCHIC
  [Phases.TURN_FIVE_START_OF_PSYCHIC_PHASE]: [],
  [Phases.TURN_FIVE_PSYCHIC_PHASE]: [],
  [Phases.TURN_FIVE_END_OF_PSYCHIC_PHASE]: [],
  // Movement
  [Phases.TURN_FIVE_START_OF_MOVEMENT_PHASE]: [],
  [Phases.TURN_FIVE_MOVEMENT_PHASE]: [],
  [Phases.TURN_FIVE_END_OF_MOVEMENT_PHASE]: [],
  // Shooting
  [Phases.TURN_FIVE_START_OF_SHOOTING_PHASE]: [],
  [Phases.TURN_FIVE_SHOOTING_PHASE]: [],
  [Phases.TURN_FIVE_END_OF_SHOOTING_PHASE]: [],
  // Charging
  [Phases.TURN_FIVE_START_OF_CHARGE_PHASE]: [],
  [Phases.TURN_FIVE_CHARGE_PHASE]: [],
  [Phases.TURN_FIVE_END_OF_CHARGE_PHASE]: [],
  // FIGHT
  [Phases.TURN_FIVE_START_OF_FIGHT_PHASE]: [],
  [Phases.TURN_FIVE_FIGHT_PHASE]: [],
  [Phases.TURN_FIVE_END_OF_FIGHT_PHASE]: [],
  // MORALE
  [Phases.TURN_FIVE_START_OF_MORALE_PHASE]: [],
  [Phases.TURN_FIVE_MORALE_PHASE]: [],
  [Phases.TURN_FIVE_END_OF_MORALE_PHASE]: [],
  // Turn End
  [Phases.TURN_FIVE_END_OF_TURN]: [],

  
  // Any Turn Actions
  [Phases.START_OF_TURN]: [],
  [Phases.DURING_TURN]: [],
  // Movement
  [Phases.START_OF_MOVEMENT_PHASE]: [],
  [Phases.MOVEMENT_PHASE]: [],
  [Phases.END_OF_MOVEMENT_PHASE]: [],
  // Psychic
  [Phases.START_OF_PSYCHIC_PHASE]: [],
  [Phases.PSYCHIC_PHASE]: [],
  [Phases.END_OF_PSYCHIC_PHASE]: [],
  // Shooting
  [Phases.START_OF_SHOOTING_PHASE]: [],
  [Phases.SHOOTING_PHASE]: [],
  [Phases.END_OF_SHOOTING_PHASE]: [],
  // Charging
  [Phases.START_OF_CHARGE_PHASE]: [],
  [Phases.CHARGE_PHASE]: [],
  [Phases.END_OF_CHARGE_PHASE]: [],
  // Fight
  [Phases.START_OF_FIGHT_PHASE]: [],
  [Phases.FIGHT_PHASE]: [],
  [Phases.END_OF_FIGHT_PHASE]: [],
  // Morale
  [Phases.START_OF_MORALE_PHASE]: [],
  [Phases.MORALE_PHASE]: [],
  [Phases.END_OF_MORALE_PHASE]: [],
  // Turn End
  [Phases.END_OF_TURN]: [],
  
  // Enemy Shooting
  [Phases.START_OF_ENEMY_SHOOTING_PHASE]: [],
  [Phases.ENEMY_SHOOTING_PHASE]: [],
  [Phases.END_OF_ENEMY_SHOOTING_PHASE]: [],
  // Enemy Charging
  [Phases.START_OF_ENEMY_CHARGE_PHASE]: [],
  [Phases.ENEMY_CHARGE_PHASE]: [],
  [Phases.END_OF_ENEMY_CHARGE_PHASE]: [],
  
  // Game End
  [Phases.END_OF_GAME]: [],
}
