export interface GameCardProps {
  game: GameInfo;
  onClick: (newId: number) => void;
}

export interface GameInfo {
  id: number;
  genre: string;
  release_date: string;
  thumbnail: string;
  title: string;
  publisher: string;
  developer: string;
  minimum_system_requirements: SystemRequirements;
}

interface SystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}