import * as React from "react";
import DarkMode from "../../elements/DarkMode";
import useBack from "../../../hooks/useBack";

const SimpleNav = () => {
  const [isScroll, setIsScroll] = React.useState(0);
  const back = useBack()

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
        isScroll && "backdrop-blur-sm bg-opacity-80 drop-shadow-lg"
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="cursor-pointer font-semibold text-lg" onClick={back}>Back</h1>
        <DarkMode />
      </div>
    </nav>
  );
};

export default SimpleNav;
