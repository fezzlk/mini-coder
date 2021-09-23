import Head from 'next/head'

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>mini-corder</title>
        <meta name="description" content="mini-coder help you to practice coding!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between p-3 border-b">
        <div className="text">
          mini coder
        </div>
        <div className="text">
          fezzlk
        </div>
      </header>

      <div className="container mx-auto h-screen">
        <main className="h-full">{children}</main>
      </div>

      <footer>
      </footer>
    </>
  );
}