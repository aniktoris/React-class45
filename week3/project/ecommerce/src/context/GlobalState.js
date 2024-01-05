import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  favorites: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addFavorites = (id) => {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: id,
    });
  };

  const deleteFavorites = (id) => {
    dispatch({
      type: 'DELETE_FAVORITE',
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        favorites: state.favorites,
        addFavorites,
        deleteFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
