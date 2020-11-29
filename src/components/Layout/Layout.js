import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Layout.module.css';
import Logo from 'assets/logo';
import { Brightness6Rounded } from '@material-ui/icons';

export default function Layout({ children, title = 'World Ranks' }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme')
    );

    setTheme(localStorage.getItem('theme') || 'light');
  }, []);

  const switchTeme = () => {
    const targetTheme = theme === 'light' ? 'dark' : 'light';
    saveTheme(targetTheme);
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <button className={styles.theme_switcher} onClick={switchTeme}>
          <Brightness6Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Jaehong Park @ jaehongpark.com</footer>
    </div>
  );
}
