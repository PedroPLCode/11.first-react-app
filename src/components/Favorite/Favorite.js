import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import PageSubTitle from '../PageSubTitle/PageSubTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsReducer';

const Favorite = () => {

  const favoriteCards = useSelector(state => getFavoriteCards(state));

  if (favoriteCards.length > 0) {
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
  } else {
    return (
      <div className={styles.favwrappper}>
      <PageTitle>Favorite</PageTitle>
      <PageSubTitle>Favorite. Puste.</PageSubTitle>
      <h1 className={styles.noFavCards}>NO FAVORITE CARDS.</h1>
    </div>
    );
  }
}

export default Favorite;