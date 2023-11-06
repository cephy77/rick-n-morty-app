import { CircularProgress, Pagination } from '@mui/material';
import { CharacterCard } from '../../components/CharacterCard';
import style from './style.module.scss';
import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../features/thunkActions/fetchCharacters';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { downloadCvs } from '../../helpers/downloadCvs';

export const CharactersList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const { characters, totalPages, isLoading } = useAppSelector(state => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters({ page }));
  }, [dispatch, page]);

  const handlePageSelect = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };



  return (
    <>
      <button onClick={() => downloadCvs(characters)}>PRESS</button>
      <section className={style.charactersList}>
        {isLoading
          ? <CircularProgress />
          : characters.map(character => (
            <CharacterCard character={character} key={character.id} />
          ))}
      </section>

      <Pagination
        count={totalPages}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handlePageSelect}
        classes={{
          ul: style.pagination
        }}
      />
    </>
  )
};
