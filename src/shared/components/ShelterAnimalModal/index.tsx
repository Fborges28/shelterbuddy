import React from 'react'
import { Box, Modal, Typography, Button } from '@mui/material';
import { Animal } from '@/domain/models/Animal.model';
import "./styles.scss";

const modalBoxStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
};

interface ModalProps extends Animal {
    open: boolean;
    handleClose: () => void;
}

function ShelterAnimalModal({...props}: ModalProps) {
  return (
    <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="shelter-table-animal__modal"
        >
        <Box sx={modalBoxStyle} className="shelter-table-animal__modal__box">
            <Typography id="modal-modal-title" variant="h6" component="h2">Name: {props?.name}</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>Type: {props?.type}</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>Breed: {props?.breed}</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>Gender: {props?.gender}</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>Color: {props?.color}</Typography>
            <Button className="shelter-table-animal__modal__button" fullWidth size="large" variant="contained" sx={{ mt: 4 }} onClick={() => props.handleClose()}>Ok</Button>
        </Box>
    </Modal>
  )
}

export default ShelterAnimalModal