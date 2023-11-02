import {
  Route,
  Routes,
} from "react-router-dom";
import { Layout } from './pages/Layout';
import { MainPage } from './pages/MainPage';
import { CharactersPage } from './pages/CharactersPage';


function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage />} />
          <Route path=':characterId' element={<CharactersPage />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
