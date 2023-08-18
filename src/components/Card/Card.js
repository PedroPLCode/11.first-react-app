import styles from './Card.module.scss';

const Card = props => {
  return (
    <li className={styles.card}>{props.title}<button onClick={() => props.removeCard(props.columnId, props.id)}>X</button></li>
  );
};

export default Card;