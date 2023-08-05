import axios from 'axios';

const page = 1;
const tmdbApiKEY = import.meta.env.VITE_REACT_APP_TMDB_KEY;

const fetchAxiosResponse = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: tmdbApiKEY,
  },
});

class APIClient {
  getAll = () => {
    return fetchAxiosResponse
      .get(`/movie/popular?page=${page}`)
      .then((res) => res.data);
  };
}

export default APIClient;
