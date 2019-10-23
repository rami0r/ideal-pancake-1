import axios from 'axios';

export const getResults = async () => {
  const result = await axios.get('https://pokemon-scores.herokuapp.com/results')
  return result.data;
}
  

export const save = async (data) => {
  const result = await axios.post('https://pokemon-scores.herokuapp.com/results', data)
  return result.data;
}
  