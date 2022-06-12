import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    id: string;
}

export default function ShelterSearch({id = "search-input"}: Props): JSX.Element {
    return (
        <TextField  
            id={id}
            variant="outlined"
            defaultValue="Search"
            hiddenLabel
            fullWidth
            placeholder="Search an animal by name"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
        />
    );
}