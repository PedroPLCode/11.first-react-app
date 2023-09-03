import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import PageSubTitle from '../PageSubTitle/PageSubTitle';

const About = () => {
  return (
    <div className={styles.about}>
      <PageTitle>About</PageTitle>
      <PageSubTitle>About. Po prostu prosty akapit.</PageSubTitle>
    </div>
  );
}

export default About;