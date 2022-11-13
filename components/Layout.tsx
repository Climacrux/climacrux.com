import Prose from "./Prose";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Layout = ({ children, title, tableOfContents }) => {
  return (
    <>
      <Navigation></Navigation>
      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <article>
            {title && (
              <header className="mb-9 space-y-1">
                <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                  {title}
                </h1>
              </header>
            )}
            <Prose>{children}</Prose>
          </article>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Layout;
