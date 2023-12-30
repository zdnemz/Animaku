import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Form = (props) => {
  const { children, title, more, clickedMore, link, errorMessage } = props;

  return (
    <>
      <div className="dark:text-accent-100 text-primary-100 bg-accent-100 dark:bg-primary-100 shadow-lg px-8 py-6 flex flex-col justify-center items-center overflow-hidden rounded-lg">
        <h1 className="font-semibold text-xl text-center my-2">{title}</h1>
        <div className="flex flex-col gap-2 justify-center items-center">
          {children}
        </div>
        <div className="mt-2 flex flex-col items-center justify-center max-w-[14rem] text-sm">
          <p>{errorMessage}</p>
          <p className="text-center mt-2">
            {more}{" "}
            <Link to={link || ""}>
              <span className="hover:underline text-secondary-100">
                {clickedMore}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  more: PropTypes.string,
  clickedMore: PropTypes.string,
  link: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default Form;
