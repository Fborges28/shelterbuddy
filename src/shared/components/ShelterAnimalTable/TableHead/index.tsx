import ShelterTableCell from '@/shared/components/ShelterTable/TableCell';

export default function ShelterAnimalTableHead(){
    return (
        <>
            <ShelterTableCell align="right"></ShelterTableCell>
            <ShelterTableCell>Name</ShelterTableCell>
            <ShelterTableCell align="right">Type</ShelterTableCell>
            <ShelterTableCell align="right">Breed</ShelterTableCell>
            <ShelterTableCell align="right">Gender</ShelterTableCell>
            <ShelterTableCell align="right">Color</ShelterTableCell>
            <ShelterTableCell align="right"></ShelterTableCell>
        </>
    )
}