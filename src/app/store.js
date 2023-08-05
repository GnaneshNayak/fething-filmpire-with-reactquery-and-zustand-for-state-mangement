import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from '../Fetures/currentGenreOrCategory';

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    selectGenreOrCategoryStore: genreOrCategoryReducer,
  },
  middleware: (getDefault) => getDefault().concat(tmdbApi.middleware),
});

// import { configureStore } from '@reduxjs/toolkit';
// import { tmdbApi } from '../services/TMDB';
// import genreOrCategoryReducer from '../Fetures/currentGenreOrCategory';

// export const store = configureStore({
//   reducer: {
//     [tmdbApi.reducerPath]: tmdbApi.reducer,
//     selectGenreOrCategoryStore: genreOrCategoryReducer,
//   },
//   middleware: (getDefault) => getDefault().concat(tmdbApi.middleware),
// });
