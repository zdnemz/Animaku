import * as React from "react";
import { SessionData } from "./session.js";

const Search = () => {
  const [searchHolder, setSearchHolder] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "/") {
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = (e) => {
    if (inputValue === "") {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    window.location.href = `/search?q=${inputValue}`;
  };

  SessionData((data) => setSearchHolder(data));

  return (
    <form
      action="search"
      onSubmit={handleSubmit}
      className="w-full flex rounded-lg overflow-hidden relative"
    >
      <input
        autoCorrect="off"
        spellCheck="false"
        className="flex-grow bg-accent-200 dark:md:bg-primary-200 md:dark:text-accent-100 text-primary-100 text-sm px-5 py-1 md:px-12 md:pr-16 rounded-l-lg dark:md:outline-accent-100 outline-primary-100 max-w-40 w-[50vw] md:w-full md:max-w-full dark:bg-accent-200"
        ref={inputRef}
        type="text"
        placeholder={searchHolder || "Search for animes"}
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key === "Tab") {
            e.preventDefault();
            setInputValue(searchHolder);
          }
        }}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <i className="fa-solid fa-magnifying-glass inset-0 absolute sm:w-10 md:w-12 h-full items-center justify-center hidden md:flex" />
      <div className="absolute hidden md:flex right-20 opacity-30 inset-y-0 w-fit h-full items-center justify-center">
        <h1>[ctrl+/]</h1>
      </div>
      <input
        type="button"
        className="bg-secondary-100 py-1 px-3 cursor-pointer text-accent-100 hidden md:block"
        value={"search"}
        onClick={handleSubmit}
      />
      <div
        className="bg-secondary-100 w-8 h-8 cursor-pointer flex md:hidden justify-center items-center"
        onClick={handleSubmit}
      >
        <i className="fa-solid fa-magnifying-glass text-accent-100" />
      </div>
    </form>
  );
};

export default Search;
