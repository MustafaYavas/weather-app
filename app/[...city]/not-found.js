import Link from 'next/link';

import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className="page-container">
      <p
        className={styles.message}
        style={{ fontSize: '48px', letterSpacing: '10px' }}
      >
        404
      </p>
      <p className={styles.message}>
        The page you looking for could not be found!
      </p>
      <Link className={styles.link} href="/">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
