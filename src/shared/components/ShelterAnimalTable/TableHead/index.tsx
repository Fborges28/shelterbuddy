import ShelterTableCell from '@/shared/components/ShelterTable/TableCell';

export default function ShelterAnimalTableHead(){
    return (
        <>
            <ShelterTableCell align="left"></ShelterTableCell>
            <ShelterTableCell>Name</ShelterTableCell>
            <ShelterTableCell align="left">Type</ShelterTableCell>
            <ShelterTableCell align="left">Breed</ShelterTableCell>
            <ShelterTableCell align="left">Gender</ShelterTableCell>
            <ShelterTableCell align="left">Color</ShelterTableCell>
            <ShelterTableCell align="right"></ShelterTableCell>
        </>
    )
}