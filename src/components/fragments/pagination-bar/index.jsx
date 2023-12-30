import * as React from "react";
import Button from "../../elements/Button";
import PropTypes from "prop-types";

const PaginationBar = ({ datas }) => {
  const currentPage = datas?.current_page ?? 1;
  const [inputPage, setInputPage] = React.useState(currentPage);
  const queryParams = new URLSearchParams(location.search);

  return (
    <div className="flex justify-center gap-2 items-center">
      <Button
        disabled={currentPage <= 1}
        onClick={() => {
          if (currentPage > 1) {
            queryParams.set("page", currentPage - 1);
            window.location.href = `${location.pathname}?${queryParams}`;
          }
        }}
        className="text-sm"
      >
        Prev
      </Button>
      <div className="flex justify-center items-center gap-2">
        <p>page</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (inputPage) {
              if (inputPage > datas?.last_visible_page) {
                setInputPage(datas?.last_visible_page);
                return;
              }
              if (inputPage < 1) {
                setInputPage(1);
                return;
              }
              if (inputPage === currentPage) {
                return;
              }

              queryParams.set("page", inputPage);
              window.location.href = `${location.pathname}?${queryParams}`;
            }
          }}
        >
          <input
            type="number"
            className="w-8 outline-none dark:bg-primary-100 bg-accent-100 text-center"
            value={inputPage}
            onChange={(e) => {
              setInputPage(e.target.value ? Number(e.target.value) : "");
            }}
          />
        </form>
        <p>of</p>
        <p>{datas?.last_visible_page}</p>
      </div>
      <Button
        disabled={currentPage >= (datas?.last_visible_page || 1)}
        onClick={() => {
          if (currentPage < (datas?.last_visible_page || 1)) {
            queryParams.set("page", currentPage + 1);
            window.location.href = `${location.pathname}?${queryParams}`;
          }
        }}
        className="text-sm"
      >
        Next
      </Button>
    </div>
  );
};

PaginationBar.propTypes = {
  datas: PropTypes.object.isRequired,
};

export default PaginationBar;
