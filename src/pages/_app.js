import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import Head from 'next/head';
import { Provider as AuthProvider } from 'next-auth/client';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>
      <AuthProvider session={pageProps.session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </>
  );
};

export default MyApp;
