import React from 'react';

export const defaultCards = [];
export const defaultFilter = {
    value: '',
    filterBy: 'name',
};
export const defaultIsLoading = false;

export const CardsContext = React.createContext(defaultCards);
export const FilterContext = React.createContext(defaultFilter);
export const IsLoadingContext = React.createContext(defaultIsLoading);
