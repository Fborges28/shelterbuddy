import { ChangeEvent, useEffect, useState } from 'react';
import { Stack, Typography, Grid, Pagination, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import ShelterAnimalTableHead from '@/shared/components/ShelterAnimalTable/TableHead';
import TableBody from '@/shared/components/ShelterAnimalTable/TableBody';
import ShelterTable from '@/shared/components/ShelterTable';
import ShelterCard from '@/shared/components/ShelterCard';
import { Animal } from '@/domain/models/Animal.model';

import { Order } from '@/domain/models/Order.model';

export default function RenderAnimalTable({ 
    content, 
    count, 
    page, 
    keyword,
    order,
    handlePageChange,
    handleRequestSort
}: { 
    content: Animal[];
    count: number;
    page: number;
    keyword: string;
    order: Order;
    handlePageChange: (event: ChangeEvent<unknown>, page: number) => void,
    handleRequestSort: (event: React.MouseEvent<unknown>,property: keyof Animal) => void
}): JSX.Element{
    const [animalRows, setAnimalRows] = useState(content);
    const [pagination, setPagination] = useState(page);
    

    useEffect(() => {
        setPagination(page)
    }, [page])

    useEffect(() => {
        setAnimalRows(content);
    }, [content])


    return(
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {
                animalRows.length == 0 && (
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={2} mt={8} mb={8} sx={{minHeight: "250px"}} justifyContent="center" alignItems="center">
                            <Typography variant="h5" style={{color: "var(--dark-gray-color)"}}>No results founds for: {keyword}</Typography>
                        </Stack>
                    </Grid>
                )
            }
            
            {
                animalRows.length > 0 && (
                    <>
                        <Grid item lg={12} sx={{ display: { xs: "none", lg: "block" }}}>
                            <ShelterTable 
                                tableHeadContent={animalRows.length > 0 ? 
                                    <ShelterAnimalTableHead 
                                        order={order}
                                        orderBy={"name"}
                                        onRequestSort={handleRequestSort}
                                        rowCount={animalRows.length}
                                    /> : <></>
                                }
                                tableBodyContent={
                                    <TableBody rows={animalRows} placeholder="-"/>
                                } 
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ display: { xs: "block", lg: "none" }}} mt={4}>
                            {
                                animalRows.map((animal, index) => {
                                    const animalIdentifier = (animal.name || animal.type || "animal");
                                    
                                    return <ShelterCard 
                                            name={animal.name}  
                                            breed={animal.breed}  
                                            type={animal.type}  
                                            gender={animal.gender}  
                                            color={animal.color}  
                                            photo={animal.photo}  
                                            key={animalIdentifier + index} 
                                        />
                                    })
                                }
                        </Grid>

                        <Grid item xs={12} >
                            <Pagination 
                                className="shelter-table-animal__pagination pagination" 
                                size="large"  
                                count={count} 
                                page={pagination} 
                                variant="outlined" 
                                color="primary"
                                onChange={handlePageChange}
                            />
                        </Grid>
                    </>
                )
            }
        </Grid>
    )
}