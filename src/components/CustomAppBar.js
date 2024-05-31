import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import {Typography} from "@mui/material";


export default function CustomAppBar() {

    return (
        <AppBar elevation={0} position="static">
            <Container maxWidth="xl" sx={{padding: 5, display: 'flex', justifyContent: 'center'}}>
                <Typography variant="h5">New assessment</Typography>
            </Container>
        </AppBar>
    );
}
