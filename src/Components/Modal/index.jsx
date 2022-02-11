import React from "react";
import Box from '@mui/material/Box';
import { Modal } from "@mui/material";
import { Imagem, Number, Name, Stats, Button } from "../Body";
import './style.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    textAlign: 'center',
};

export default function BasicModal(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const pokemon = props.pokemon;

    if (!pokemon) {
        return (
            <>

            </>
        );
    }

    return (
        <div style={{backgroundColor: "white"}}>
            <Button variant="primary" onClick={handleOpen}>Informações do Pokemon</Button>
                <Modal
                open={open}
                onClose={handleClose}
                >
                    <Box sx={style}>
                        <Imagem src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                        <Number style={{color: "blue"}}>Nº 0{pokemon.id}</Number>
                        <Name>{pokemon.name}</Name>

                    <table className="statsPrincipal">
                        <thead>
                            <tr>
                                <td>peso:  </td>
                                <td>altura:</td>
                                <td>XP Base:</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{pokemon.weight}</td>
                                <td>{pokemon.height}</td>
                                <td>{pokemon.base_experience}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h6 className="title">Status</h6>
                        <table className="Stats">
                            <thead>
                                <tr>
                                    {pokemon.stats.map(({stat, base_stat}) => (
                                        <Stats>
                                            {stat.name} : {base_stat}
                                        </Stats>
                                    ))}
                                </tr>
                            </thead>
                        </table>

                    <div style={{background: 'white'}}>
                       
                    </div>
                    </Box>
                </Modal>
        </div>
    );
}