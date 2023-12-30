import PropTypes from "prop-types";
import Navbar from "./Navbar";
import DarkMode from "../elements/DarkMode";
import SimpleNav from "../fragments/navbar/SimpleNav";
import ToTop from "../elements/ToTop";
import Footer from "../elements/Footer";

const Main = ({ children, clearView, simple, full, center }) => {
  if (clearView) {
    return (
      <>
        {simple && <SimpleNav />}
        <DarkMode noview />
        <div
          className={`dark:bg-primary-100 bg-accent-100 text-primary-100 dark:text-accent-100 min-h-screen py-8 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-56 2xl:px-72 relative ${
            simple && "pt-20"
          } ${full && "py-0 px-0"} ${
            center && "flex flex-col justify-center items-center"
          }`}
        >
          {children}
          <ToTop />
        </div>
      </>
    );
  } else {
    return (
      <>
        {simple ? <SimpleNav /> : <Navbar />}
        <DarkMode noview />
        <div
          className={`dark:bg-primary-100 bg-accent-100 text-primary-100 dark:text-accent-100 min-h-screen py-20 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-56 2xl:px-72 ${
            full && "py-0 px-0"
          } ${center && "flex flex-col justify-center items-center"}`}
        >
          {children}
          <ToTop />
        </div>
        <Footer />
      </>
    );
  }
};

Main.propTypes = {
  children: PropTypes.node,
  clearView: PropTypes.bool,
  simple: PropTypes.bool,
  full: PropTypes.bool,
  center: PropTypes.bool,
};

export default Main;
