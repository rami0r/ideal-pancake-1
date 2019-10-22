import * as TodoRespository from '../repositories/TodoRespository'

export const getTodos = async () => await TodoRespository.get();

export const add = async (item) => {
  const result = await TodoRespository.add(mountItem(item));
  return result;
}

export const destroy = async (id) => {
  return await  TodoRespository.destroy(id);
}

const mountItem = title => ({ title: title});
