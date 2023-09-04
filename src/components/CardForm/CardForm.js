import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsReducer';

const CardForm = props => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addCard({ title, columnId: props.columnId }));
    setTitle('');
  }

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={event => setTitle(event.target.value)} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;