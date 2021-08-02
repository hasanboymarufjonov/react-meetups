import { createContext, useState } from "react";


const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesContextProvider(props){

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites( (prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        })
    }

    function removFavoriteHandler(meetupId){
        setUserFavorites()
    }

    function itemIsFavoriteHandler() {

    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length, 
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}
