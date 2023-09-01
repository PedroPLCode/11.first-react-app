import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {

  const dispatch = useDispatch();
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(updateSearchString(event.target[0].value));
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