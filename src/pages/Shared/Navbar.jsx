import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaPinterest } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContexts/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then(() => {
        alert("logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-[#5A20CB] text-[#CAD5E2]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#5A20CB] rounded-box w-52"
            >
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="mb-2">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link to="/blog">Blog</Link>
              </li>
              {user?.uid ? (
                <>
                  <li className="mr-2">
                    <Link onClick={handleLogOut}>Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="mr-2">
                    <Link to="login">Login</Link>
                  </li>
                  <li className="mr-2">
                    <Link to="register">Register</Link>
                  </li>
                </>
              )}
              <li className="mr-2">
                <Link>Dark Mode</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <span className="mr-2">
              <FaPinterest></FaPinterest>
            </span>
            Panabee.io
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="mr-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-2">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="mr-2">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="mr-2">
              <Link to="/blog">Blog</Link>
            </li>
            {user?.uid ? (
              <>
                <li className="mr-2">
                  <Link onClick={handleLogOut}>Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="mr-2">
                  <Link to="login">Login</Link>
                </li>
                <li className="mr-2">
                  <Link to="register">Register</Link>
                </li>
              </>
            )}
            <li className="mr-2">
              <Link>Dark Mode</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <>
              <span className="mr-3">{user?.displayName}</span>
              <div className="dropdown dropdown-end">
                <label className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="" />
                  </div>
                </label>
              </div>
            </>
          ) : (
            <>
              <div className="w-10 rounded-full cursor-pointer">
                <FaUserCircle size={30}></FaUserCircle>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
