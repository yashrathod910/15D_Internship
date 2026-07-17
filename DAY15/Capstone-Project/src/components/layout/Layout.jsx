import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "../common/BackToTop";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default Layout;