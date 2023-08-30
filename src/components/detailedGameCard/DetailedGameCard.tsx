import Carousel from 'react-material-ui-carousel';
import { useAppSelector } from '../../hooks/redux';
import { gamesAPI } from '../../services/GamesService';
import { ScreenShotsInfo } from './DetailedGameCardInt';
import styles from './DetailedGameCard.module.css';
import GameCard from '../gameCard/GameCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';
import { LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  getGameDetails,
  setGameDetails,
} from '../../helpers/DetailedGameSessionStorage';

const DetailedGameCard = (): JSX.Element => {
  const { currentGameId } = useAppSelector((state) => state.currentGameReducer);
  const {
    data: detailedGameInfo,
    isFetching,
    error,
  } = gamesAPI.useFetchParticularGameInfoQuery(currentGameId, {
    skip: currentGameId ? false : true,
  });
  const [loadedCounter, setLoadedCounter] = useState<number>(0);

  const navigate = useNavigate();
  const sessionData = getGameDetails();
  const { screenshots } = detailedGameInfo ? detailedGameInfo : sessionData;

  useEffect(() => {
    if (detailedGameInfo) setGameDetails(detailedGameInfo);
  }, [currentGameId, detailedGameInfo]);

  return (
    <div className={styles.detailedGameCard}>
      <ArrowBackIcon
        className={styles.arrowBack}
        sx={{ fontSize: '3rem' }}
        onClick={() => navigate('/')}
      />

      <div className={styles.userFeedback}>
        {isFetching && !error ? <LinearProgress /> : null}
        {error ? <h2>Oops, something went wrong!</h2> : null}
      </div>

      {!Array.isArray(sessionData) || detailedGameInfo ? (
        <section className={styles.cardInner}>
          <div className={styles.cardContainer}>
            <GameCard
              game={sessionData || detailedGameInfo}
              onClick={() => {
                return;
              }}
            />
          </div>

          <div className={styles.carouselContainer}>
            <Carousel
              className={`${
                loadedCounter > 0 && screenshots.length ? '' : styles.hide
              }`}
            >
              {screenshots.map((screenshot: ScreenShotsInfo) => (
                <img
                  onLoad={() => setLoadedCounter(loadedCounter + 1)}
                  key={screenshot.id}
                  src={screenshot.image}
                  style={{ width: '100%', height: 'auto' }}
                />
              ))}
            </Carousel>

            {loadedCounter > 0 || !screenshots.length ? null : (
              <div className={styles.loadingScreens}>
                <div>
                  <h2>Loading screenshots...</h2>
                  <LinearProgress />
                </div>
              </div>
            )}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default DetailedGameCard;
