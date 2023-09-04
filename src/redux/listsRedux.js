import shortid from 'shortid';

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

export default listsReducer;