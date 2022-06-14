import { Stack, Typography, Accordion, AccordionSummary, AccordionDetails, AccordionActions, Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Animal } from '@/domain/models/Animal.model';
import pet from "@/shared/assets/pet.png";

import "./styles.scss";

function ShelterAnimalCard({name, breed , color , gender , type, photo }: Animal) {
  return (
    <Accordion className="shelter-table-animal__card" sx={{ boxShadow: "none", backgroundColor: "var(--light-gray-color)", marginBottom: "12px", border: "none" }} >
        <AccordionSummary expandIcon={<ExpandMoreIcon className="shelter-table-animal__card__icon"/>} aria-controls="panel1a-content" id="panel1a-header">
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <img className="thumbnail-photo" src={photo || pet} alt="Animal"/>
                <Typography data-testid="shelter-animal-card-name" className="shelter-table-animal__card__info">{name || "-"}</Typography>
            </Stack>
        </AccordionSummary>
        <AccordionDetails>
            <Typography data-testid="shelter-animal-card-type" className="shelter-table-animal__card__info"><span className="shelter-table-animal__card__info__label">Type: </span><span>{type   || "-"}</span></Typography>
            <Typography data-testid="shelter-animal-card-breed" className="shelter-table-animal__card__info"><span className="shelter-table-animal__card__info__label">Breed: </span><span>{breed  || "-"}</span></Typography>
            <Typography data-testid="shelter-animal-card-gender" className="shelter-table-animal__card__info"><span className="shelter-table-animal__card__info__label">Gender: </span><span>{gender || "-"}</span></Typography>
            <Typography data-testid="shelter-animal-card-color" className="shelter-table-animal__card__info"><span className="shelter-table-animal__card__info__label">Color: </span><span>{color  || "-"}</span></Typography>
        </AccordionDetails>
        <AccordionActions>
            <Button 
                className="shelter-table-animal__card__button"
                size="large" 
                variant="contained" 
                endIcon={<ChevronRightIcon />} 
                fullWidth 
                onClick={() => console.log('details')}>
                Details
            </Button>
        </AccordionActions>
    </Accordion>
  )
}

export default ShelterAnimalCard