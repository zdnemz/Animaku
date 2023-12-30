import * as React from "react";
import PropTypes from "prop-types";

function Paragraf({ children, title }) {
  const [isMore, setIsMore] = React.useState(false);

  return (
    <>
      <h1 className="text-xl font-semibold py-2">{title}</h1>
      <div>
        <div className="max-h-[14rem] overflow-y-auto scrollbar">
          <p className={`text-sm ${isMore ? "" : "line-clamp-3"}`}>
            {children}
          </p>
        </div>
        <div className="flex justify-end -translate-x-8 items-center py-2">
          <p
            className="hover:underline cursor-pointer"
            onClick={() => setIsMore(!isMore)}
          >
            {isMore ? "Less" : "More"}
          </p>
        </div>
      </div>
    </>
  );
}

Paragraf.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Paragraf;
