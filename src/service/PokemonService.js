import axios from 'axios';

export const get = async () => {
  const result = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=25');
  return result.data;
};


export const getById = async (url) => {
  const result = await axios.get(url)
  return result.data;
}
