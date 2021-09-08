import React,{useEffect,useState} from 'react'
import {
    Box,
    InputGroup,
    Flex,
    Text,
    Heading,
    Input,
    SimpleGrid,
    InputLeftAddon
  } from "@chakra-ui/react";
  import { SearchIcon } from "@chakra-ui/icons";
  import {useSelector,useDispatch} from 'react-redux'
  import {fetchPokemons} from '../actions/pokemons'
  import img from '../constants'
  import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
  import Loader from "react-loader-spinner";

const Home = ({history}) => {

  const {PokemonReducer} = useSelector(state=>state);
  const [pokemons,setPokemons] = useState(PokemonReducer);
  const dispatch = useDispatch()
  const [search, setSearch] = useState('');
  useEffect(()=>{
   dispatch(fetchPokemons())
  },[])

  useEffect(()=>{
      setPokemons(PokemonReducer)
  },[PokemonReducer])

  const filteredPokemons = pokemons.filter(
    pokemon =>
    pokemon.name.toLowerCase().indexOf(search) !== -1 ||
    pokemon.name.toLowerCase().indexOf(search) !== -1,
  );

 
    return (
    <Box>
          <Flex 
            align='center'
            justify='center'
            direction='column'
            wrap="wrap"
            padding={5}
            >
                <Box p={5}>
                  <Heading>Home</Heading>
                </Box>
                <Box w='50%' >
                  <InputGroup>
                  <InputLeftAddon children={<SearchIcon/>} />
                    <Input variant="filled" value={search} onChange={e =>setSearch(e.target.value.toLowerCase().substr(0, 20))}
                       placeholder="Search by name" />
                  </InputGroup>
                </Box>
          </Flex>
          <SimpleGrid w='100%' spacing={10} minChildWidth='100px' >

          {filteredPokemons && filteredPokemons.length > 0 ? filteredPokemons.map((pokemon)=>(
          <Flex m={2}  
                    align='center'
                    justify='center'
                    wrap="wrap" 
                    onClick={()=>{
                      var parts = pokemon.url.split('/pokemon/', 2);
                      history.push('/pokemon-details/'+parts[1])
                    }}
                    _hover={{boxShadow:'lg',cursor:'pointer'}}
                    >
                    <img src={img}/>
                    <Box textAlign='center'>
                      <Text>{pokemon.name}</Text>
                    </Box>     
                    <Box textAlign='center'>
                    </Box>         
            </Flex>
               )
              ):
              <Flex 
                align='center'
                justify='center'
                wrap="wrap"
                padding={10}
                >
              <Loader
                visible={pokemons}
                type="TailSpin"
                color="#D69E2E"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
              </Flex>
              }
          </SimpleGrid>
    </Box>
    )
}

export default Home