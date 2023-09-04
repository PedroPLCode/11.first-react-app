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
      <div className={styles.iconwraper}>
        <i onClick={handleAddFavorite} className={clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}></i>
        <i onClick={handleRemoveCard} className="fa fa-trash"></i>
      </div>
    </li>
  );
};

export default Card;