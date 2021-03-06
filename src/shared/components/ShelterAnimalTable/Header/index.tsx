import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import ShelterSearch from '@/shared/components/ShelterSearch';

type Props = {
    totalAnimals: number;
    value?: string;
    handleSearch: (value: string) => void
}

export default function ShelterAnimalHeader({totalAnimals = 0, handleSearch}: Props){
    return (
        <header className="shelter-table-animal__header">
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} md={7} >
                <Stack direction="row" spacing={1}  alignItems="center">
                    <h1>Your Animals</h1>
                    <span className="inline-badge">{totalAnimals}</span>
                </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={5} justifyContent="center" alignItems="center">
                <ShelterSearch id="shelter-animal-search" handleChange={handleSearch}></ShelterSearch>
                </Grid>
            </Grid>
        </header>
    )
}