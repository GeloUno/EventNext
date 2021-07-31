import Head from 'next/head';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import { NoificationContextProvider } from './../store/notification-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NoificationContextProvider>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NoificationContextProvider>
  )
}
export default MyApp
