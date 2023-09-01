import styles from './Card.module.scss';
//import { removeCard } from '../../redux/store';
//import { useDispatch } from 'react-redux';

const Card = props => {

  //const dispatch = useDispatch();
  
  const handleClick = (cardId) => {
    //dispatch({ type: 'REMOVE_CARD', payload: { cardId } });
    //dispatch(removeCard(cardId));
  }

  return (
    <li className={styles.card}>{props.title}<button onClick={handleClick(props.id)}>X</button></li>
  );
};

export default Card;