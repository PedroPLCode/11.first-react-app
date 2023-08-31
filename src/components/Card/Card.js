import styles from './Card.module.scss';

const Card = props => {
  return (
    <li className={styles.card}>{props.title}<button>X</button></li>
  );
};

export default Card;