import useTheme from "../../hooks/useTheme";
import PropTypes from "prop-types";

const DarkMode = ({ noview }) => {
  const options = [
    {
      name: "light",
      icon: "fa-solid fa-sun",
    },
    {
      name: "dark",
      icon: "fa-solid fa-moon",
    },
    {
      name: "system",
      icon: "fa-solid fa-desktop",
    },
  ];

  const { theme, setTheme } = useTheme();

  if (noview) {
    return null;
  }

  return (
    <div className="dark:bg-primary-300 bg-accent-300 flex overflow-hidden translate-y-[2px] w-fit self-center rounded-lg">
      {options.map((option) => (
        <button
          key={option.name}
          onClick={() => setTheme(option.name)}
          className={`w-8 h-7 flex justify-center items-center hover:bg-accent-400 dark:hover:bg-primary-200 text-accent-100 hover:text-accent-500 dark:hover:text-sky-800 ${
            theme === option.name
              ? "bg-accent-400 text-yellow-400 dark:bg-primary-200 dark:text-sky-800"
              : ""
          }`}
        >
          <i className={`${option.icon}`}></i>
        </button>
      ))}
    </div>
  );
};

DarkMode.propTypes = {
  noview: PropTypes.bool,
};

export default DarkMode;
