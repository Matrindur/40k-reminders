import { TTurnWhen } from './phases'
import { IEffects } from './data'
import { TGameStructure } from 'meta/turn_structure'

export interface IRelics {
  [relic: string]: {
    name: string
    effects: IEffects[]
  }
}

export interface IDetachments {
  [detachment: string]: {
    name: string
    effects: IEffects[]
  }
}

export interface IUnits {
  [unit: string]: {
    name: string
    effects: IEffects[]
  }
}

export interface IWarlordTraits {
  [warlordtrait: string]: {
    name: string
    effects: IEffects[]
  }
}

export interface ISubfactions {
  [subfaction: string]: {
    name: string
    effects: IEffects[]
  }
}

export interface ICommandTraits {
  [trait: string]: {
    [unit: string]: {
      desc: string
      when: TTurnWhen
    }
  }
}

export interface IUnit {
  name: string
  models: string
  desc: string
  tags?: string[]
}

export interface IMonster {
  name: string
  desc: string
  tags?: string[]
}
export interface IHero {
  name: string
  desc: string
  tags?: string[]
}

export interface IBattalion {
  name: string
  desc: string
}

export interface IArmy {
  Abilities: IEffects[]
  Relics: IRelics
  Detachments: IDetachments
  Game: TGameStructure
  Traits: ICommandTraits
  Units: IUnits
  WarlordTraits: IWarlordTraits
  Subfactions: ISubfactions
}
