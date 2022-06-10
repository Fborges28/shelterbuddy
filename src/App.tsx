import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '@/shared/components/Header';
import { Paper } from '@mui/material';
import ShelterTable from '@/shared/components/ShelterTable';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container fixed>
        <Box sx={{ bgcolor: '#fff' }}>
          <Paper elevation={0} />
          <ShelterTable></ShelterTable>
        </Box>
      </Container>
    </div>
  );
}

export default App;
