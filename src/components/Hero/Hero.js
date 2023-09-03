import styles from './Hero.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import PageSubTitle from '../PageSubTitle/PageSubTitle';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>My first React App</PageTitle>
      <PageSubTitle>A simple to-do app, with lists, columns and card</PageSubTitle>
    </div>
  );
};

export default Hero;