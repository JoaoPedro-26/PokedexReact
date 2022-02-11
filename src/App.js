import React, {useState, useEffect} from 'react';
import './App.css';
import { Busca } from './api';
import Titulo from "./Components/Titulo";
import { GlobalStyle } from './Components/GlobalStyle';
import Infocard from './Components/Cards';
import ListaPokemons from './Components/Paginacao'

export default function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {

      Busca("?limit=30", setPokemons);

    }, []);

    return (

      <div className="App">

        <GlobalStyle/>

          <Titulo/>

            <Infocard>
               
              <ListaPokemons/>
               
            </Infocard>

      </div>

    );

}
