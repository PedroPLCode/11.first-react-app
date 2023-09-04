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

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN': 
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'REMOVE_COLUMN': 
      return { ...state, columns: [...state.columns.filter(column => action.payload !== column.id)]};
    case 'ADD_CARD':  
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid(), isFavorite: false }]};  
    case 'REMOVE_CARD':  
      return { ...state, cards: [...state.cards.filter(card => action.payload !== card.id)]};
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }]};
    case 'REMOVE_LIST':
      return { ...state, lists: [...state.lists.filter(list => action.payload !== list.id)]};
    case 'UPDATE_SEARCH_STRING':
      return { ...state, searchString: action.payload };
    case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;