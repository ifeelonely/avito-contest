import Carousel from 'react-material-ui-carousel';
import { useAppSelector } from '../../hooks/redux';
import { gamesAPI } from '../../services/GamesService';
import { ScreenShotsInfo } from './DetailedGameCardInt';
import styles from './DetailedGameCard.module.css';
import GameCard from '../gameCard/GameCard';

const DetailedGameCard = (): JSX.Element => {
  const { currentGameId } = useAppSelector((state) => state.currentGameReducer);
  const { data: detailedGameInfo } = gamesAPI.useFetchParticularGameInfoQuery(
    currentGameId,
    { skip: currentGameId ? false : true }
  );
  const { screenshots } = detailedGameInfo ? detailedGameInfo : [];

  return (
    <div className={styles.detailedGameCard}>
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
                  style={{ maxWidth: '100%', height: 'auto' }}
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
