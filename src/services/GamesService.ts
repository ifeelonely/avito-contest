import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const gamesAPI = createApi({
  reducerPath: 'gamesAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://free-to-play-games-database.p.rapidapi.com',
    mode: 'cors',
  }),
  endpoints: (build) => ({
    fetchGames: build.query({
      query: () => ({
        url: '/api/games',
        headers: {
          'X-RapidAPI-Key':
            'c09a6a1f5cmsh892ae8cc12f09fdp113cc8jsna53673f99dee',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
      }),
    }),
  }),
});

// 'https://api.allorigins.win/get?url=https://www.freetogame.com'
