import React from 'react';
import { OutlinedInput, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchField() {
    return (
        <OutlinedInput
            id='outlined-adornment-password'
            endAdornment={
                <InputAdornment position='end'>
                    <Button endIcon={<SearchIcon />}>Search</Button>
                </InputAdornment>
            }
            label='Password'
        />
    );
}
