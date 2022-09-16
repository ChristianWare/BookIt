import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({
  children,
  title = "Book the Best Hotels for your Holiday",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
