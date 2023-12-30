import Button from "./Button";
import PropTypes from "prop-types";

export const Confirm = ({ children, setIsOpen, confirm }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 z-50 bg-accent-100/50 dark:bg-primary-100/90">
      <div className="relative w-full h-full flex justify-center items-center">
        <div
          className="w-full h-full absolute inset-0"
          onClick={() => setIsOpen && setIsOpen(false)}
        ></div>
        <div className="bg-accent-200 dark:bg-primary-200 p-8 rounded-lg shadow-lg flex flex-col gap-6 z-10">
          <div className="text-center text-lg">
            {children || "Are you sure?"}
          </div>
          <div className="flex gap-6 justify-between">
            <Button onClick={() => setIsOpen && setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirm}>Confirm</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Confirm.propTypes = {
  children: PropTypes.node,
  setIsOpen: PropTypes.func,
  confirm: PropTypes.func,
};

export default Confirm;
