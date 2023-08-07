import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import APIClient from '../services/api';
import useStore from '../app/store';
import fetchMovieByType from './fetchMovieByType';
import { LastPage } from '@mui/icons-material';

const useMovies = () => {
  const intialState = useStore((s) => s.intialState);
  const fetchMovie = fetchMovieByType();
  // console.log(page);
  const apiClient = new APIClient(`${fetchMovie}`);

  return useInfiniteQuery({
    queryKey: ['movies', intialState],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getMovies({
        params: {
          page: pageParam,
          with_genres: intialState.genreID,
          query: intialState.searchInput,
        },
      }),
    staleTime: 60 * 60 * 24 * 1000,
    keepPreviousData: true,
    getNextPageParam: (LastPage, allPages) => {
      return LastPage.page + 1;
    },
  });
};
export default useMovies;
