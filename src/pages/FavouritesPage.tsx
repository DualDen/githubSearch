import React from 'react';
import {useAppSelector} from "../hooks/useAppSelector";

export const FavouritesPage = () => {
  const {favourites}  = useAppSelector(state => state.githubReducer);
  const favouritesContent = () => {
      if(favourites.length === 0) {
          return <p>No items</p>
      }
      else {
          return favourites.map(fav => (
              <div key={fav}>{fav}</div>
          ))
      }
  }
    return (
        <div>
            {favouritesContent()}
        </div>
    );
};
