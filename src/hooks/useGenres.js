import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api';

const apiClient = new APIClient(`genre/movie/list`);

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getGenres,
  });

export default useGenres;
