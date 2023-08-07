import useStore from '../app/store';

const fetchMovieByType = () => {
  const { genreID, categoryName, searchInput } = useStore((s) => s.intialState);

  if (searchInput) {
    return 'search/movie';
  }

  if (genreID && typeof genreID === 'number') {
    return '/discover/movie';
  }
  if (categoryName && typeof categoryName === 'string') {
    return `/movie/${categoryName}`;
  }
  return '/movie/popular';
};

export default fetchMovieByType;
