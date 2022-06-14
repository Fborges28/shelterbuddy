import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { InputHTMLAttributes, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    id: string,
    value?: string;
    handleChange: (value: string) => void
}

export default function ShelterSearch({id = "search-input", value = "", handleChange}: Props): JSX.Element {
    const [searchValue, setSearchValue] = useState(value);

    const _onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchValue(e.currentTarget.value);
        handleChange(e.currentTarget.value);
    }

    return (
        <TextField  
            id={id}
            variant="outlined"
            value={searchValue}
            hiddenLabel
            fullWidth
            placeholder="Search an animal by name"
            onChange={_onChange}
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