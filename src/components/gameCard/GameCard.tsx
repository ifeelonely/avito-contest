import { GameCardProps } from './GameCardInt';
import styles from './GameCard.module.css';

const GameCard = ({ game, onClick }: GameCardProps): JSX.Element => {
  const {
    thumbnail,
    title,
    publisher,
    release_date,
    genre,
    id,
    developer,
    minimum_system_requirements,
  } = game;
  const {
    os = '',
    storage = '',
    graphics = '',
    processor = '',
    memory = '',
  } = minimum_system_requirements ? minimum_system_requirements : {};
  return (
    <div className={styles.gameCard} onClick={() => onClick(id)}>
      <img src={thumbnail} alt={`game id: ${id}`} className={styles.gameImg} />

      <section className={styles.gameInfo}>
        <h2>{title}</h2>
        <p>Publisher: {publisher}</p>
        {minimum_system_requirements ? <p>Developer: {developer}</p> : null}
        <p>Release date: {new Date(release_date).toLocaleDateString('ru')}</p>
        <p>Genre: {genre}</p>
      </section>

      {minimum_system_requirements ? (
        <section className={styles.gameInfo}>
          <h2>System requirements:</h2>
          <p>OS: {os}</p>
          <p>Storage: {storage}</p>
          <p>Graphics: {graphics}</p>
          <p>Processor: {processor}</p>
          <p>Memory: {memory}</p>
        </section>
      ) : null}
    </div>
  );
};

export default GameCard;
