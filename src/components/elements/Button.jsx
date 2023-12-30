import PropTypes from "prop-types";

const Button = ({ children, onClick, className, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`text-accent-100 font-bold py-1 px-4 rounded-md ${className} ${
        disabled
          ? "bg-accent-300 dark:bg-primary-200"
          : "bg-secondary-100 hover:bg-secondary-300 duration-150 "
      }`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
