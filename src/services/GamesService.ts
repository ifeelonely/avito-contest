import {
  createApi,
  fetchBaseQuery,
  retry,
} from '@reduxjs/toolkit/dist/query/react';

const baseQuery = retry(
  fetchBaseQuery({
    baseUrl: 'https://free-to-play-games-database.p.rapidapi.com',
    mode: 'cors',
  }),
  { maxRetries: 3 }
);

export const gamesAPI = createApi({
  reducerPath: 'gamesAPI',

  baseQuery: baseQuery,
  endpoints: (build) => ({
    fetchGames: build.query({
      query: (queryArgs) => ({
        url: '/api/games',
        timeout: 3000, 
        params: queryArgs,
        headers: {
          'X-RapidAPI-Key':
            'c09a6a1f5cmsh892ae8cc12f09fdp113cc8jsna53673f99dee',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
      }),
    }),
    fetchParticularGameInfo: build.query({
      query: (gameId) => ({
        url: 'api/game',
        params: {
          id: gameId,
        },
        headers: {
          'X-RapidAPI-Key':
            'c09a6a1f5cmsh892ae8cc12f09fdp113cc8jsna53673f99dee',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
      }),
    }),
  }),
});
