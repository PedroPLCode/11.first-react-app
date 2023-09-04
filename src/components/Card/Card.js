import styles from './Card.module.scss';
import clsx from 'clsx';
import { removeCard, toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Card = props => {

  const dispatch = useDispatch();
  const handleRemoveCard = event => {
    event.preventDefault();
    dispatch(removeCard(props.id));
  }
  const handleAddFavorite = event => {
    event.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  }

  return (
    <li className={styles.card}>{props.title}
      <div>
        <button onClick={handleAddFavorite}><i className={clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}></i></button>
        <button onClick={handleRemoveCard}><i className="fa fa-trash"></i></button>
      </div>
    </li>
  );
};

export default Card;