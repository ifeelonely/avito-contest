import { Select } from '@mui/material';
import { gamesAPI } from '../../services/GamesService';
import { GameInfo } from '../../components/gameCard/GameCardInt';
import styles from './GamesList.module.css';
import GameCard from '../../components/gameCard/GameCard';



const GamesList = (): JSX.Element => {
  const { data } = gamesAPI.useFetchGamesQuery('');
  console.log(data);
  return (
  <div>
    <section>
      <Select></Select>
    </section>
    <section className={styles.gamesList}>
      {data ? data.map((game: GameInfo) => <GameCard key={game.id} game={game}/>): null}
    </section>
  </div>
  )
};

export default GamesList;
