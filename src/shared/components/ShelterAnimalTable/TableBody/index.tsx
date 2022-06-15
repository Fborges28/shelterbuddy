import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ShelterTableRow from '@/shared/components/ShelterTable/TableRow';
import ShelterTableCell from '@/shared/components/ShelterTable/TableCell';
import pet from "@/shared/assets/pet.png";
import { Animal } from '@/domain/models/Animal.model';

import "./styles.scss";
import { useState } from 'react';


export default function ShelterAnimalTableBody({
    rows, 
    handleCurrentDetail, 
    placeholder = "-"} : 
    { 
        rows:  Animal[], 
        handleCurrentDetail: (animal: Animal) => void, 
        placeholder: string 
    }){
    return(
        <>
            {rows.map((row, index) => {
                const animalIdentifier = (row.name || row.type || "animal");

                return (
                    <ShelterTableRow className="shelter-table-animal__row" key={animalIdentifier + index}>
                        <ShelterTableCell style={{width: "10%"}}>
                            <img className="thumbnail-photo" src={row.photo || pet} alt={animalIdentifier}/>
                        </ShelterTableCell>

                        <ShelterTableCell align="left" style={{width: "10%"}}>
                            {row.name || placeholder}
                        </ShelterTableCell>

                        <ShelterTableCell align="left" style={{width: "10%"}}>
                            {row.type || placeholder}
                        </ShelterTableCell>

                        <ShelterTableCell align="left" style={{width: "25%"}}>
                            {row.breed || placeholder}
                        </ShelterTableCell>

                        <ShelterTableCell align="left" style={{width: "10%"}}>
                            {row.gender || placeholder}
                        </ShelterTableCell>

                        <ShelterTableCell align="left" style={{width: "20%"}}>
                            {row.color || placeholder}
                        </ShelterTableCell>

                        <ShelterTableCell align="right" style={{width: "15%"}}>
                            <Button className="shelter-table-animal__button-detail" endIcon={<ChevronRightIcon />} onClick={() => handleCurrentDetail(row)}>
                                Details
                            </Button>
                        </ShelterTableCell>
                    </ShelterTableRow>
                )
            })}

            
        </>
    )
}