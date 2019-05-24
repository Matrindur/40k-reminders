import { Game, TGameStructure } from 'meta/turn_structure'
import { Units, Detachments } from './units'
import { Relics, WarlordTraits, Subfactions } from './relics'
import { processEffects } from 'utils/processEffects'

const Adeptus_Game: TGameStructure = { ...Game }

processEffects(Adeptus_Game, [Units, Detachments, Relics, WarlordTraits, Subfactions])

export default Adeptus_Game
