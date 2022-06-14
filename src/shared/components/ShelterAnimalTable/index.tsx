import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import { usePagination } from '@/shared/hooks/Pagination';
import { compareById, sortOrder } from '@/shared/utils/ArrayUtils';

import ShelterAnimalHeader from '@/shared/components/ShelterAnimalTable/Header';
import fetchAPI from '@/services/ShelterService';
import RenderAnimalTable from '@/shared/components/ShelterAnimalTable/Table';

import { Animal } from '@/domain/models/Animal.model';
import { AnimalAPIModelWithPhoto } from '@/domain/models/api/Animal.model';
import { ShelterAnimalListAPI } from '@/domain/models/api/ShelterAnimalList.model';
import { createAnimalRow } from './animalRow';

import { Stack, Typography } from '@mui/material';
import { Order } from '@/domain/models/Order.model';

import { ShelterAnimalPhotoListAPI } from '@/domain/models/api/ShelterAnimalPhotoList.model';

import "./styles.scss";


function ShelterAnimalTable({ perPage = 10 }): JSX.Element {
  const ROWS_PER_PAGE = perPage;
  const THUMBNAIL_BASE_URL = "https://shelterbuddy-us-uat.shelterbuddy.io";

  const [shelterAnimalData, setShelterAnimalData] = useState<Animal[]>([]);
  const [shelterAnimalFiltered, setShelterAnimalFiltered] = useState<Animal[]>([]);
  const [totalAnimals, setTotalAnimals] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pagination, setPagination] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState<Order>('asc');
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

  function handleRequestSort(event: React.MouseEvent<unknown>, property: keyof Animal): void {
    setOrder(currentOrder => currentOrder === "asc" ? 'desc' : 'asc');
  };

  function searchUserFlow(result: Animal[], keyword: string){
    if(keyword && result.length > 0){
      searchFoundState(result);
    } else if (keyword && result.length === 0){
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

  function createTableRows(rows: ShelterAnimalListAPI){
    const sorted = rows.Data.sort((a:any, b:any) => sortOrder(a.Name, b.Name, "asc"));

    return sorted.map((animal: AnimalAPIModelWithPhoto) => {
      return createAnimalRow({
        name: animal.Name,
        type: animal.Type.Name,
        breed: animal.Breed.Primary.Name,
        gender: animal.Sex.Name,
        color: animal.Features.PrimaryColour,
        photo: animal.Photo ? THUMBNAIL_BASE_URL + animal.Photo.PhotoThumbnailFormat.replace("<size>-0-", "80-0-") : ""
      })
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      const animalList = await fetchAPI("https://shelterbuddy.vercel.app/assets/data/AnimalList.json");
      const animalListData: ShelterAnimalListAPI = await animalList.json();

      const animalPhotoList = await fetchAPI("https://shelterbuddy.vercel.app/assets/data/AnimalPhotoList.json");
      const animalPhotoListData: ShelterAnimalPhotoListAPI = await animalPhotoList.json();

      const relatedPhotoList = compareById(animalListData.Data, animalPhotoListData.Data);

      animalListData.Data.forEach((animal: AnimalAPIModelWithPhoto, index:number) => {
        const animalIndex = relatedPhotoList.findIndex(o => o.Animal.Id === animal.Id);
        if (animalIndex > -1) {
          (animalListData.Data[index] as AnimalAPIModelWithPhoto).Photo = relatedPhotoList[animalIndex];
        }
      })

      const rows = createTableRows(animalListData);

      initialState(rows);
      setIsLoading(false);
    };

    fetchData().catch(e => {
      setError(true);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    sliceContent(shelterAnimalFiltered)
  }, [currentPage])

  useEffect(() => {
    const sorted = shelterAnimalFiltered.sort((a:any, b:any) => sortOrder(a.name, b.name, order));
    setShelterAnimalFiltered(sorted);
    sliceContent(sorted);
  }, [order])

  return (
    <Container maxWidth="xl" className="shelter-table-animal">
        <Box className="shelter-table-animal__box" sx={{minHeight: "250px"}}>
          <ShelterAnimalHeader 
            handleSearch={handleSearch}
            totalAnimals={totalAnimals}
          />
          
          <Stack justifyContent="center" alignItems="center" sx={{minHeight: "250px", display: isLoading || error ? "flex" : "none"}}>
            {
              isLoading && (<CircularProgress />)
            }

            {
              error && (<Typography>Sorry, we had a problem. Please, reload the page!</Typography>)
            }
          </Stack>

          {
            !error && !isLoading && (
              <RenderAnimalTable 
                keyword={keyword}
                content={slicedContent} 
                handlePageChange={handlePageChange} 
                handleRequestSort={handleRequestSort}
                order={order}
                count={pagination} 
                page={currentPage}
              />
            )
          }
        </Box>
    </Container>
  )
}



export default ShelterAnimalTable