import Head from 'next/head'

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="container mx-auto h-screen">
      <Head>
        <title>mini-corder</title>
        <meta name="description" content="mini-coder help you to practice coding!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">{children}</main>

      <footer>
      </footer>
    </div>
  );
}