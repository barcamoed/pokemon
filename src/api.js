import axios from 'axios'

const url = "https://pokeapi.co/api/v2/pokemon"

export const fetchAllPokemons = () => axios.get(url+'?limit=1000')


export const getPokemonDetails = (id) => axios.get(url+'/'+id)

