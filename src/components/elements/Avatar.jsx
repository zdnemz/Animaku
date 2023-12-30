import PropTypes from "prop-types";

const Avatar = ({
  src,
  size,
  rounded,
  children,
  onClick,
  className,
  loading,
}) => {
  return (
    <div
      className={`${rounded && "rounded-full"} relative`}
      style={{ width: size || "2.25rem", height: size || "2.25rem" }}
      onClick={onClick}
    >
      {children}
      <img
        loading={loading ? "lazy" : "eager"}
        src={src}
        className={`h-full w-full object-cover ${rounded && "rounded-full"} ${
          className && className
        }`}
      />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  rounded: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  loading: PropTypes.bool,
};

export default Avatar;
