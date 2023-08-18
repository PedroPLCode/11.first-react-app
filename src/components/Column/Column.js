import styles from './Column.module.scss'
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = props => {

  return (
    <article className={styles.column}>
      <div className={styles.title}>
        <h2><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
        <button onClick={() => props.removeColumn(props.id)}>X</button>
      </div>
      <ul className={styles.cards}>
        {props.cards.map(card => <Card key={card.id} id={card.id} card={card} columnId={props.id} cards={props.cards} title={card.title} removeCard={props.removeCard}/>)}
      </ul>
      <CardForm columnId={props.id} addCard={props.addCard} />
    </article>
  );
};

export default Column;