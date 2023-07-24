import React, { useState, useContext, useEffect } from 'react'
import AnimeContext from '../context/AnimeContext'
import "../styles/AnimeForm.css"
import { Box, Button, Card, CssBaseline, Grid, TextField, Typography } from '@mui/material';

export const ShowAnimes = () => {

    const {animeState, setAnimeState} = useContext(AnimeContext);
    const [thereIsAnime, setThereIsAnime] = useState(false)

    const [editingName, setEditingName] = useState(null);
    const [editSinopsis, setEditSinopsis] = useState('');
    const [editFecha, setEditFecha] = useState('');
    const [editOpinion, setEditOpinion] = useState('');

    const handleEdit = (name) => {
        const item = animeState.find((item) => item.name === name);
        setEditingName(name);
        setEditSinopsis(item.sinopsis);
        setEditFecha(item.fechaEstreno);
        setEditOpinion(item.opinion);
    };

    const handleSave = (name) => {
        const newData = animeState.map((item) => {
          if (item.name === name) {
            return { 
                ...item, 
                sinopsis: editSinopsis,
                fecha: editFecha,
                opinion: editOpinion
            };
          }
          return item;
        });
        setAnimeState(newData);
        setEditingName(null);
        setEditSinopsis('');
        setEditFecha('');
        setEditOpinion('');
    };

    useEffect(() => {
      if(animeState.length > 0){
        setThereIsAnime(true)
      }
      else {
        setThereIsAnime(false)
      }
    }, [animeState])
    

  return (
    <>
        
        <Box sx={{display: 'flex', flexWrap: 'wrap', marginLeft: 3}}>

            { thereIsAnime 
            ? 
                animeState.map( anime => {
                    return (
                        <Card variant='outlined' className='item' sx={{maxWidth: '80vw', minWidth: '40vw', marginTop: 3, marginLeft: 3}}>
                        <Grid container spacing={2} sx={{marginLeft: 2}}>
                            <Grid item xs={7}>
                                <p>Nombre: <span>{anime.name}</span></p>

                                <p>Sinopsis: <span>
                                        {editingName === anime.name ? (
                                            <TextField
                                                type="text"
                                                value={editSinopsis}
                                                onChange={(e) => setEditSinopsis(e.target.value)}
                                            />
                                            ) : (
                                            anime.sinopsis
                                        )}
                                    </span>
                                </p>
                                <p>Fecha de estreno: <span>
                                    {editingName === anime.name ? (
                                        <TextField
                                            type="text"
                                            value={editFecha}
                                            onChange={(e) => setEditFecha(e.target.value)}
                                        />
                                        ) : (
                                        anime.fechaEstreno
                                    )}
                                </span>
                                </p>

                                <p>Opinión: <span>
                                        {editingName === anime.name ? (
                                            <TextField
                                                type="text"
                                                value={editOpinion}
                                                onChange={(e) => setEditOpinion(e.target.value)}
                                            />
                                            ) : (
                                            anime.opinion
                                        )}
                                    </span>
                                </p>
                            </Grid>
                            <Grid item xs={3} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                {editingName === anime.name ? (
                                    <Button
                                        className='buttonIcon'
                                        variant='contained'
                                        onClick={() => handleSave(anime.name)} 
                                        sx={{marginBottom: 5}}
                                    >
                                        Guardar
                                    </Button>
                                    ) : (
                                    <Button
                                        className='buttonIcon'
                                        variant='contained'
                                        onClick={() => handleEdit(anime.name)} 
                                        sx={{marginBottom: 3}}
                                        >
                                        Editar
                                    </Button>
                                )}

                                <Button onClick={ () => { setAnimeState(animeState.filter(item => item.name !== anime.name));} }
                                        variant='contained'
                                >
                                    Eliminar
                                </Button>
                            </Grid>
                        </Grid>
                            

                            

                        </Card>
                    )
                })
            :
                <Typography variant='h5' sx={{marginTop: 5}}>Aún no hay animes agregados</Typography>
            }


        </Box>
    </>
  )
}
