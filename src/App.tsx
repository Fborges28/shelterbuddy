import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ShelterHeader from '@/shared/components/ShelterHeader';
import { Paper } from '@mui/material';

import ShelterAnimalTable from '@/shared/components/ShelterAnimalTable';
import {createAnimalRow} from "@/shared/components/ShelterAnimalTable/TableBody";

const rows = [
    createAnimalRow("", "dog", "", "female", "white"),
    createAnimalRow("Bob", "dog", "poodle", "female", "white"),
    createAnimalRow("Bob", "dog", "poodle", "", "white")
]

function App() {
  return (
    <div className="App">
      <ShelterHeader></ShelterHeader>
      <Container fixed>
        <Box sx={{ bgcolor: '#fff' }}>
          <Paper elevation={0} />
          <ShelterAnimalTable content={rows}/>
        </Box>
      </Container>
    </div>
  );
}

export default App;
