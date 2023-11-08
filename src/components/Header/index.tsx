import style from './style.module.scss';

import { Logo } from '../../assets/SVGcomponents/Logo';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className={style.header}>
    <Link to='/'>
      <Logo />
    </Link>
  </header>
)