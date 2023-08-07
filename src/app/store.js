import { create } from 'zustand';

const useStore = create((set) => ({
  intialState: {
    genreID: '',
    categoryName: '',
    searchInput: '',
  },
  setGenreID: (genreID) => set((store) => ({ intialState: { genreID } })),
  setCategoryName: (categoryName) =>
    set((store) => ({ intialState: { categoryName } })),
  setSearchInput: (searchInput) =>
    set(() => ({ intialState: { searchInput } })),
}));

export default useStore;
