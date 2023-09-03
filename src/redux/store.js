import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId &&
          strContains(card.title, searchString));
export const getAllColumns = (state) => state.columns;
export const getSearchString = (state) => state.searchString;
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getAllLists = (state) => state.lists;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

//action creators
export const addColumn = (payload, listId) => ({ type: 'ADD_COLUMN', payload });
export const removeColumn = payload => ({ type: 'REMOVE_COLUMN', payload});
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const removeCard = payload => ({ type: 'REMOVE_CARD', payload });
export const addList = payload => ({type: 'ADD_LIST', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCH_STRING', payload });

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN': 
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'REMOVE_COLUMN': 
      return { ...state, columns: [...state.columns.filter(column => action.payload.columnId !== column.id)]};
    case 'ADD_CARD':  
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};  
    case 'REMOVE_CARD':  
      return { ...state, cards: [...state.cards.filter(card => action.payload.cardId !== card.id)]};
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }]};
    case 'UPDATE_SEARCH_STRING':
      return { ...state, searchString: action.payload };
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