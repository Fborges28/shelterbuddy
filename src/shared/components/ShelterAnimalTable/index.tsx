import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { usePagination } from '@/shared/hooks/Pagination';
import { sortAsc } from '@/shared/utils/ArrayUtils';

import ShelterAnimalHeader from '@/shared/components/ShelterAnimalTable/Header';
import animalListGetter from '@/services/ShelterService';
import RenderAnimalTable from '@/shared/components/ShelterAnimalTable/Table';

import { Animal } from '@/domain/models/Animal.model';
import { AnimalAPIModel } from '@/domain/models/api/Animal.model';
import { ShelterAnimalList } from '@/domain/models/api/ShelterAnimalList.model';
import { createAnimalRow } from './animalRow';

import "./styles.scss";

function ShelterAnimalTable({ perPage = 10 }): JSX.Element {
  const ROWS_PER_PAGE = perPage;
  const [shelterAnimalData, setShelterAnimalData] = useState<Animal[]>([]);
  const [shelterAnimalFiltered, setShelterAnimalFiltered] = useState<Animal[]>([]);
  const [totalAnimals, setTotalAnimals] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [pagination, setPagination] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { slicedContent, sliceContent, goTo } = usePagination<Animal>(shelterAnimalFiltered, ROWS_PER_PAGE);

  function resetState(){
    setShelterAnimalFiltered(shelterAnimalData);
    sliceContent(shelterAnimalData);
    setPagination(Math.ceil(shelterAnimalData.length / ROWS_PER_PAGE));
  }

  function initialState(rows: Animal[]){
    setShelterAnimalData(rows);
    setShelterAnimalFiltered(rows);
    setTotalAnimals(rows.length);
    setPagination(Math.ceil(rows.length / ROWS_PER_PAGE))
    sliceContent(rows);
  }

  function searchFoundState(result: Animal[]){
    setShelterAnimalFiltered(result);
    setPagination(Math.ceil(result.length / ROWS_PER_PAGE));
    sliceContent(result);
  }

  function searchNotFoundState(){
    sliceContent([]);
  }

  function searchByName(data: Animal[], name: string | null): Animal[]{
    if(name){
      return data.filter(animal => animal.name?.toLowerCase().includes(name.toLowerCase()));
    } else {
      return data;
    }
  }

  function handleSearch(keyword: string): void {
    const searchResult = searchByName(shelterAnimalData, keyword);
    setKeyword(keyword);
    searchUserFlow(searchResult, keyword);
  }

  function searchUserFlow(result: Animal[], keyword: string){
    if(keyword && result.length > 0){
      searchFoundState(result);
    } else if (keyword && result.length == 0){
      searchNotFoundState();
    } else {
      resetState();
    }

    changeTablePage(1);
  }
  
  function changeTablePage (page: number): void {
    setCurrentPage(page);
    goTo(page);
  }

  function handlePageChange(event: React.ChangeEvent<unknown>, page: number): void {
    changeTablePage(page);
  }

  useEffect(() => {
    const fetchData = async () => {
      console.log("passou aqui")
      const data = await animalListGetter();
      const result: ShelterAnimalList = await data.json();

      const sorted = result.Data.sort((a:any, b:any) => sortAsc(a.Name, b.Name));

      const rows = sorted.map((animal: AnimalAPIModel) => {
        return createAnimalRow({
          name: animal.Name,
          type: animal.Type.Name,
          breed: animal.Breed.Primary.Name,
          gender: animal.Sex.Name,
          color: animal.Features.PrimaryColour
        })
      })

      initialState(rows);
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    sliceContent(shelterAnimalFiltered)
  }, [currentPage])

  return (
    <Container maxWidth="xl" className="shelter-table-animal">
        <Box className="shelter-table-animal__box">
          <ShelterAnimalHeader 
            handleSearch={handleSearch}
            totalAnimals={totalAnimals}
          />
          <RenderAnimalTable 
            keyword={keyword}
            content={slicedContent} 
            handlePageChange={handlePageChange} 
            count={pagination} 
            page={currentPage}
          />
        </Box>
    </Container>
  )
}



export default ShelterAnimalTable