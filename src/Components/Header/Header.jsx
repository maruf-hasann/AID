import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
 ShoppingCartIcon
  
} from "@heroicons/react/24/solid";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBars,
} from "react-icons/ai";
import './Header.css'
import Logo from '../../assets/Logo/pngegg.png'
import { authContext } from "../../AuthProvider/AuthProvider";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user} = useContext(authContext)
  return (
    <div className=" my_container mb-5">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <img src={Logo} alt="" width={120} />
        </Link>
        <div className="search flex items-center">
          <input
            type="text"
            placeholder="Search essentials, groceries and more..."
          />
          <AiOutlineBars
            size={25}
            className="relative right-10 text-[#008ecc]"
          />
        </div>
        {/* Menu Section */}
        <ul className="items-center hidden space-x-7 lg:flex">
          <li>
            <div className="flex gap-2">
              <AiOutlineShoppingCart size={25} className="text-[#008ecc]" />
              <h2>Cart</h2>
            </div>
          </li>{" "}
          {user ? (
            <div>
              <li className="font-semibold ">
                <Link to="/dashboard/employee">Dashboard</Link>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <div className="flex gap-2">
                  <AiOutlineUser size={25} className="text-[#008ecc]" />
                  <h2>
                    <Link to="/login">Sign Up/Sign In</Link>
                  </h2>
                </div>
              </li>
              <li>
                <div className="flex gap-2">
                  <AiOutlineUser size={25} className="text-[#008ecc]" />
                  <Link to="/login">Admin</Link>
                </div>
              </li>
            </div>
          )}
        </ul>

        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <img src={Logo} alt="" className="w-[20px]" />
                    </Link>
                  </div>
                  {/*  close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Menu */}
                <nav>
                  <ul className="items-center hidden space-x-7 lg:flex">
                    <li>
                      <div className="flex gap-2">
                        <AiOutlineShoppingCart
                          size={25}
                          className="text-[#008ecc]"
                        />
                        <h2>Cart</h2>
                      </div>
                    </li>{" "}
                    {user ? (
                      <div>
                        <li className="font-semibold ">
                          <Link to="/dashboard/employee">Dashboard</Link>
                        </li>
                      </div>
                    ) : (
                      <div>
                        <li>
                          <div className="flex gap-2">
                            <AiOutlineUser
                              size={25}
                              className="text-[#008ecc]"
                            />
                            <h2>
                              <Link to="/login">Sign Up/Sign In</Link>
                            </h2>
                          </div>
                        </li>
                        <li>
                          <div className="flex gap-2">
                            <AiOutlineUser
                              size={25}
                              className="text-[#008ecc]"
                            />
                            <Link to="/login">Admin</Link>
                          </div>
                        </li>
                      </div>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
