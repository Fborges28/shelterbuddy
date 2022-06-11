import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ShelterHeader from '@/shared/components/ShelterHeader';
import { Paper } from '@mui/material';

import ShelterAnimalTable from '@/shared/components/ShelterAnimalTable';
import {createAnimalRow} from "@/shared/components/ShelterAnimalTable/TableBody";

const rows = [
    createAnimalRow({
      name: "",
      type: "dog",
      breed: "",
      gender: "female",
      color: "white"
    }),
    createAnimalRow({
      name: "Anny",
      type: "dog",
      breed: "poodle",
      gender: "female",
      color: "black"
    }),
    createAnimalRow({
      name: null,
      type: "dog",
      breed: "",
      gender: "",
      color: "black"
    }),
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
