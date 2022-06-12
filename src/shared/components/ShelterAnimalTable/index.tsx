import { ChangeEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';

import TableHead from '@/shared/components/ShelterAnimalTable/TableHead';
import TableBody, { AnimalRow, createAnimalRow } from '@/shared/components/ShelterAnimalTable/TableBody';
import ShelterTable from '@/shared/components/ShelterTable';
import ShelterAnimalHeader from '@/shared/components/ShelterAnimalTable/Header';

import { usePagination } from '@/shared/hooks/Pagination';
import animalListGetter from '@/services/ShelterService';
import { ShelterData, AnimalModel } from '@/services/shelter.model';

import "./styles.scss";

function ShelterAnimalTable({ perPage = 4 }): JSX.Element {
  const ROWS_PER_PAGE = perPage;
  const [shelterAnimalList, setShelterAnimalList] = useState<AnimalRow[]>([]);
  const [totalAnimals, setTotalAnimals] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { currentContent, goTo } = usePagination<AnimalRow>(shelterAnimalList, ROWS_PER_PAGE);

  useEffect(() => {
    const fetchData = async () => {
      const data = await animalListGetter();
      const result: ShelterData = await data.json();

      const rows = result.Data.map((animal: AnimalModel) => {
        return createAnimalRow({
          name: animal.Name,
          type: animal.Type.Name,
          breed: animal.Breed.Primary.Name,
          gender: animal.Sex.Name,
          color: animal.Features.PrimaryColour
        })
      })

      setShelterAnimalList(rows);
      setTotalAnimals(rows.length);
      setNumberOfPages(Math.ceil(rows.length / ROWS_PER_PAGE))
    };

    fetchData().catch(console.error);
  }, [])
  

  function searchByName(animalList: AnimalRow[], name: string | null): AnimalRow[]{
    if(name){
      return animalList.filter(animal => animal.name?.toLocaleLowerCase().includes(name));
    } else {
      return shelterAnimalList;
    }
  }

  function handleSearch(name: string): void {
    setShelterAnimalList(searchByName(shelterAnimalList, name));
  }
  
  function changeTablePage (page: number): void {
    setCurrentPage(page);
    goTo(page);
  }

  function handlePageChange(event: React.ChangeEvent<unknown>, page: number): void {
    changeTablePage(page);
  }

  return (
    <Container maxWidth="xl" className="shelter-table-animal">
        <Box className="shelter-table-animal__box">
          <ShelterAnimalHeader 
            handleSearch={handleSearch}
            totalAnimals={totalAnimals}
          />
          {
            renderAnimalTable({
              content: currentContent(), 
              count: numberOfPages, 
              page: currentPage, 
              handlePageChange
            })
          }
        </Box>
    </Container>
  )
}

function renderAnimalTable({ 
  content, 
  count, 
  page, 
  handlePageChange 
}: { 
  content: AnimalRow[];
  count: number;
  page: number;
  handlePageChange: (event: ChangeEvent<unknown>, page: number) => void
}){
  return(
    <>
          <ShelterTable 
            tableHeadContent={TableHead()}
            tableBodyContent={TableBody(content)} 
          />
          {
            content.length > 0 && (
              <Pagination 
                className="shelter-table-animal__pagination" 
                size="large"  
                count={count} 
                page={page} 
                variant="outlined" 
                hidePrevButton 
                hideNextButton 
                color="primary"
                onChange={handlePageChange}
              />
            )
          }
    </>
  )
}

export default ShelterAnimalTable