import * as TodoRespository from '../repositories/TodoRespository'

export const getTodos = async () => {
  const result = await TodoRespository.get();
  return result;
}
