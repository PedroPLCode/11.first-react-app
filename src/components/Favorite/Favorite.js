import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import PageSubTitle from '../PageSubTitle/PageSubTitle';

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <PageSubTitle>Favorite. Po prostu prosty akapit.</PageSubTitle>
    </div>
  );
}

export default Favorite;