import { Stack, Typography, Accordion, AccordionSummary, AccordionDetails, AccordionActions, Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Animal } from '@/domain/models/Animal.model';
import pet from "@/shared/assets/pet.png";


function ShelterAnimalCard({name, breed , color , gender , type }: Animal) {
  return (
    <Accordion className="shelter-table-animal__card" sx={{ boxShadow: "none", backgroundColor: "var(--light-gray-color)", marginBottom: "12px", border: "none" }} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <img className="thumbnail-photo" src={pet} alt="Animal"/>
                <Typography>{name || "-"}</Typography>
            </Stack>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Type: {type}</Typography>
            <Typography>Breed: {breed}</Typography>
            <Typography>Gender: {gender}</Typography>
            <Typography>Color: {color}</Typography>
        </AccordionDetails>
        <AccordionActions>
            <Button 
                size="large" 
                variant="contained" 
                endIcon={<ChevronRightIcon />} 
                fullWidth 
                onClick={() => alert('details')}>
                Details
            </Button>
        </AccordionActions>
    </Accordion>
  )
}

export default ShelterAnimalCard