import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchCharacter } from '../../features/thunkActions/fetchCharacters';

export const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const { characterId } = useParams();
  const { character, isLoading } = useAppSelector(state => state.character);

  useEffect(() => {
    if (characterId) {
      dispatch(fetchCharacter(+characterId));
    }
  }, []);

  return (
    <div>
      {isLoading && 'loaddddddddd'}
      {character && (
        <>
          <img src={character.image} alt="" />
          <p>{character.name}</p>
          <p>oh jeez jeez</p>
        </>
      )}
    </div>
  )
}