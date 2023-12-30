import * as React from "react";
import PropTypes from "prop-types";

const Carousel = ({ children, height, width, duration, auto }) => {
  const childrens = Array.isArray(children) ? children : [children];

  const [current, setCurrent] = React.useState(0);
  const [transform, setTransform] = React.useState(0);

  React.useEffect(() => {
    setTransform(100 * current);
  }, [current]);

  React.useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        if (current < childrens.length - 1) {
          setCurrent(current + 1);
        } else {
          setCurrent(0);
        }
      }, duration || 5000);
      return () => {
        clearInterval(interval);
      };
    } else {
      return;
    }
  }, [current, auto, duration, childrens.length]);

  return (
    <div
      className={`${!height && "h-40"} ${
        !width && "w-full"
      } max-h-56 relative overflow-hidden shadow-inner rounded-lg`}
      style={{ height, width }}
    >
      <i
        className="fa-solid fa-chevron-left absolute top-1/2 translate-x-4 -translate-y-1/2 left-0 text-accent-100 z-10 hover:bg-accent-100/50 duration-150 w-6 h-6 flex justify-center items-center rounded-full cursor-pointer"
        onClick={() => {
          if (current > 0) {
            setCurrent(current - 1);
          } else {
            setCurrent(childrens.length - 1);
          }
        }}
      />
      <i
        className="fa-solid fa-chevron-right absolute top-1/2 -translate-x-4 -translate-y-1/2 right-0 text-accent-100 z-10 hover:bg-accent-100/50 duration-150 w-6 h-6 flex justify-center items-center rounded-full cursor-pointer"
        onClick={() => {
          if (current < childrens.length - 1) {
            setCurrent(current + 1);
          } else {
            setCurrent(0);
          }
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10 h-[6px] flex justify-center items-center gap-1 rounded-lg overflow-hidden">
        {childrens.map((_, index) => (
          <span
            onClick={() => setCurrent(index)}
            className={`h-full cursor-pointer rounded-md w-4 ${
              index === current
                ? "bg-accent-100/90"
                : "bg-accent-100/40 h-[5px]"
            }`}
            key={index}
          />
        ))}
      </div>
      <div
        className={`h-full transition-transform duration-300 ease-in-out flex`}
        style={{
          transform: `translateX(-${transform / childrens.length}%)`,
          width: `${childrens.length * 100}%`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  width: PropTypes.string,
  duration: PropTypes.number,
  auto: PropTypes.bool,
};

export default Carousel;
