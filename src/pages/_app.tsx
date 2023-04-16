import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.scss'
import { Header } from '../components/Header'
import { SessionProvider as SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <Head>
    <title>Home | ig.news</title>
    </Head>
    <Header/>
    <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
