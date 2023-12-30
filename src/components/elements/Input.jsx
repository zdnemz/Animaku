import * as React from "react";
import PropTypes from "prop-types";

const Input = ({
  className,
  value,
  onChange,
  required,
  autoComplete,
  disabled,
  type,
  label,
}) => {
  const [input, setInput] = React.useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);

  switch (type) {
    // password input
    case "password":
      return (
        <label className={`relative my-1 ${className}`}>
          <input
            className={`px-4 py-2 bg-transparent border text-primary-100 dark:text-accent-100 dark:border-accent-100/70 border-primary-100/70 outline-none dark:focus:border-accent-100 focus:border-primary-100 rounded-lg text-sm ${
              input && "valid-input"
            }`}
            type={showPassword ? "text" : "password"}
            name={label}
            required={required}
            onChange={handleChange}
            value={value}
            disabled={disabled}
            autoComplete={autoComplete || "off"}
            spellCheck={false}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex justify-center items-center w-5">
            <i
              className={`fa-solid ${
                showPassword ? "fa-eye-slash" : "fa-eye"
              } text-sm text-primary-100/50 dark:text-accent-100/50 cursor-pointer`}
              onClick={() => setShowPassword(!showPassword)}
            />
          </span>
          <span className="ml-2 absolute inset-0 flex items-center px-2 dark:text-accent-100/50 text-primary-100/50 input-animation w-fit transition duration-200 cursor-text">
            {label}
          </span>
        </label>
      );

    // email or text input
    case "email":
    case "text":
      return (
        <label className={`relative my-1 ${className}`}>
          <input
            className={`px-4 py-2 bg-transparent border text-primary-100 dark:text-accent-100 dark:border-accent-100/70 border-primary-100/70 outline-none dark:focus:border-accent-100 focus:border-primary-100 rounded-lg text-sm ${
              input && "valid-input"
            }`}
            type={type}
            name={label}
            required={required}
            onChange={handleChange}
            value={value}
            disabled={disabled}
            autoComplete={autoComplete || "off"}
            spellCheck={false}
          />
          <span className="ml-2 absolute inset-0 flex items-center px-2 dark:text-accent-100/50 text-primary-100/50 input-animation w-fit transition duration-200 cursor-text">
            {label}
          </span>
        </label>
      );
  }
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
