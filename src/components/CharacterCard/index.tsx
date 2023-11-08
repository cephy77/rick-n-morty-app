import { Link } from 'react-router-dom';
import style from './srtyle.module.scss';
import cn from 'classnames';
import { Character } from '../../types/Character';

interface PropsTypes {
  character: Character
}

export const CharacterCard = ({ character }: PropsTypes) => {


  return (
    <div className={style.card}>
      <img
        src={character.image}
        alt={character.name}
        className={style.cardImage}
      />
      <article className={style.cardInfo}>
        <Link to={`/${character.id}`} className={style.cardName}>
          {character.name}
        </Link>

        <p className={style.cardStatus}>
          <span className={cn(style.cardStatusIndicator, {
            [style[`cardStatusIndicator${character.status}`]]: character.status !== 'unknown',
          })} />
          <span>{character.status} - {character.species}</span>
        </p>


        <div className={style.cardLocation}>
          <p className={style.cardLocationHeader}>Last known location:</p>
          <p className={style.cardLocationInfo}>{character.location.name}</p>
        </div>

        <div className={style.cardLocation}>
          <p className={style.cardLocationHeader}>First seen in:</p>
          <p className={style.cardLocationInfo}>{character.episode[0].name}</p>
        </div>
      </article>
    </div>
  )
};