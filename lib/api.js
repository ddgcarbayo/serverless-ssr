import axios from 'axios';
const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

export default {
  getMovies: async (page=1, sort='popularity.desc') => {
    try {
      const url = `${ apiUrl }/discover/movie?api_key=${ apiKey }&page=${ page }&sort_by=${ sort }`;
      const { data } = await axios.get(url);
      return data.results;
    } catch (e) {
      return [];
    }
  },
  getMovie: async (id) => {
    try {
      const url = `${ apiUrl }/movie/${ id }?api_key=${ apiKey }`;
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      return {};
    }
  },
};
