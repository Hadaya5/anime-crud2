import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import { AnimeContextProvider } from '../context/AnimeContext'
import { AnimeForm } from './AnimeForm'
import { ShowAnimes } from './ShowAnimes'
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export const Main = () => {


  return (
    <AnimeContextProvider>
      <Router basename="/">
      <AppBar position="static">
          <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                  Anime - CRUD
              </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', minWidth: '85vw' }}>
                  <Link to={`/create-form`}  style={{ textDecoration: 'none'}}>
                    <Typography variant="subtitle1" color="white" sx={{ marginRight: 5}}>Agregar anime</Typography>
                  </Link>
                  <Link to={`/home`} style={{ textDecoration: 'none'}}>
                    <Typography variant="subtitle1" color="white">Listado de animes vistos</Typography>
                  </Link>
                </Box>
          </Toolbar>
      </AppBar>

      
        <Routes>
          <Route
              exact
              path="/create-form"
              element={<AnimeForm />}
          />

          <Route
              exact
              path="/home"
              element={<ShowAnimes />}
          />

          <Route
              path="*"
              element={<ShowAnimes />}
          />
        </Routes>
      </Router>

    </AnimeContextProvider>
  )
}
