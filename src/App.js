import React, {useState, useEffect} from 'react';
import './App.css';
import api, { Busca } from './api';
import Titulo from "./Components/Titulo";
import { GlobalStyle } from './Components/GlobalStyle';
import { PokeCard } from './Components/PokeCard';
import Infocard from './Components/Cards';

const LIMIT = 9;

export default function App() {

  const [pokemons, setPokemons] = useState([]);

  const [typePokemons, setTypepokemons] = useState([]);

  useEffect(() => {

      Busca("?limit=30", setPokemons);

    }, []);

    return (

      <div className="App">

        <GlobalStyle/>

          <Titulo/>

            <Infocard>
               
               {pokemons.results?.map((pokemon) => (
                 <PokeCard name={pokemon.name} key={pokemon.name}/>
               ))}
               
          </Infocard>

      </div>

    );

}
