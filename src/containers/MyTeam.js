import React,{useEffect,useState} from 'react'
import {
    Box,
    Flex,
    Text,
    SimpleGrid,
    Heading
  } from "@chakra-ui/react";
  import { DeleteIcon } from "@chakra-ui/icons";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import img from '../constants'

const MyTeam = ({history}) => {

  const [pokemons,setPokemons] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem('MyArray')){
        setPokemons(JSON.parse(localStorage.getItem('MyArray')))
    }
  },[])



const deletePokemon=(id)=>{
    const MyArray = JSON.parse(localStorage.getItem('MyArray'))
    const index = MyArray.findIndex(obj=>obj.id==id)
    if (index > -1) {
        MyArray.splice(index, 1);
        localStorage.setItem('MyArray',JSON.stringify(MyArray));
        toast.success("Pokemon deleted from your list");
        setPokemons(MyArray)
      }

}

    return (
      <Box >
          <Flex 
            align='center'
            justify='center'
            wrap="wrap"
            padding={5}
            >
                <ToastContainer/>
                <Box p={10}>
                    <Heading size='lg'>Your Pokemon</Heading>
                </Box>
          <SimpleGrid w='100%'  spacing={10} minChildWidth='100px' >
          {pokemons && pokemons.length > 0 ? pokemons.map((pokemon)=>(
              <Flex m={2}  
              align='center'
              justify='center'
              wrap="wrap"  >
                  <Box >
                    <Box _hover={{boxShadow:'lg',cursor:'pointer'}} onClick={()=>history.push('/pokemon-details/'+pokemon.id)}>
                      <img src={img} />
                    </Box>
                    <Box textAlign='center'>
                      <Text>{pokemon.name}</Text>
                    </Box>     
                    <Box textAlign='center' _hover={{cursor:'pointer'}} onClick={()=>deletePokemon(pokemon.id)}>
                        <DeleteIcon/>
                    </Box>  
                    </Box>       
              </Flex>
               )
              ):
              'No Data'
              // <Flex 
              //   align='center'
              //   justify='center'
              //   wrap="wrap"
              //   padding={5}
              //   >
              //   <Text color='black'>No Data</Text>
              // </Flex>
              }

          </SimpleGrid>
          </Flex>
        </Box>
    )
}

export default MyTeam