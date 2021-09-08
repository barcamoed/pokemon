export default (state=[],action) =>{
    switch(action.type){
      case 'FETCH_ALL_POKEMONS':
          return action.payload;
      default:
          return state;   
    }
     
}