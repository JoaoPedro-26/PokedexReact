import { useEffect, useState } from 'react';
import api from '../../api';
import "./style.css";
import { Button } from '@mui/material';
import PokeCard from '../PokeCard';

function ListaPokemons(){
  const [pokemon, setPokemon] = useState();
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');

  function requestPokemon(url){
    api
    .get(url)
    .then((response) => {
      setPrevious(response.data.previous)
      setNext(response.data.next)
      setPokemon(response.data.results)
  })}

  useEffect(() =>{
    requestPokemon("?limit=30", 'https://pokeapi.co/api/v2/pokemon')
  },[])

  if(pokemon === undefined){
    return (
      <div>carregando</div>
    )
  }
    return(
    <>
          {pokemon.map((e, index) => (
            <div key={index}>
                <PokeCard name={e.name} />
            </div>
          ))}

          <div className="Button">
            <Button variant="outlined" onClick={() => requestPokemon(previous)}>Anterior</Button>
            <Button variant="outlined" onClick={() => requestPokemon(next)}>Proximo</Button>
          </div>
    </>
  ); 
}

export default ListaPokemons;
