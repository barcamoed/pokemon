import * as api from '../api'

export const fetchPokemons = ()=> async(dispatch)=>{
    try {
        const {data} = await api.fetchAllPokemons()
        const action = {type:'FETCH_ALL_POKEMONS',payload:data.results}
        console.log('DATAAAAA:',data);
        dispatch(action);
    } catch (error) {
        console.log('Error In Fech all Post APi Call',error)
    }
}