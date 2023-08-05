import APIClient from '../../services/api';
import { useQuery } from '@tanstack/react-query';
const apiClinet = new APIClient();

const useMovies = () =>
  useQuery({
    queryKey: ['puplar movies'],
    queryFn: apiClinet.getAll,
  });

export default useMovies;
