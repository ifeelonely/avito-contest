import { Select } from '@mui/material';
import { gamesAPI } from '../../services/GamesService';
import { GameInfo } from '../../components/gameCard/GameCardInt';
import styles from './GamesList.module.css';
import GameCard from '../../components/gameCard/GameCard';

const GamesList = (): JSX.Element => {
  const { data, error, isFetching } = gamesAPI.useFetchGamesQuery(null);
  console.log(isFetching, error);
  return (
    <div>
      <div className={styles.gamesListInner}>
        <section>
          <span>Filter: </span>
          <Select></Select>
          <span>Sort by: </span>
          <Select></Select>
        </section>
        <section className={styles.games}>
          {data
            ? data.map((game: GameInfo) => (
                <GameCard key={game.id} game={game} />
              ))
            : null}
        </section>
      </div>
    </div>
  );
};

export default GamesList;
