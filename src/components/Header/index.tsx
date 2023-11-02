import style from './style.module.scss';

import { Logo } from '../../assets/SVGcomponents/Logo';

export const Header = () => (
  <header className={style.header}>
    <Logo />
  </header>
)