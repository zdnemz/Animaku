import PropTypes from "prop-types";

const ImageFooter = (props) => {
  const { children, relative } = props;

  return (
    <div
      className={`${
        relative && "-translate-y-5"
      } absolute w-full flex justify-end items-center gap-3 flex-col text-xs`}
    >
      {children}
    </div>
  );
};

ImageFooter.propTypes = {
  children: PropTypes.node,
  relative: PropTypes.bool,
};

export default ImageFooter;
