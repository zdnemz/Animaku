import PropTypes from "prop-types";

const List = ({ title, list }) => {
  return (
    <div className="py-4">
      <h1 className="text-xl font-semibold py-1">{title}</h1>
      <ul className="gap-1 grid">
        {list.map((item, index) => (
          <li className="text-opacity list-disc" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

export default List;
