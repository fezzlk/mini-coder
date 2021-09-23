import Head from 'next/head'
import styles from '~/styles/Home.module.css'

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>mini-corder</title>
        <meta name="description" content="mini-coder help you to practice coding!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}