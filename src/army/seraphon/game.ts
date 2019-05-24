import { Game, TGameStructure } from 'meta/turn_structure'
import { Units, Detachments } from './units'
import { Relics, WarlordTraits, Subfactions } from './relics'
import { processEffects } from 'utils/processEffects'

const Seraphon_Game: TGameStructure = { ...Game }

processEffects(Seraphon_Game, [Units, Detachments, Relics, WarlordTraits, Subfactions])

export default Seraphon_Game
