import { CharacterCard } from '../../components/CharacterCard';
import style from './style.module.scss';

export const CharactersList = () => {
  return (
    <section className={style.charactersList}>
      {Array.from(Array(20).keys()).map(i => (
        <CharacterCard key={i} />
      ))}
    </section>
  )
};