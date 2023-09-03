import styles from './PageSubTitle.module.scss';

const PageSubTitle = props => {
  return (
    <p className={styles.subtitle}>
      {props.children}
    </p>
  );
};

export default PageSubTitle;