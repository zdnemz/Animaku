import PropTypes from "prop-types";

const ImageCard = (props) => {
  const { children } = props;

  return <div className="w-fit relative mb-8">{children}</div>;
};

ImageCard.propTypes = {
  children: PropTypes.node,
};

export default ImageCard;
