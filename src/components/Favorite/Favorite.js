import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import PageSubTitle from '../PageSubTitle/PageSubTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';

const Favorite = () => {

  const favoriteCards = useSelector(state => getFavoriteCards(state));

  return (
    <div className={styles.favwrappper}>
      <PageTitle>Favorite</PageTitle>
      <PageSubTitle>Favorite. Po prostu prosty akapit.</PageSubTitle>
      <div className={styles.favorite}><span><i className="fa fa-star-o"></i> Your Favorite Cards:</span>
        <ul className={styles.cards}>
          {favoriteCards.map(card => <Card key={card.id} id={card.id} card={card} isFavorite={card.isFavorite} title={card.title} />)}
        </ul>
      </div>
    </div>
  );
}

export default Favorite;