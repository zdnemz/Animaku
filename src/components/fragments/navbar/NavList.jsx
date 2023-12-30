import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <div className="hidden md:flex gap-4 justify-center items-center">
      <Link
        to={"/"}
        className="font-semibold hover:text-accent-300 duration-150"
      >
        Home
      </Link>
      <Link
        to={"/about"}
        className="font-semibold hover:text-accent-300 duration-150"
      >
        About
      </Link>
      <Link
        to={"/profile"}
        className="font-semibold hover:text-accent-300 duration-150"
      >
        Profile
      </Link>
    </div>
  );
};

export default NavList;
