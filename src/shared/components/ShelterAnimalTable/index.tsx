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
import { Stack, Typography } from '@mui/material';

function ShelterAnimalTable({ perPage = 4 }): JSX.Element {
  const ROWS_PER_PAGE = perPage;
  const [shelterAnimalData, setShelterAnimalData] = useState<AnimalRow[]>([]);
  const [shelterAnimalFiltered, setShelterAnimalFiltered] = useState<AnimalRow[]>([]);
  const [totalAnimals, setTotalAnimals] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [pagination, setPagination] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { slicedContent, sliceContent, goTo } = usePagination<AnimalRow>(shelterAnimalFiltered, ROWS_PER_PAGE);

  function resetState(){
    setShelterAnimalFiltered(shelterAnimalData);
    sliceContent(shelterAnimalData);
    setPagination(Math.ceil(shelterAnimalData.length / ROWS_PER_PAGE));
  }

  function initialState(rows: AnimalRow[]){
    setShelterAnimalData(rows);
    setShelterAnimalFiltered(rows);
    setTotalAnimals(rows.length);
    setPagination(Math.ceil(rows.length / ROWS_PER_PAGE))
    sliceContent(rows);
  }

  function searchFoundState(result: AnimalRow[]){
    setShelterAnimalFiltered(result);
    setPagination(Math.ceil(result.length / ROWS_PER_PAGE));
    sliceContent(result);
  }

  function searchNotFoundState(){
    sliceContent([]);
  }

  function searchByName(data: AnimalRow[], name: string | null): AnimalRow[]{
    if(name){
      return data.filter(animal => animal.name?.toLocaleLowerCase().includes(name));
    } else {
      return data;
    }
  }

  function handleSearch(keyword: string): void {
    const searchResult = searchByName(shelterAnimalData, keyword);
    setKeyword(keyword);
    searchUserFlow(searchResult, keyword);
  }

  function searchUserFlow(result: AnimalRow[], keyword: string){
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

function RenderAnimalTable({ 
  content, 
  count, 
  page, 
  keyword,
  handlePageChange 
}: { 
  content: AnimalRow[];
  count: number;
  page: number;
  keyword: string;
  handlePageChange: (event: ChangeEvent<unknown>, page: number) => void
}): JSX.Element{
  const [rows, setRows] = useState(content);
  const [pagination, setPagination] = useState(page);

  useEffect(() => {
    setPagination(page)
  }, [page])

  useEffect(() => {
    setRows(content);
  }, [content])

  return(
    <>
          <ShelterTable 
            tableHeadContent={rows.length > 0 ? TableHead() : <></>}
            tableBodyContent={TableBody(rows)} 
          />

          {
             rows.length == 0 && (
                <Stack direction="row" spacing={2} mt={8} mb={8} justifyContent="center">
                  <Typography variant="h5" style={{color: "var(--dark-gray-color)"}}>No results founds for: {keyword}</Typography>
                </Stack>
             )
          }

          {
            rows.length > 0 && (
              <Pagination 
                className="shelter-table-animal__pagination" 
                size="large"  
                count={count} 
                page={pagination} 
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