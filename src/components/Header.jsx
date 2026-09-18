import { FaFilm } from "react-icons/fa";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <section>

      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="flex p-5 justify-between  text-4xl">
            <div className="flex">
              <FaFilm></FaFilm>
              <h2 className="ml-5">Movie Explorer</h2>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Movies</a>
            </li>

            <li>
              <a>Favorites</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink className="text-2xl">Movie</NavLink>
        </div>
      </div>
    </section>
  );
};

export default Header;
