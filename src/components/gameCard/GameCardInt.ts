export interface GameCardProps {
  game: GameInfo;
}

export interface GameInfo {
  id: number;
  genre: string;
  release_date: string;
  thumbnail: string;
  title: string;
  developer: string;
}