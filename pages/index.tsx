import Head from "next/head";
import { ReactElement } from "react";

import { NextPageWithLayout } from "./_app";
import CardList from "@/components/CardList";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Climacrux</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          data-api="https://plausible.climacrux.com/api/event"
          data-domain="climacrux.com"
          src="https://plausible.climacrux.com/js/plausible.js"
        ></script>
      </Head>
      <Navigation></Navigation>
      <HeroSection></HeroSection>
      <CardList></CardList>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
};

const getLayout = (page: ReactElement) => {
  return <>{page}</>;
};

Home.getLayout = getLayout;

export default Home;
