import { useState } from "react";
import Logo from "./images/SHOPCO.svg";
import User from "./images/User.svg";
import Cart from "./images/Shop.svg";
import Menu from "./images/Menu.svg";
import { IconButton, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { selectUser } from "./store/features/userSlice";

type Props = {};

function Navbar({}: Props) {
  const customFontStyle = {
    fontFamily: "Plus Jakarta Sans, sans-serif",
  };

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const closeDropdown = () => {
    setIsNavOpen(false);
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  const cart = useSelector((state: any) => state.cart);

  const totalQuantity = cart.cartItems.reduce(
    (total: number, item: any) => total + item.cartQuantity,
    0
  );

  return (
    <nav className="flex bg-white justify-between p-6 w-[100%]">
      <div className="flex gap-3 md:gap-9 xl:gap-24 lg:pl-20 items-center">
        <img
          onClick={handleNavOpen}
          className="flex md:hidden"
          src={Menu}
          alt="Menu"
        />
        <Link to="/">
          <img
            className="w-[130px] 2xl:w-[170px] md:w-[159px] cursor-pointer"
            src={Logo}
            alt="Company Logo"
          />

          {isNavOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-white opacity-90 z-50">
              <div className="h-full flex flex-col justify-center items-center">
                <button
                  onClick={closeDropdown}
                  className="absolute top-3 right-5 cursor-pointer"
                >
                  <CloseIcon />
                </button>
                <ul className="text-2xl font-semibold flex flex-col items-center">
                  <li className="py-4 hover:text-blue-500 transition duration-300">
                    <Link to="#topsell">Shop</Link>
                  </li>
                  <li className="py-4 hover:text-blue-500 transition duration-300">
                    <Link to="#NewArrivals">On Sale</Link>
                  </li>
                  <li className="py-4 hover:text-blue-500 transition duration-300">
                    <Link to="#NewArrivals">New Arrivals</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Link>
        <div className="hidden md:flex gap-5 lg:gap-10">
          <a href="#NewArrivals">
            <span
              style={customFontStyle}
              className="cursor-pointer 2xl:text-[17px]"
            >
              Shop
            </span>
          </a>
          <a href="#NewArrivals">
            <span
              style={customFontStyle}
              className="cursor-pointer 2xl:text-[17px]"
            >
              On Sale
            </span>
          </a>
          <a href="#NewArrivals">
            <span
              style={customFontStyle}
              className="cursor-pointer 2xl:text-[17px]"
            >
              New Arrivals
            </span>
          </a>
        </div>
      </div>
      <div className="flex gap-3">
        <Link to="/cart">
          <IconButton>
            {totalQuantity > 0 && (
              <Badge badgeContent={totalQuantity} color="error">
                <img
                  className="cursor-pointer 2xl:w-[28px]"
                  src={Cart}
                  alt="Cart"
                />
              </Badge>
            )}
            {totalQuantity === 0 && (
              <img
                className="cursor-pointer 2xl:w-[28px]"
                src={Cart}
                alt="Cart"
              />
            )}
          </IconButton>
        </Link>
        <div className="relative inline-block text-left">
          <IconButton onClick={toggleDropdown}>
            {user.photoURL ? (
              <img
                className="cursor-pointer 2xl:w-[28px] rounded-full"
                src={user.photoURL}
                alt="User"
              />
            ) : (
              <img
                className="cursor-pointer 2xl:w-[28px] rounded-full"
                src={User}
                alt="User"
              />
            )}
          </IconButton>
          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <button
                  onClick={handleSignOut}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
