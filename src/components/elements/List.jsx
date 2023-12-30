import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const List = ({ children, link, onClick, breakline, className }) => {
  return (
    <>
      <Link to={link || ""}>
        <li
          className={`py-1 px-2 hover:bg-accent-200 hover:text-primary-100 dark:hover:bg-primary-100 dark:hover:text-accent-100 duration-150 cursor-pointer rounded-md ${className}`}
          onClick={onClick}
        >
          {children}
        </li>
      </Link>
      {breakline && <hr className="w-full border-primary-100" />}
    </>
  );
};

List.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  onClick: PropTypes.func,
  breakline: PropTypes.bool,
  className: PropTypes.string,
};

export default List;
