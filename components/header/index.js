'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsCloudHaze2 } from 'react-icons/bs';

import styles from './styles.module.scss';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className="container d-flex justify-content-between align-items-center">
        <div
          className={styles.logo}
          onClick={() => (window.location.href = '/')}
        >
          <BsCloudHaze2 size={60} color="var(--second-color)" />
          <div className={styles['header-title']}>
            <h1>Cloudy</h1>
            <h4>Daily Forecasts</h4>
          </div>
        </div>

        <nav className={styles['nav-menu']}>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
