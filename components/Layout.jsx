import { useRouter } from "next/router";
import Prose from "./Prose";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import HeroSection from "../components/HeroSection";

const Layout = ({ children }) => {
  let router = useRouter();
  let isHomePage = router.pathname === "/";
  return (
    <>
      {isHomePage && (
        <>
          <HeroSection></HeroSection>
          <CardList></CardList>
        </>
      )}
      {!isHomePage && <Prose>{children}</Prose>}
      <Footer></Footer>
    </>
  );
};
export default Layout;
