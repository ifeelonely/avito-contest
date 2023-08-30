import { LinearProgress } from '@mui/material';
import { gamesAPI } from '../../services/GamesService';
import { GameInfo } from '../gameCard/GameCardInt';
import styles from './GamesList.module.css';
import GameCard from '../gameCard/GameCard';
import { currentGameSlice } from '../../store/reducers/CurrentGameSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  filterOptionsGenre,
  filterOptionsPlatform,
  sortOptions,
} from '../../tempData/SelectOptions';
import { useState } from 'react';
import CustomSelect from '../select/CustomSelect';

const GamesList = (): JSX.Element => {
  const [sortOption, setSortOption] = useState<string | undefined>(undefined);
  const [filterGenreOption, setFilterGenreOption] = useState<
    string | undefined
  >(undefined);
  const [filterPlatformOption, setFilterPlatformOption] = useState<
    string | undefined
  >(undefined);
  const {
    data: gamesList,
    error,
    isFetching,
  } = gamesAPI.useFetchGamesQuery({
    'sort-by': sortOption,
    category: filterGenreOption,
    platform: filterPlatformOption,
  });
  const { setCurrentGameId } = currentGameSlice.actions;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeCurrentGameId = (newId: number) => {
    dispatch(setCurrentGameId(newId));
    navigate('/game');
  };

  const onSortChange = (newSort: string) => {
    setSortOption(newSort);
  };

  const onFilterGenreChange = (newFilter: string) => {
    setFilterGenreOption(newFilter);
  };

  const onFilterPlatformChange = (newFilter: string) => {
    setFilterPlatformOption(newFilter);
  };
  
  return (
    <div>
      <div className={styles.gamesListInner}>
        <div className={styles.sortAndFilter}>
          <CustomSelect
            options={sortOptions}
            value={sortOption}
            onChange={onSortChange}
            label="Sort by"
          />
          <CustomSelect
            options={filterOptionsGenre}
            value={filterGenreOption}
            onChange={onFilterGenreChange}
            label="Genre"
          />
          <CustomSelect
            options={filterOptionsPlatform}
            value={filterPlatformOption}
            onChange={onFilterPlatformChange}
            label="Platform"
          />
        </div>

        <section className={styles.games}>
          {isFetching || error ? (
            <div className={styles.absoluteCenter}>
              {error ? (
                <h2>Oops, something went wrong!</h2>
              ) : (
                <LinearProgress />
              )}
            </div>
          ) : null}
          {gamesList && !isFetching && Array.isArray(gamesList)
            ? gamesList.map((game: GameInfo) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onClick={changeCurrentGameId}
                />
              ))
            : null}

          {!Array.isArray(gamesList) && !isFetching ? (
            <h2 className={styles.absoluteCenter}>No games were found!</h2>
          ) : null}
        </section>
      </div>
    </div>
  );
};

export default GamesList;
