import React from 'react';
import { Typography, AppBar, Toolbar, TextField } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function header() {
    return (
        <AppBar>
            <Toolbar>
                <GitHubIcon />
                <Typography variant='h6'>Github search tool</Typography>
            </Toolbar>
        </AppBar>
    );
}
