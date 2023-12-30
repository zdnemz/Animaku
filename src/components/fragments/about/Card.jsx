import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div className="p-4 my-1 text-primary bg-accent4 rounded-md shadow-inner shadow-primary bg-accent-200 dark:bg-primary-200">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
