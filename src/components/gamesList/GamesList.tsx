import { LinearProgress, Select } from '@mui/material';
import { gamesAPI } from '../../services/GamesService';
import { GameInfo } from '../gameCard/GameCardInt';
import styles from './GamesList.module.css';
import GameCard from '../gameCard/GameCard';
import { currentGameSlice } from '../../store/reducers/CurrentGameSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const GamesList = (): JSX.Element => {
  const {
    data: gamesList,
    error,
    isFetching,
  } = gamesAPI.useFetchGamesQuery(null);
  const { setCurrentGameId } = currentGameSlice.actions;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeCurrentGameId = (newId: number) => {
    dispatch(setCurrentGameId(newId));
    navigate('/game');
  };

  return (
    <div>
      <div className={styles.gamesListInner}>
        {/* <section>
          <span>Filter: </span>
          <Select></Select>
          <span>Sort by: </span>
          <Select></Select>
        </section> */}
        <section className={styles.games}>
          {isFetching || error ? (
            <div className={styles.loadingBar}>
              {error ? (
                <h2>Oops, something went wrong!</h2>
              ) : (
                <LinearProgress />
              )}
            </div>
          ) : null}
          {gamesList
            ? gamesList.map((game: GameInfo) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onClick={changeCurrentGameId}
                />
              ))
            : null}
        </section>
      </div>
    </div>
  );
};

export default GamesList;
