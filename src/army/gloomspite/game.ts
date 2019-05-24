import { Game, TGameStructure } from 'meta/turn_structure'
import { Units, Detachments } from './units'
import { Relics, WarlordTraits, Subfactions} from './relics'
import { processEffects } from 'utils/processEffects'

const Gloomspite_Game: TGameStructure = { ...Game }

processEffects(Gloomspite_Game, [Units, Detachments, Relics, WarlordTraits, Subfactions])

export default Gloomspite_Game
