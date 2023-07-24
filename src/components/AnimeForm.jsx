import React, { useContext, useState} from 'react'
import '../styles/AnimeForm.css'
import AnimeContext from '../context/AnimeContext'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Alert, AlertTitle, Box, Card, Divider } from '@mui/material';



export const AnimeForm = () => {

    const {animeState, setAnimeState} = useContext(AnimeContext);

    const [alertOpen, setAlertOpen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(e.target)

        setAnimeState([...animeState, {
            name: e.target.name.value,
            sinopsis: e.target.sinopsis.value,
            fechaEstreno: e.target.fechaEstreno.value,
            opinion: e.target.opinion.value,
        }])


        e.target.name.value = ''
        e.target.sinopsis.value = ''
        e.target.fechaEstreno.value = ''
        e.target.opinion.value = ''

        
        
        //console.log(animeState)

        setAlertOpen(!alertOpen)

        
    }

    const handleAlert = () => {
        setAlertOpen(!alertOpen)
    }


    const textFieldStyle = {
        marginLeft: 2
    }

  return (
    <>
        {   alertOpen 

        ?
            <Alert severity="success" color="info" open={alertOpen} onClose={handleAlert}>
                Agregado con exito !
            </Alert>
        :
            null
        }


        <form onSubmit={handleSubmit} className="container">
            <Box sx={{ maxWidth: 800,  borderColor: 'error.main', borderRadius: '16px' }} >
            
            <Card variant="outlined" className="container2" sx={{ borderColor: 'primary.main', borderRadius: '20px' }} >
            <h2>Agregar anime visto <Divider sx={{ borderColor: 'primary.main'  }}/></h2>
            
            <label htmlFor="">
                Nombre: 
                <TextField className='inp' type="text" name='name' id='name' sx={textFieldStyle}/>
            </label>
            <label htmlFor="">
                Sinopsis: 
                <TextField className='inp' id='sinopsis' name="sinopsis" sx={textFieldStyle}/>
            </label>
            <label htmlFor="">
                Fecha de estreno: 
                <TextField className='inp' id="fechaEstreno" type="date" name='estreno' sx={textFieldStyle}/> 
            </label>
            <label htmlFor="">
                Opinión: 
                <TextField className='inp' id="opinion" name="opinion" sx={textFieldStyle}/>
            </label>
            
            <Button type="submit" variant='contained'>Agregar</Button>

            

            

            </Card>
            </Box>
        </form>

    </>
  )
}
