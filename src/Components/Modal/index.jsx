import React from "react";
import Box from '@mui/material/Box';
import { Modal } from "@mui/material";
import { Imagem, Number, Name, Stats, Button } from "../Body";

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
                aria-labelledby="modal-modal-title"
                aria-descrebedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Imagem src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                        <Number style={{color: "blue"}}>Nº 0{pokemon.id}</Number>
                        <Name>{pokemon.name}</Name>

                        {pokemon.stats.map(({stat}) => (
                            <Stats>
                                {stat.name}
                            </Stats>
                        ))}
                    </Box>
                </Modal>
        </div>
    );
}