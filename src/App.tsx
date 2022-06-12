
import ShelterHeader from '@/shared/components/ShelterHeader';
import ShelterAnimalTable from '@/shared/components/ShelterAnimalTable';
import {createAnimalRow} from "@/shared/components/ShelterAnimalTable/TableBody";

const rows = [
    createAnimalRow({
      name: "Anny",
      type: "Dog",
      breed: "Domestic Short Hair",
      gender: "Female",
      color: "Blue Cream Calico"
    }),
    createAnimalRow({
      name: "Anny",
      type: "Dog",
      breed: "American Bulldog",
      gender: "Female",
      color: "Tabby"
    }),
    createAnimalRow({
      name: null,
      type: "Cat",
      breed: "Domestic Short Hair",
      gender: "Female",
      color: "Black"
    }),
    createAnimalRow({
      name: "Anny",
      type: "Dog",
      breed: "Poodle",
      gender: "Female",
      color: "Black"
    }),
    createAnimalRow({
      name: "Anny",
      type: "Dog",
      breed: "Caucasian Sheepdog / Ovtcharka",
      gender: "Female",
      color: "Black"
    }),
    createAnimalRow({
      name: "Agatha",
      type: "Cat",
      breed: "Domestic Short Hair",
      gender: "Female",
      color: "Black"
    }),
    createAnimalRow({
      name: "Aika",
      type: "Cat",
      breed: "Domestic Short Hair",
      gender: "Female",
      color: "Black"
    }),
]

function App() {
  return (
    <main id="main-content" className="App">
      <ShelterHeader></ShelterHeader>
      <ShelterAnimalTable content={rows}></ShelterAnimalTable>
    </main>
  );
}

export default App;
