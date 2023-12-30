import * as React from "react";
import PropTypes from "prop-types";

const time = (date) => {
  const hours = date.getHours();
  switch (true) {
    case hours >= 6 && hours < 13:
      return "Morning";
    case hours >= 13 && hours < 19:
      return "Afternoon";
    case hours >= 19 && hours < 22:
      return "Evening";
    case (hours >= 22 && hours <= 23) || (hours >= 0 && hours < 6):
      return "Night";
  }
};

const Greetings = ({ username, classname }) => {
  const [greet, setGreet] = React.useState("");

  React.useEffect(() => {
    const date = new Date();
    setGreet(time(date) ?? "");
  }, []);

  return (
    <div className={`${classname || ""} py-2`}>
      <h1 className="text-xl font-semibold">
        Good {greet} {username || "Guest"} !
      </h1>
      <p className="text-sm text-opacity">What Are You Gonna Watch Today?</p>
    </div>
  );
};

Greetings.propTypes = {
  username: PropTypes.string,
  classname: PropTypes.string,
};

export default Greetings;
