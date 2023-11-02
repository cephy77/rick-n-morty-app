import style from './style.module.scss';
import logo from '../../assets/IncodeLogo.png';
import githubIcon from '../../assets/GithubIcon.svg';
import twitterIcon from '../../assets/TwitterIcon.svg';
import heartIcon from '../../assets/HeartIcon.svg';

export const Footer = () => (
  <footer className={style.footer}>
    <p className={style.footerDescription}>performed as part of a test case for the company</p>
    <div className={style.footerLogoWrapper}>
      <a href="https://www.incode-group.com/" target='_blank'>
        <img
          className={style.footerLogo}
          src={logo}
          alt="Incode logo"
        />
      </a>
    </div>

    <ul className={style.footerLinks}>
      <li className={style.footerLink}>
        <a
          className={style.footerLinkItem}
          href="https://github.com/MaksLitus/demo-app"
          target='_blank'
        >
          <img
            src={githubIcon}
            alt="github link"
            className={style.footerLinkImage}
          />
        </a>
      </li>
      <li className={style.footerLink}>
        <a
          className={style.footerLinkItem}
          href="https://twitter.com/incode_group"
          target='_blank'
        >
          <img
            src={twitterIcon}
            alt="twitter link"
            className={style.footerLinkImage}
          />
        </a>
      </li>
      <li className={style.footerLink}>
        <a
          className={style.footerLinkItem}
          href=""
          target='_blank'
        >
          <img
            src={heartIcon}
            alt="heart link"
            className={style.footerLinkImage}
          />
        </a>
      </li>
    </ul>

    <p className={style.footerCopyright}>2023</p>
  </footer>
);