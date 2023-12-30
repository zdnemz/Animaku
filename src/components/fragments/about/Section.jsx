import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <div className="my-4">
      <h1 className="text-3xl font-bold mb-5">{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
