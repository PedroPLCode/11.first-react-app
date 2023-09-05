import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/searchStringReducer';

const SearchForm = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateSearchString(''));
  }, [] );
  const handleSearch = event => {
    event.preventDefault();
    const newSearchString = event.target[0].value;
    dispatch(updateSearchString(newSearchString));
  }

  return (
    <form className={styles.searchForm} onSubmit={ event => handleSearch(event) }>
      <TextInput placeholder="Search..." />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;