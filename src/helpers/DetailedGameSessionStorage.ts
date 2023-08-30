import { GameInfo } from '../components/gameCard/GameCardInt';

export const setGameDetails = (details: GameInfo) => {
  sessionStorage.setItem('curGame', JSON.stringify(details));
};

export const getGameDetails = () => {
  const sessionData = sessionStorage.getItem('curGame');
  return sessionData ? JSON.parse(sessionData) : null;
};
