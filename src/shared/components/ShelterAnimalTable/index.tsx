import React from 'react'

import TableHead from '@/shared/components/ShelterAnimalTable/TableHead';
import TableBody, { AnimalRow } from '@/shared/components/ShelterAnimalTable/TableBody';
import ShelterTable from '@/shared/components/ShelterTable';

type ShelterAnimalTable = {
    content: AnimalRow[];
}


function ShelterAnimalTable({content}: ShelterAnimalTable) {
  return (
    <ShelterTable 
        tableHeadContent={TableHead()}
        tableBodyContent={TableBody(content)}
    ></ShelterTable>
  )
}

export default ShelterAnimalTable