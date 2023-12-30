import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Slider = ({ children, title, more, link }) => {
  return (
    <div className="py-2">
      <div className="py-2 font-semibold text-xl">
        <h1>{title}</h1>
      </div>
      <div className="w-full overflow-x-auto flex gap-3 scrollbar">
        {children}
        <div>
          {more && (
            <Link
              className="w-full h-[calc(100%-2rem)] rounded-md px-8 flex justify-center items-center bg-accent-200 dark:bg-primary-200"
              to={link || ""}
            >
              More...
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  more: PropTypes.bool,
  link: PropTypes.string,
};

export default Slider;
