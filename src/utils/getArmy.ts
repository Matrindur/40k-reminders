import * as Adeptus_Mechanicus from '../army/adeptus_mechanicus'
import * as Seraphon from '../army/seraphon'
import * as GloomspiteGitz from '../army/gloomspite'
import { TSupportedFaction, ADEPTUS_MECHANICUS, SERAPHON, GLOOMSPITE_GITZ} from 'meta/factions'
import { IArmy } from 'types/army'

export const getArmy = (factionName: TSupportedFaction): IArmy => {
  return {
	[ADEPTUS_MECHANICUS]: {...Adeptus_Mechanicus},
    [SERAPHON]: { ...Seraphon },
    [GLOOMSPITE_GITZ]: { ...GloomspiteGitz },
  }[factionName]
}
