import { Link } from 'react-router-dom';
import style from './srtyle.module.scss';
import cn from 'classnames';

export const CharacterCard = () => {
  return (
    <div className={style.card}>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/361.jpeg"
        alt=""
        className={style.cardImage}
      />
      <article className={style.cardInfo}>
        <Link to={'/sql'} className={style.cardName}>
          Name
        </Link>

        <p className={style.cardStatus}>
          <span className={cn(style.cardStatusIndicator, {
            [style.cardStatusIndicatorAlive]: true,
          })} />
          <span>Unknown - Humanoid</span>
        </p>


        <div className={style.cardLocation}>
          <p className={style.cardLocationHeader}>Last known location:</p>
          <p className={style.cardLocationInfo}>Citadel of Ricks</p>
        </div>

        <div className={style.cardLocation}>
          <p className={style.cardLocationHeader}>First seen in:</p>
          <p className={style.cardLocationInfo}>Close Rick-counters of the Rick Kind</p>
        </div>
      </article>
    </div>
  )
};