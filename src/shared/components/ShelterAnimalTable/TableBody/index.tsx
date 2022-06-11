import ShelterTableRow from '@/shared/components/ShelterTable/TableRow';
import ShelterTableCell from '@/shared/components/ShelterTable/TableCell';
import pet from "@/shared/assets/pet.png";

export interface AnimalRow {
    name: string,
    type: string,
    breed: string,
    gender: string,
    color: string
}

export function createAnimalRow(name: string, type: string, breed: string, gender: string, color: string): AnimalRow{
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
            {rows.map((row, index) => (
                <ShelterTableRow key={row.name + index}>
                    <ShelterTableCell>
                        <img className="thumbnail-photo" src={pet} alt={row.name || row.type}/>
                    </ShelterTableCell>
                    <ShelterTableCell align="left">{row.name || placeholder}</ShelterTableCell>
                    <ShelterTableCell align="left">{row.type || placeholder}</ShelterTableCell>
                    <ShelterTableCell align="left">{row.breed || placeholder}</ShelterTableCell>
                    <ShelterTableCell align="left">{row.gender || placeholder}</ShelterTableCell>
                    <ShelterTableCell align="left">{row.color || placeholder}</ShelterTableCell>
                    <ShelterTableCell align="right">Details</ShelterTableCell>
                </ShelterTableRow>
            ))}
        </>
    )
}