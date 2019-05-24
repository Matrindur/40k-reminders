import { START_OF_BATTLEROUND } from 'types/phases'
import { IEffects } from 'types/data'

// General Allegiance Abilities (always active regardless of army composition)
const Abilities: IEffects[] = [
  {
    name: 'Canticles of the Omnissiah',
    desc:
      'Pick which Canticle of the Omnissiah is in effect for the duration of the battleround. The same Canticle may not be chosen twice during the same battle. Alternatively use a D6 to choose a Canticle of the Omnissiah.',
    when: START_OF_BATTLEROUND,
  },
]

export default Abilities
