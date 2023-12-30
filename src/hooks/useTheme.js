import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const onWindowMatch = () => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && darkQuery.matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    onWindowMatch();
  }, []);

  useEffect(() => {
    // Pembaruan tema langsung setelah perubahan state
    onWindowMatch();

    switch (theme) {
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  useEffect(() => {
    darkQuery.addEventListener("change", onWindowMatch);
    return () => {
      darkQuery.removeEventListener("change", onWindowMatch);
    };
  }, []);

  return { theme, setTheme };
};

export default useTheme;
