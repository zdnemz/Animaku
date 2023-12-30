import * as React from "react";

const ToTop = () => {
  const [isMaxScroll, setIsMaxScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (window.scrollY > totalHeight * 0.8) {
        setIsMaxScroll(true);
      } else {
        setIsMaxScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isMaxScroll && (
      <div
        className="fixed z-50 bottom-10 right-5 w-10 h-10 text-lg rounded-full bg-primary-100 hover:bg-primary-200 dark:bg-accent-100 dark:hover:bg-accent-200 flex justify-center items-center cursor-pointer opacity-animation"
        onClick={scrollToTop}
      >
        <i className="dark:text-primary-100/70 text-accent-100/70 fa-solid fa-chevron-up" />
      </div>
    )
  );
};

export default ToTop;
