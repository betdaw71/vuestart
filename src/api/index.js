import axios from 'axios';

const axiosInstanse = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

export default axiosInstanse;
