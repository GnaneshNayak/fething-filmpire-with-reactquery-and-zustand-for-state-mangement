import axios from 'axios';
const apiKey = import.meta.env.VITE_REACT_APP_TMDB_KEY;
const fetchResponse = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
  },
});

class APIClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  getMovies = (config) => {
    return fetchResponse.get(this.endpoint, config).then((res) => res.data);
  };
  getGenres = () => {
    return fetchResponse.get(`${this.endpoint}`).then((res) => res.data);
  };
}

export default APIClient;
