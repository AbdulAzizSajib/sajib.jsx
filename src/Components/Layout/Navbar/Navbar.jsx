import { Link } from "react-scroll";

import SliderToggle from "../../Toggle/SliderToggle";
import useTheme from "../../Hooks/useTheme";

const Navbar = () => {
  const { theme } = useTheme();
  const navLink = (
    <>
      <li>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div
      className={`fixed top-0 left-0 z-50 flex justify-between w-full pl-10 pr-10 navbar transition-colors ${
        theme === "light" ? "  bg-base-100" : "bg-zinc-900"
      } `}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a
          className={`text-xl font-bold ${
            theme === "light" ? "text-black" : "text-white"
          } `}
        >
          SAJIB.jsx
        </a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul
          className={`px-1 menu menu-horizontal  ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          {navLink}

          <SliderToggle></SliderToggle>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
