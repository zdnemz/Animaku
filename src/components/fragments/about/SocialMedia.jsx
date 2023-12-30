import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SocialMedia = ({ name, children }) => {
  return (
    <Link to={`https://${name}.com/${children}`}>
      <div className="flex gap-2 justify-center items-center hover:opacity-80 transition-opacity duration-300">
        <i className={`fa-brands fa-${name} text-accent4`}></i>
        <p>{children}</p>
      </div>
    </Link>
  );
};

SocialMedia.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
};

export default SocialMedia;
