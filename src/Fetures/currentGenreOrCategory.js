import { createSlice } from '@reduxjs/toolkit';

const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchInput: '',
  },
  reducers: {
    selectGenreOrCategory: (state, { payload }) => {
      state.genreIdOrCategoryName = payload;
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;
export default genreOrCategory.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const genreOrCategory = createSlice({
//   name: 'GenreOrCategory',
//   initialState: {
//     genreIdOrCategoryName: '',
//     page: 1,
//     searchQuery: '',
//   },
//   reducers: {
//     selectGenreOrCategory: (state, { payload }) => {
//       state.genreIdOrCategoryName = payload;
//     },
//   },
// });

// export const { selectGenreOrCategory } = genreOrCategory.actions;
// export default genreOrCategory.reducer;
