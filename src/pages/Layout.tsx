import { FAB } from '../components/FAB';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Heading } from '../components/Heading';
import style from './srtyle.module.scss';

interface PropsTypes {
  children: JSX.Element;
}

export const Layout = ({ children }: PropsTypes) => (
  <>
    <Header />
    <Heading />
    <main className={style.main}>
      {children}
      <div className={style.fab}>
        <FAB />
      </div>
    </main>
    <Footer />
  </>
)