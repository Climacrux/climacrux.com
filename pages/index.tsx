import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home: NextPage = ({Component, pageProps}) => {
  return (<>
    <Head>
      <title>Climacrux</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default Home
