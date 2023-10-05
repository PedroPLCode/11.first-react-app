const initialState = {

  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out.'
    },
   {
      id: '2',
      title: 'Test list',
      description: 'Lorem Ipsum'
   }
 ],
  columns: [
    {
      id: 1,
      listId: '1',
      title: 'Books',
      icon: 'book',
    },
    {
      id: 2,
      listId: '1',
      title: 'Movies',
      icon: 'film',
    },
    {
      id: 3,
      listId: '1',
      title: 'Games',
      icon: 'gamepad',
    },
    {
      id: 4,
      listId: '2',
      title: 'Testowa',
      icon: 'music',
    }
  ],
  cards: [
    { id: 1, isFavorite: false, columnId: 1, title: 'This is Going to Hurt' },
    { id: 2, isFavorite: false, columnId: 1, title: 'Interpreter of Maladies' },
    { id: 3, isFavorite: false, columnId: 2, title: 'Harry Potter' },
    { id: 4, isFavorite: false, columnId: 2, title: 'Star Wars' },
    { id: 5, isFavorite: false, columnId: 3, title: 'The Witcher' },
    { id: 6, isFavorite: false, columnId: 3, title: 'Skyrim' },
    { id: 7, isFavorite: true, columnId: 3, title: 'Test Favorite Card' }
  ],
  searchString: '',
};
  
export default initialState;