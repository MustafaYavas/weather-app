'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const Input = () => {
  const [value, setValue] = useState('');

  return (
    <div className={`${styles.form} w-100`}>
      <input
        placeholder="Find your location..."
        type="text"
        maxLength="170"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Link
        onClick={() => setValue('')}
        href={`/${value}`}
        className={value ? '' : styles.disabled}
      >
        Find
      </Link>
    </div>
  );
};

export default Input;
