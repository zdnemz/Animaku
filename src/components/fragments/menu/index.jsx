import * as React from "react";
import PropTypes from "prop-types";

const Menu = ({ children, icon, className }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`relative ${className}`}>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {icon || null}
      </div>
      {isOpen && (
        <>
          <div
            className="fixed w-full h-screen top-0 left-0 z-10 opacity-0 translate-y-4"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="w-fit h-fit max-h-[50vh] overflow-y-auto dark:text-primary-100 text-accent-100 bg-accent-500/80 absolute dark:bg-accent-100/80 p-4 rounded-lg right-0 selection:bg-transparent transition-opacity duration-300 z-20 translate-y-4">
            <ul className="flex flex-col gap-2">{children}</ul>
          </div>
        </>
      )}
    </div>
  );
};

Menu.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Menu;
