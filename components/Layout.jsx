import Prose from "./Prose";

import Footer from "@/components/Footer";

const Layout = ({ children, title, tableOfContents }) => {
  return (
    <>
      <Prose>{children}</Prose>
      <Footer></Footer>
    </>
  );
};
export default Layout;
