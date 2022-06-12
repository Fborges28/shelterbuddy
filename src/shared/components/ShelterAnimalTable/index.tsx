import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';

import TableHead from '@/shared/components/ShelterAnimalTable/TableHead';
import TableBody, { AnimalRow } from '@/shared/components/ShelterAnimalTable/TableBody';
import ShelterTable from '@/shared/components/ShelterTable';
import ShelterAnimalHeader from '@/shared/components/ShelterAnimalTable/Header';

import "./styles.scss";

type Props = {
  content: AnimalRow[];
}

function ShelterAnimalTable({content}: Props) {
  return (
    <Container maxWidth="xl" className="shelter-table-animal">
        <Box className="shelter-table-animal__box">
          <ShelterAnimalHeader />
          <ShelterTable 
            tableHeadContent={TableHead()}
            tableBodyContent={TableBody(content)} 
          />
          <Pagination 
            className="shelter-table-animal__pagination" 
            size="large"  
            count={10} 
            boundaryCount={10} 
            variant="outlined" 
            hidePrevButton 
            hideNextButton 
            color="primary"
          />
        </Box>
    </Container>
  )
}

export default ShelterAnimalTable