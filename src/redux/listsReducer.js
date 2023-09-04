import shortid from 'shortid';

export const getAllLists = (state) => state.lists;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');
const REMOVE_LIST = createActionName('REMOVE_LIST');

export const addList = payload => ({type: ADD_LIST, payload });
export const removeList = payload => ({type: REMOVE_LIST, payload });

const listsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_LIST:
        return [...statePart, { ...action.payload, id: shortid() }];
      case REMOVE_LIST:
        return [...statePart.filter(list => action.payload !== list.id)];
      default:
        return statePart;
    }
  }

export default listsReducer;