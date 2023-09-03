import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString, getSearchString } from '../../redux/store';

const SearchForm = () => {

  const dispatch = useDispatch();
  const searchString = useSelector(getSearchString);
  const [searchValue, setSearchValue] = useState(searchString);
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(updateSearchString(searchValue));
  }

  return (
    <form className={styles.searchForm} onSubmit={ event => handleSearch(event) }>
      <TextInput placeholder="Search..." value={searchValue} onChange={event => setSearchValue(event.target.value)} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;