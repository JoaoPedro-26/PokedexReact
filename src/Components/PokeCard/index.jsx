import React ,{useState, useEffect} from "react";
import { Busca } from "../../api";
import { Infocard, Favorito, Number, Name, Type, Imagem } from "../Body";
import Favorite from "../../assets/imgs/Favorite.png"
import Pokecolors from "../PokeColors";
import BasicModal from "../Modal";


export const PokeCard =(props) => {
    const [pokemon, setPokemon] = useState();

    const [modalVisible, setmodalVisible] = useState(false);

    useEffect(() => {
        Busca(props.name, setPokemon)
    })

    if (!pokemon) {
        return (
            <>
                <p>Carregando {props.name}</p>
            </>
        );
    }

    return (
        <>
            <Infocard>
                <BasicModal pokemon={pokemon}/>
                <Favorito src={Favorite}/>
                <Imagem src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                <Number>Nº 0{pokemon.id}</Number>
                <Name>{pokemon.name}</Name>
                {pokemon.types.map(({type}) => (    
                    <Type style={{ backgroundColor: Pokecolors[type.name]}}>
                        {" "}
                        {type.name}
                        {" "}
                    </Type>
                ))}
            </Infocard>
        </>
    );
}