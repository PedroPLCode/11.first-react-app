import Button from '../Button/Button';
import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsReducer';

const ColumnForm = props => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    const listId = props.listId;
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
  }

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title: <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
      Icon: <input type="text" value={icon} onChange={event => setIcon(event.target.value)} />
      <Button>Add Column</Button>
    </form>
  );
};

export default ColumnForm;