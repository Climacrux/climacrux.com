import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import CardList from '../components/CardList'
import HeroSection from '../components/HeroSection'

const Home: NextPage = () => {
  return (<>
    <Head>
      <title>Climacrux</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HeroSection></HeroSection>
    <CardList></CardList>
    <Footer></Footer>
  </>
  )
}

export default Home
