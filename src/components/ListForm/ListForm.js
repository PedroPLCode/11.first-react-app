import Button from '../Button/Button';
import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  }

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      Title: <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
      Description: <input type="text" value={description} onChange={event => setDescription(event.target.value)} />
      <Button>Add List</Button>
    </form>
  );
};

export default ListForm;