import Carousel from 'react-material-ui-carousel';
import { useAppSelector } from '../../hooks/redux';
import { gamesAPI } from '../../services/GamesService';
import { ScreenShotsInfo } from './DetailedGameCardInt';
import styles from './DetailedGameCard.module.css';
import GameCard from '../gameCard/GameCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';
import { LinearProgress } from '@mui/material';

const DetailedGameCard = (): JSX.Element => {
  const { currentGameId } = useAppSelector((state) => state.currentGameReducer);
  const {
    data: detailedGameInfo,
    isFetching,
    error,
  } = gamesAPI.useFetchParticularGameInfoQuery(currentGameId, {
    skip: currentGameId ? false : true,
  });
  const { screenshots } = detailedGameInfo ? detailedGameInfo : [];
  const navigate = useNavigate();

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

      {currentGameId && detailedGameInfo ? (
        <section className={styles.cardInner}>
          <div className={styles.cardContainer}>
            <GameCard
              game={detailedGameInfo}
              onClick={() => {
                return;
              }}
            />
          </div>

          <div className={styles.carouselContainer}>
            <Carousel>
              {screenshots.map((screenshot: ScreenShotsInfo) => (
                <img
                  key={screenshot.id}
                  src={screenshot.image}
                  style={{ width: '100%', height: 'auto' }}
                />
              ))}
            </Carousel>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default DetailedGameCard;
