import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

export const Busca = async(url, setDado) => {
    const Resposta = await api.get(url)
    setDado(Resposta.data)
};

export const BuscaPokemon = async(url, setDado) => {
    const Resposta = await api.get(url)
    setDado(Resposta.data)
}

export default api;