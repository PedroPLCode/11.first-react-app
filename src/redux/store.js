import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId &&
          strContains(card.title, searchString));
export const getAllColumns = (state) => state.columns;
export const getSearchString = (state) => state.searchString;
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getAllLists = (state) => state.lists;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getFavoriteCards = (state) => state.cards.filter(card => card.isFavorite);

export const addColumn = (payload, listId) => ({ type: 'ADD_COLUMN', payload });
export const removeColumn = payload => ({ type: 'REMOVE_COLUMN', payload});
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const removeCard = payload => ({ type: 'REMOVE_CARD', payload });
export const addList = payload => ({type: 'ADD_LIST', payload });
export const removeList = payload => ({type: 'REMOVE_LIST', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCH_STRING', payload });
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_LIST':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'REMOVE_LIST':
      return [...statePart.filter(list => action.payload !== list.id)];
    default:
      return statePart;
  }
}

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'REMOVE_COLUMN': 
      return [...statePart.filter(column => action.payload !== column.id)];
    default:
      return statePart;
  }
}

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'REMOVE_CARD':  
      return [...statePart.filter(card => action.payload !== card.id)];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  }
}

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'UPDATE_SEARCHSTRING':
      return action.payload
    default:
      return statePart;
  }
}

const reducer = (state, action) => {
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    searchString: searchStringReducer(state.searchString, action)
  };

  return newState;
};



const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;