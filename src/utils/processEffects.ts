import { IDetachments, IRelics, IUnits, IWarlordTraits, ISubfactions } from 'types/army'
import { addToGame } from './addToGame'
import { TGameStructure } from 'meta/turn_structure'

type entries = IDetachments | IRelics | IUnits | IWarlordTraits | ISubfactions

export const processEffects = (game: TGameStructure, entries: entries[]) => {
  entries.forEach(e => processEntry(game, e))
}

const processEntry = (game: TGameStructure, obj: IDetachments | IRelics | IUnits | IWarlordTraits | ISubfactions) => {
  Object.values(obj).forEach(x => {
    x.effects.forEach(e => {
      addToGame(game, e.when, {
        condition: [x.name],
        name: e.name,
        action: e.desc,
      })
    })
  })
}
