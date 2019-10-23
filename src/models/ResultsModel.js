import * as ResultsService from '../service/ResultsService';

export const getAll = async () => {
  const results = await ResultsService.getResults();
  return formatResults(results);
}

export const save = async (name, score) => {
  const result = mountResult(name, score)
  await ResultsService.save(result);
  return await getAll();
}

export const mountResult = (name, score) => {
  return {
    name: name,
    score: score
  }
}

const formatResults = (results) => {
  const items = results.splice(-3).reverse();
  return items.map(item => {
    return (
      { name: item.name, score: item.score }
    )
  })
}
