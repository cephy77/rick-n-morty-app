export interface Character {
  id: string,
  name: string,
  image: string,
  status: 'Alive' | 'Dead' | 'unknown',
  species: string,
  location: {
    name: string,
  },
  episode: {
    name: string,
  }[],
}

export interface CharacterForCvs {
  name: string,
  status: 'Alive' | 'Dead' | 'unknown',
  species: string,
  ['Last Known Location']: string,
  ['First See In']: string,
}

export interface CharacterInfo extends Character {
  gender: string
  location: {
    name: string,
    dimension: string,
  },
}

