import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ShelterTableRow from '@/shared/components/ShelterTable/TableRow';
import ShelterTableCell from '@/shared/components/ShelterTable/TableCell';
import pet from "@/shared/assets/pet.png";

export interface AnimalRow {
    name: string   | null,
    type: string   | null,
    breed: string  | null,
    gender: string | null,
    color: string  | null
}

export function createAnimalRow({name, type, breed, gender, color}: AnimalRow): AnimalRow{
    return {
        name, 
        type, 
        breed, 
        gender, 
        color
    }
}

export default function ShelterAnimalTableBody(rows: AnimalRow[], placeholder = "-"){
    return(
        <>
            {rows.map((row, index) => {
                const animalIdentifier = (row.name || row.type || "animal");

                return (
                    <ShelterTableRow className="shelter-table-animal__row" key={animalIdentifier + index}>
                        <ShelterTableCell>
                            <img className="thumbnail-photo" src={pet} alt={animalIdentifier}/>
                        </ShelterTableCell>
                        <ShelterTableCell align="left">{row.name || placeholder}</ShelterTableCell>
                        <ShelterTableCell align="left">{row.type || placeholder}</ShelterTableCell>
                        <ShelterTableCell align="left">{row.breed || placeholder}</ShelterTableCell>
                        <ShelterTableCell align="left">{row.gender || placeholder}</ShelterTableCell>
                        <ShelterTableCell align="left">{row.color || placeholder}</ShelterTableCell>
                        <ShelterTableCell align="right">
                            <Button className="" endIcon={<ChevronRightIcon />}>
                                Details
                            </Button>
                        </ShelterTableCell>
                    </ShelterTableRow>
                )
            })}
        </>
    )
}