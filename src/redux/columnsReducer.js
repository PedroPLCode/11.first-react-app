import shortid from 'shortid';

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

export default columnsReducer;