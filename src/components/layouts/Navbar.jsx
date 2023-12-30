import * as React from "react";
import NavList from "../fragments/navbar/NavList";
import NavMenu from "../fragments/navbar/NavMenu";
import Search from "../fragments/search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScroll, setIsScroll] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const windowScrolled = window.scrollY;
      setIsScroll(windowScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`z-50 fixed top-0 w-full bg-accent-100 dark:bg-primary-100 text-primary-100 dark:text-accent-100 py-4 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 ${
        isScroll &&
        "dark:backdrop-blur-sm backdrop-blur-sm dark:bg-opacity-80 bg-opacity-80 dark:drop-shadow-lg drop-shadow-lg"
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <Link to={"/"} className="z-10">
            <h1 className="font-bold text-xl">Animaku</h1>
          </Link>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <div>
          {/* md hidden */}
          <NavMenu />
          {/* md flex */}
          <NavList />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
