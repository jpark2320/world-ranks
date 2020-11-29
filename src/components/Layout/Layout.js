import Head from 'next/head';
import Link from 'next/link';
import styles from './Layout.module.css';
import Logo from 'assets/logo';

export default function Layout({ children, title = 'World Ranks' }) {
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
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Jaehong Park @ jaehongpark.com</footer>
    </div>
  );
}
