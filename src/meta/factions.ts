// Supported Faction Types
export type TAdeptus_Mechanicus = 'ADEPTUS_MECHANICUS'
export type TSeraphon = 'SERAPHON'
export type TGloomspiteGitz = 'GLOOMSPITE_GITZ'

// Exported Faction Names
export const ADEPTUS_MECHANICUS: TAdeptus_Mechanicus = 'ADEPTUS_MECHANICUS'
export const SERAPHON: TSeraphon = 'SERAPHON'
export const GLOOMSPITE_GITZ: TGloomspiteGitz = 'GLOOMSPITE_GITZ'

// Supported Factions
export type TSupportedFaction = TSeraphon | TGloomspiteGitz | TAdeptus_Mechanicus
export const SUPPORTED_FACTIONS: TSupportedFaction[] = [SERAPHON, GLOOMSPITE_GITZ, ADEPTUS_MECHANICUS]
