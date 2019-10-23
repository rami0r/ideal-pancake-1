import * as PokemonService from '../service/PokemonService';

import chunk from 'lodash.chunk';

const NUMBER_OF_QUESTIONS = 5;

export const getPokemons = async () => {
  const pokemons = await PokemonService.get();
  const consult = await mountQuiz(pokemons.results);
  return consult;
}

export const getPokemon = async (url) => {
  const pokemon = await PokemonService.getById(url);
  return pokemon;
}

const mountQuiz = async results => await Promise.all(separateQuestion(results).map((pokemons) => mountQuestion(pokemons)));

const mountQuestion = async pokemons => {
  return {
    rightAnswer: await pickAnswer(pokemons),
    options: pokemons.map(item => item.name)
  }
}

const pickAnswer = async pokemons => {
  const index = Math.floor(Math.random() * pokemons.length);
  const pokemon = await getPokemon(pokemons[index].url);
  return mountRightAnswer(pokemon, pokemons[index].name);
}

const separateQuestion = results => chunk(results, NUMBER_OF_QUESTIONS);

const mountRightAnswer = (pokemon, name) => {
  return {
    name: name,
    img: isThatPikachu(name) || pokemon.sprites.front_default
  }
}
export const isLastIndex = (current, total) => current < total - 1

const isThatPikachu = name => name === 'pikachu' ? PIKAPERICLES.img : false

const PIKAPERICLES = {
  name: 'Pikapericles',
  img: 'https://i.imgur.com/aKeLU4h.png'
}
