import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../shared/Button";
import Button2 from "../shared/Button2";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // To store the logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a logged-in user in localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser); // If found, set user data
    }
  }, []);

  const handleLogout = () => {
    // Remove user and token from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null); // Clear user state
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="bg-[#232323] border-b border-gray-200">
      <nav className="relative px-4 flex justify-between items-center w-10/12 py-7 mx-auto bg-[#232323] h-24">
        <a
          href="#"
          className="relative text-3xl font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 transform hover:scale-110 hover:after:w-full animate-pulse tracking-widest after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-gradient-to-r from-red-500 to-red-600 after:transition-all after:duration-300 after:rounded-lg shadow-lg hover:shadow-red-500/50"
        >
          HOTELUXE
        </a>

        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Burger Icon */}
            <svg
              className="block h-8 w-8 fill-current text-gray-200 hover:text-red-500"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <ul className="hidden lg:flex lg:space-x-12">
          <li className="relative pt-3">
            <Link
              to="/"
              className="text-xl font-semibold text-white/70 hover:text-red-500 no-underline after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
          </li>
          <li className="relative pt-3">
            <Link
              to="/bookyourstay"
              className="text-xl font-semibold text-white/70 hover:text-red-500 no-underline after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Book Your Stay
            </Link>
          </li>
          <li className="relative pt-3">
            <Link
              to="/about"
              className="text-xl font-semibold text-white/70 hover:text-red-500 no-underline after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
          </li>
          <li className="relative pt-3">
            <Link
              to="/contact"
              className="text-xl font-semibold text-white/70 hover:text-red-500 no-underline after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex space-x-4">
          {user ? (
            <>
            <div className="flex-col justify-center items-center flex">

              <span className="text-white/80 text-2xl mb-1">{user}</span>
              <Button text="Logout" onClick={handleLogout} />
            </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button text="Sign In" />
              </Link>
              <Link to="/register">
                <Button2 text="Register" />
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`navbar-menu fixed inset-0 z-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-[#232323] opacity-25"
          onClick={() => setIsOpen(false)}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a href="#" className="mr-auto text-3xl font-bold leading-none">
              HOTELUXE
            </a>
            <button className="navbar-close" onClick={() => setIsOpen(false)}>
              <svg
                className="h-8 w-8 text-gray-200 cursor-pointer hover:text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="block w-full py-2 px-6 mb-2 bg-gray-50 hover:bg-gray-100 text-sm text-[#232323] hover:text-red-500 font-bold rounded-xl transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/bookyourstay"
                className="block w-full py-2 px-6 mb-2 bg-gray-50 hover:bg-gray-100 text-sm text-[#232323] hover:text-red-500 font-bold rounded-xl transition duration-200"
              >
                Book Your Stay
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block w-full py-2 px-6 mb-2 bg-gray-50 hover:bg-gray-100 text-sm text-[#232323] hover:text-red-500 font-bold rounded-xl transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block w-full py-2 px-6 mb-2 bg-gray-50 hover:bg-gray-100 text-sm text-[#232323] hover:text-red-500 font-bold rounded-xl transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-6">
            {user ? (
              <button
                onClick={handleLogout}
                className="block w-full py-2 px-6 mb-2 bg-gray-50 hover:bg-gray-100 text-sm text-[#232323] hover:text-red-500 font-bold rounded-xl transition duration-200"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="block w-full py-2 px-6 mb-2 bg-gray-50 hover:bg-gray-100 text-sm text-[#232323] hover:text-red-500 font-bold rounded-xl transition duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="block w-full py-2 px-6 bg-red-500 hover:bg-red-600 text-sm text-white/70 font-bold rounded-xl transition duration-200"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
