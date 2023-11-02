import { CharactersList } from '../../components/CharactersList';
import style from './srtyle.module.scss';

export const MainPage = () => {
  return (
    <div className={style.mainPage}>
      <CharactersList />
    </div>
  )
}