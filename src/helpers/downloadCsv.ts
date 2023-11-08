import { Character, CharacterForCvs } from '../types/Character';

export const downloadCsv = (characters: Character[]) => {
  if (characters.length === 0) {
    return '';
  }

  const preparedCharacters = characters.map(({
    name,
    status,
    species,
    location,
    episode
  }) => {
    const charactersCopy: CharacterForCvs = {
      name,
      status,
      species,
      ['Last Known Location']: location.name,
      ['First See In']: episode[0].name
    };
    return charactersCopy;
  })

  const headers = Object.keys(preparedCharacters[0]).map((e) => {
    return e.charAt(0).toLocaleUpperCase() + e.slice(1);
  });

  const result = [headers];

  preparedCharacters.forEach(character => {
    result.push(Object.values(character))
  });



  return result
};
