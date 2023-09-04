import shortid from 'shortid';

export const getAllColumns = (state) => state.columns;
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');
const REMOVE_COLUMN = createActionName('REMOVE_COLUMN');

export const addColumn = (payload, listId) => ({ type: ADD_COLUMN, payload });
export const removeColumn = payload => ({ type: REMOVE_COLUMN, payload});

const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_COLUMN:
        return [...statePart, { ...action.payload, id: shortid() }];
      case REMOVE_COLUMN: 
        return [...statePart.filter(column => action.payload !== column.id)];
      default:
        return statePart;
    }
  }

export default columnsReducer;