import React, { useState, useEffect } from "react";
import feather from "feather-icons";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State untuk dropdown menu

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!isOffcanvasOpen);
  };

  useEffect(() => {
    feather.replace();
  }, [isOffcanvasOpen]);

  const { user, logout } = useAuth();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle state dropdown menu
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="w-full flex justify-center bg-lavender fixed top-0 start-0 z-50">
      <div className="container md:w-3/4 w-11/12">
        <div className="my-8 flex h-9 items-center justify-between py-4">
          <div className="w-[100px] h-9 bg-darkblue"></div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <ul className="flex space-x-4 lg:space-x-8">
              <li>
                <Link to="#our-services">Our Services</Link>
              </li>
              <li>
                <Link to="#why-us">Why Us</Link>
              </li>
              <li>
                <Link to="#testimonial">Testimonial</Link>
              </li>
              <li>
                <Link to="#faq">FAQ</Link>
              </li>
            </ul>
            {user ? (
              <div className="flex md:space-x-3 space-x-1 space-y-2 items-start relative">
                <div className="rounded-full w-[38px] h-[38px] bg-[#CFD4ED]">
                  <p className="font-bold md:text-base text-sm text-center py-2">
                    {user.name[0]}
                  </p>
                </div>
                <p className="font-bold text-center">{user.name}</p>
                <button onClick={toggleDropdown}>
                  <i data-feather="chevron-down"></i>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute bg-[#f1f3ff] right-2 top-10 w-28 rounded shadow-md z-50">
                    <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                      <button
                        className="block px-5 py-2"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link to="/signin">
                <button type="button">
                  <div className="bg-limegreen rounded-md px-3 py-2 text-white">
                    Register
                  </div>
                </button>
              </Link>
            )}
          </div>
          <div className="md:hidden toggler">
            {user ? (
              <div className="flex md:space-x-3 space-x-1 space-y-2 items-start relative">
                <div className="rounded-full w-[38px] h-[38px] bg-[#CFD4ED]">
                  <p className="font-bold md:text-base text-sm text-center py-2">
                    {user.name[0]}
                  </p>
                </div>
                <p className="font-bold text-center">{user.name}</p>
                <button onClick={toggleDropdown}>
                  <i data-feather="chevron-down"></i>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute bg-[#f1f3ff] right-2 top-10 w-28 rounded shadow-md z-50">
                    <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                      <button
                        className="block px-5 py-2"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link to="/register">
                <button type="button">
                  <div className="bg-limegreen rounded-md px-3 py-2 text-white">
                    Register
                  </div>
                </button>
              </Link>
            )}
          </div>
          {isOffcanvasOpen && (
            <>
              <aside
                id="offcanvas"
                className="fixed inset-y-0 right-0 bg-neutral-01 w-1/2 p-4 z-10 lg:hidden"
              >
                <nav>
                  <div className="flex justify-between items-center p-4">
                    <div className=""></div>
                    <div className="toggler">
                      <button
                        type="button"
                        onClick={toggleOffcanvas}
                        className="text-gray-500"
                      >
                        <i data-feather="x"></i>
                      </button>
                    </div>
                  </div>
                  <ul className="flex flex-col justify-center items-start gap-8 text-sm font-semibold text-neutral-04 mt-2">
                    <li>
                      <Link to="/our-services" onClick={toggleOffcanvas}>
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/why-us" onClick={toggleOffcanvas}>
                        Why Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/testimonial" onClick={toggleOffcanvas}>
                        Testimonial
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" onClick={toggleOffcanvas}>
                        FAQ
                      </Link>
                    </li>
                  </ul>
                  {user ? (
                    <div className="flex md:space-x-3 space-x-1 space-y-2 items-start relative">
                      <div className="rounded-full w-[38px] h-[38px] bg-[#CFD4ED]">
                        <p className="font-bold md:text-base text-sm text-center py-2">
                          {user.name[0]}
                        </p>
                      </div>
                      <p className="font-bold text-center">{user.name}</p>
                      <button onClick={toggleDropdown}>
                        <i data-feather="chevron-down"></i>
                      </button>
                      {isDropdownOpen && (
                        <ul className="absolute bg-[#f1f3ff] right-2 top-10 w-28 rounded shadow-md z-50">
                          <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                            <button
                              className="block px-5 py-2"
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link to="/register">
                      <button type="button">
                        <div className="bg-limegreen rounded-md px-3 py-2 text-white">
                          Register
                        </div>
                      </button>
                    </Link>
                  )}
                </nav>
              </aside>
              <div
                id="overlay"
                className="fixed inset-0 bg-black opacity-40 lg:hidden"
                onClick={toggleOffcanvas}
              ></div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
