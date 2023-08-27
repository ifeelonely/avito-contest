import { GameCardProps } from './GameCardInt';
import styles from './GameCard.module.css';

const GameCard = ({ game }: GameCardProps): JSX.Element => {
  const { thumbnail, title, developer, release_date, genre, id } = game;
  return (
    <div className={styles.gameCard}>
      <img src={thumbnail} alt={`game id: ${id}`} className={styles.gameImg} />
      <section className={styles.gameInfo}>
        <h2>{title}</h2>
        <p>Developer: {developer}</p>
        <p>Release date: {new Date(release_date).toLocaleDateString('ru')}</p>
        <p>Genre: {genre}</p>
      </section>
    </div>
  );
};

export default GameCard;
