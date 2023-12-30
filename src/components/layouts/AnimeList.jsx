import PropTypes from "prop-types";

const AnimeList = ({ children, title, className }) => {
  return (
    <div className="py-2">
      <h1 className="font-semibold text-xl">{title}</h1>
      <div
        className={`py-4 grid grid-col-auto gap-x-4 gap-y-2 w-full ${
          className || ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

AnimeList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default AnimeList;
