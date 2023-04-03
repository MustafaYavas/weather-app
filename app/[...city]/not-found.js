import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className="page-container">
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
