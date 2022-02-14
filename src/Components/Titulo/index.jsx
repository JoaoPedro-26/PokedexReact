import styled from "styled-components";
import pokedex from "../../assets/imgs/pokedex.png";

const StyledHeader = styled.div`
    margin: 0 auto;
`;

const Search = styled.input`
margin-left: 3%;
background: #FFFFFF;
border: 2px solid #C5D7DD;
border-radius: 4px;
height: 20px;
width: 400px;
display: none;
`;

const Filter = styled.input`
    width: 210px;
    margin-left: 20px;
    padding: 0px;
    background: #FF8F8F;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    height: 20px;
    font-size: 18px;
    text-align: center;
    display: none;
`;

const Pokedex = styled.img`
    width: 120px;
`;

const Cadastro = styled.input`
    background: #5B96EF;
    border-radius: 4px;
    width: 215px;
    margin-left: 135px;
    height: 20px;
    font-size: 18px;
    text-align: center;
    display: none;
`;

export default () => {
    return (
        <StyledHeader>
            <Pokedex src={pokedex}/>
            <Search placeholder="Pesquina nome do Pokemon ou Nº"/>
            <Filter placeholder="Filtrar pelo tipo"/>
            <Cadastro placeholder="Login/Cadastro"/>

            
        </StyledHeader>
    );
  };