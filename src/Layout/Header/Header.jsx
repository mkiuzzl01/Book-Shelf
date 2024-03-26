import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const link = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 rounded-lg text-[#23BE0A] border-[#23BE0A] p-2"
              : "bg-white p-2"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 rounded-lg text-[#23BE0A] border-[#23BE0A] p-2"
              : "bg-white p-2"
          }
          to="/Listed_Books"
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 rounded-lg text-[#23BE0A] border-[#23BE0A] p-2"
              : "bg-white p-2"
          }
          to="/Pages_to_Read"
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            {link}
          </ul>
        </div>
        <Link to="/">
          <span className="btn btn-ghost text-lg lg:text-2xl font-bold">
            Book Vibe
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-4 menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <Link>
          <span className="btn bg-[#23BE0A] text-white">Sign In</span>
        </Link>
        <Link>
          <span className="btn bg-[#59C6D2] text-white">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
