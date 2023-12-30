import PropTypes from "prop-types";

const Episodes = ({ eps }) => {
  return (
    <>
      {eps} Episode{eps > 1 && "s"}
    </>
  );
};

Episodes.propTypes = {
  eps: PropTypes.number,
};

export default Episodes;
