import React,{useEffect,useState,useMemo} from 'react'
import {
    Box,
    Flex,
    Stack,
    Text,
    Button,
    Heading,
    Tooltip
  } from "@chakra-ui/react";
  import { AddIcon } from "@chakra-ui/icons";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {getPokemonDetails} from '../api'
  import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
  import Loader from "react-loader-spinner";


const PokemonDetails = (props,{history}) => {

  const [pokemonDetails,setPokemonDetails] = useState(null);

  useEffect(()=>{
    if(props.match.params.id){
        getDetails()
        console.log('')
    }
  },[])


  const getDetails=async()=>{
     const {data} = await getPokemonDetails(props.match.params.id)
     setPokemonDetails(data);
  }

  const addToMyList=(selectedId,name)=>{
      if(!localStorage.getItem('MyArray')){
      let array = [];
      array.push({id:props.match.params.id,name:name});
      localStorage.setItem('MyArray',JSON.stringify(array))
    }
    else if(localStorage.getItem('MyArray')){
        let MyArray = JSON.parse(localStorage.getItem('MyArray'))
        const found = MyArray.find(obj => obj.id == selectedId);
        if(found){
            toast.info("This pokemon is already in your list")
        }
        else if(!found){
            if(MyArray.length<6){
            MyArray.push({id:props.match.params.id,name:name});
            localStorage.setItem('MyArray',JSON.stringify(MyArray))
            toast.success("Pokemon added in your list");
        }
        else{
            toast.error("You cannot add more than 6");
        }
        }
    }
  }


    return (

          <Flex 
            align='center'
            justify='center'
            wrap="wrap"
            padding={5}
            >
                <ToastContainer/>

                <Box bg='gray.200' m='10' p={2} borderRadius={10}>
                    <Stack isInline spacing={10} align='center' justify='center'>
                        {pokemonDetails ? Object.entries(pokemonDetails.sprites).slice(0,4).map((key)=>
                            <Box>
                                <img src={key[1]}/>
                            </Box>
                        ):
                        <Flex 
                            align='center'
                            justify='center'
                            wrap="wrap"
                            padding={10}
                        >
                        <Loader
                            visible={true}
                            type="TailSpin"
                            color="#D69E2E"
                            height={100}
                            width={100}
                            timeout={3000} //3 secs
                        />
                        </Flex>
                        } 
                        <Button bg='#D69E2E' onClick={()=>addToMyList(pokemonDetails.id,pokemonDetails.name)}> 
                            <Tooltip label="Add to My Team" aria-label="A tooltip">
                                <AddIcon/>
                            </Tooltip>      
                         </Button>
                    </Stack>
                         
                </Box>

                <Box w='80%' bg='#D69E2E' m='10' color='white' >
                    <Stack isInline spacing={10} p={5}  align='center' justify='space-between'>
                        <Box align='center'>
                            <Heading as="h4" size="md">
                                Name
                            </Heading>
                            <Text>{pokemonDetails && pokemonDetails.name} </Text>
                        </Box>
                        <Box align='center'>
                            <Heading as="h4" size="md">
                                Weight
                            </Heading>
                            <Text>{pokemonDetails && pokemonDetails.weight} </Text>
                        </Box>
                        <Box align='center'>
                            <Heading as="h4" size="md">
                                Height
                            </Heading>
                             <Text>{pokemonDetails && pokemonDetails.height}</Text>
                        </Box>
                    </Stack>
                </Box>

                <Box w='80%' bg='#D69E2E' color='white' m='10' >
                    <Stack isInline spacing={10} p={5}  align='center' justify='space-between'>
                        <Box align='center'>
                            <Heading as="h4" size="md">
                                Moves
                            </Heading>
                            <Text>{pokemonDetails && pokemonDetails.moves.length} </Text>
                        </Box>
                        <Box align='center'>
                            <Heading as="h4" size="md">
                                Base Experience
                            </Heading>
                            <Text>{pokemonDetails && pokemonDetails.base_experience}</Text>
                        </Box>
                        <Box align='center'>
                            <Heading as="h4" size="md">
                                Total Abilities
                            </Heading>
                             <Text>{pokemonDetails && pokemonDetails.abilities.length}</Text>
                        </Box>
                    </Stack>
                </Box>

          </Flex>
          
    )
}

export default PokemonDetails