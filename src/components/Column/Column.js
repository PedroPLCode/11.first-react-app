import styles from './Column.module.scss'
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsReducer';
import { removeColumn } from '../../redux/columnsReducer';

const Column = props => {

  const dispatch = useDispatch();
  const filteredCards = useSelector(state => getFilteredCards(state, props.id));
  const handleRemoveColumn = event => {
    event.preventDefault();
    dispatch(removeColumn(props.id))
  }

  return (
    <article className={styles.column}>
      <div className={styles.title}>
        <h2><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
        <i onClick={handleRemoveColumn} className="fa fa-trash"></i>
      </div>
      <ul className={styles.cards}>
        {filteredCards.map(card => <Card key={card.id} id={card.id} card={card} columnId={props.id} isFavorite={card.isFavorite} cards={props.cards} title={card.title} />)}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;