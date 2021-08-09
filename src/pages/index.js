import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Amazon Clone Next</title>
      </Head>
      {/* Header */}
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <Banner />

        <ProductFeed products={products} />
      </main>

      {/* Footer */}
    </>
  );
}

// Server-side rendering

export async function getServerSideProps() {
  const request = await fetch('https://fakestoreapi.com/products');
  const products = await request.json();

  return {
    props: {
      products,
    },
  };
}
