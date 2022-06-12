
import ShelterHeader from '@/shared/components/ShelterHeader';
import ShelterAnimalTable from '@/shared/components/ShelterAnimalTable';
import {AnimalRow, createAnimalRow} from "@/shared/components/ShelterAnimalTable/TableBody";
import { usePagination } from '@/shared/hooks/Pagination';
import { useState } from 'react';

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
    createAnimalRow({
      name: "Aika",
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
    createAnimalRow({
      name: "Aika",
      type: "Cat",
      breed: "Domestic Short Hair",
      gender: "Female",
      color: "Black"
    }),
    createAnimalRow({
      name: "Lucky",
      type: "Cat",
      breed: "Domestic Short Hair",
      gender: "Female",
      color: "Black"
    }),
    createAnimalRow({
      name: "Garfield",
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
    createAnimalRow({
      name: "Aika",
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
    createAnimalRow({
      name: "Aika",
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
    createAnimalRow({
      name: "Aika",
      type: "Cat",
      breed: "Domestic Short Hair",
      gender: "Female",
      color: "Black"
    }),
]

function App() {
  const ROWS_PER_PAGE = 10;
  const NUMBER_OF_PAGES = Math.ceil(rows.length / ROWS_PER_PAGE);

  const [currentPage, setCurrentPage] = useState(1);
  const { currentContent, goTo } = usePagination<AnimalRow>(rows, ROWS_PER_PAGE);

  const changeTablePage = (page: number) => {
    setCurrentPage(page);
    goTo(page);
  }

  function handleChange(event: React.ChangeEvent<unknown>, page: number) {
    changeTablePage(page);
  }

  return (
    <main id="main-content" className="App">
      <ShelterHeader />
      <ShelterAnimalTable 
        content={currentContent()} 
        count={NUMBER_OF_PAGES}
        page={currentPage}
        totalAnimals={rows.length}
        handlePageChange={handleChange}
      />
    </main>
  );
}

export default App;
