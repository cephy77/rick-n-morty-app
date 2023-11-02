import { RickAndMortyOutline } from '../../assets/SVGcomponents/RickAndMortyOutline';
import style from './style.module.scss';

export const Heading = () => (
  <div className={style.heading}>
    <RickAndMortyOutline />
    <h1>The Rick and Morty API</h1>
  </div>
)