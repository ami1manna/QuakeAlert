import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LOGO from '../assets/logo.jpg';
import MENU from '../assets/menu.svg';
import LoginModel from './LoginModel';
import SignUpModal from './SignUpModal';

const activeStyle = {
  color: '#fff', // Example active text color
};

const inactiveStyle = {
  color: '#4a5568', // Example inactive text color
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Check if user is already logged in on component mount
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token); // Store token in localStorage
    setIsLoggedIn(true); // Update login state
    toggleSignInModal(); // Close the login modal
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token from localStorage
    setIsLoggedIn(false); // Update login state
    // Additional logout logic (e.g., redirect, clear user state)
  };

  const toggleSignUpModal = () => {
    setCreateAccount(!createAccount);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSignInModal = () => {
    setSignIn(!signIn);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-2 px-4">
          {/* Logo and Brand Name */}
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={LOGO} className="h-8 w-8 border-solid rounded-full" alt="QuakeAlert Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">QuakeAlert</span>
          </NavLink>

          {/* Get Started Button - Visible in Desktop */}
          {!isLoggedIn ? (
            <div className="hidden md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                onClick={toggleSignInModal}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </div>
          ) : (
            <div className="hidden md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                onClick={handleLogout}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Logout
              </button>
            </div>
          )}

          {/* Toggle Button for Mobile Menu */}
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          >
            <img src={MENU} alt="Menu" />
          </button>

          {/* Menu Items - Mobile */}
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? 'block' : 'hidden'
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-3 md:p-0 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                  style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/chart"
                  className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                  style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                >
                  Charts
                </NavLink>
              </li>

              {/* Add more NavLink items as needed */}
            </ul>

            {/* Get Started Button - Mobile */}
            {!isLoggedIn ? (
              <div className="md:hidden mt-4">
                <button
                  type="button"
                  onClick={toggleSignInModal}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </div>
            ) : (
              <div className="md:hidden mt-4">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  LogOut
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {signIn && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <LoginModel handleLogin={handleLogin} toggleSignInModal={toggleSignInModal} toggleSignUpModal={toggleSignUpModal} />
        </div>
      )}

      {/* Sign Up Modal */}
      {createAccount && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <SignUpModal toggleSignUpModal={toggleSignUpModal} />
        </div>
      )}
    </>
  );
};

export default Navbar;
