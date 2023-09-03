import styles from './PageNotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import PageSubTitle from '../PageSubTitle/PageSubTitle';

const PageNotFound = () => {
  return (
    <div className={styles.pagenotfound}>
      <PageTitle>Page Not Found</PageTitle>
      <PageSubTitle>Error 404 - Page Not Found</PageSubTitle>
    </div>
  );
}

export default PageNotFound;