import { createContext, useState } from 'react';

const AnimeContext = createContext();

export const AnimeContextProvider = ({children}) => {
    const [animeState, setAnimeState] = useState([]);

    return(
        <AnimeContext.Provider value={{animeState, setAnimeState}}>
            {children}
        </AnimeContext.Provider>
    );
}

export default AnimeContext;