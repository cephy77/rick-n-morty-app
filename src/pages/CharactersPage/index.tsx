import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchCharacter } from '../../features/thunkActions/fetchCharacters';
import { CharacterInfo } from '../../components/CharacterInfo';
import style from './srtyle.module.scss';
import { CircularProgress } from '@mui/material';


export const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const { characterId } = useParams();
  const { character, isLoading } = useAppSelector(state => state.character);

  useEffect(() => {
    if (characterId) {
      dispatch(fetchCharacter(+characterId))
    }
  }, []);

  return (
    <div className={style.charactersPage}>
      {isLoading
        ? (
          <CircularProgress />
        )
        : (
          <>
            {character && (
              <CharacterInfo character={character} />
            )}
          </>
        )}
    </div>
  )
}