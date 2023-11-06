import { Character, CharacterForCvs } from '../types/Character';

export const downloadCvs = (characters: Character[]) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  }).join(', ') + '\n';

  let result = headers;

  preparedCharacters.forEach(character => {
    result += Object.values(character).join(', ') + '\n';
  });



  console.log(result);
};
