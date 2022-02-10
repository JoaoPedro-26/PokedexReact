import styled from "styled-components";

export const Infocard = styled.div`
    height: 321px;
    width: 215px;
    background-color: white;
    display: inline-block;
    text-align: center;
    border-radius: 15px;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    &:hover{
        box-shadow: 0 0 5px #FF0000;
        transform: translate(0, -6px) rotate(2deg)
    }
`;

export const InfocardModal = styled.div`
    height: 160px;
    width: 200px;
    background-color: white;
    display: inline-block;
    text-align: center;
    border-radius: 15px;
`;

export const Favorito = styled.img`
    width: 20px;
    height: 18px;
    margin: 10px 180px;
    background-color: white;
`;

export const Imagem = styled.img`
    width: 124px;
    height: 120px;
    background-color: white;
`;

export const Number = styled.p`
    color: rgba(29, 21, 113, 0.4);
    font-size: 1rem;
    background-color: white;
`;

export const Name = styled.p`
    font-size: 1,5rem;
    font-weight: bold;
    background-color: white;
`;

export const Type = styled.p`
    font-size: 1,725rem;
    font-weight: bold;
    background-color: white;
    justify-content: space-between;
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    position: relative;
    display: inline-block;
    text-align: center;
    text-transform: capitalize;
`;

export const Stats = styled.p`
    font-size: 1rem;
    color: #000000;
    background-color: white;
`;

export const Button = styled.button`
    background-color: white;
    font-size: 0.875rem;
    cursor: pointer;
`