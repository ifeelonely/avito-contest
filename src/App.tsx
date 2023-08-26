import { Route, Routes } from 'react-router';
import './App.css';
import GamesList from './pages/gamesList/GamesList';
import Game from './pages/game/Game';
import Layout from './components/layout/Layout';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GamesList />} />
          <Route path="game" element={<Game />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
