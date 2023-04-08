'use client';
import styles from './styles.module.scss';

const Error = () => {
  return (
    <div className="page-container">
      <p className={styles.message}>
        The location you searched could not be found!
      </p>
      <p className={styles.message}>Try another search</p>
    </div>
  );
};

export default Error;
