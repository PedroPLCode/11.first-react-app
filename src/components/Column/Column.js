import styles from './Column.module.scss'
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {

  const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));

  return (
    <article className={styles.column}>
      <div className={styles.title}>
        <h2><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
        <button>X</button>
      </div>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} id={card.id} card={card} columnId={props.id} cards={props.cards} title={card.title} />)}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;