import Head from "next/head";
import { ReactElement } from "react";

import { NextPageWithLayout } from "./_app";
import CardList from "@/components/CardList";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Climacrux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection></HeroSection>
      <CardList></CardList>
      <Footer></Footer>
    </>
  );
};

const getLayout = (page: ReactElement) => {
  return <>{page}</>;
};

Home.getLayout = getLayout;

export default Home;
