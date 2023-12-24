import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCartPlus, FaUserAlt } from "react-icons/fa";

import useFetch from "../../../hooks/useFetch";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Cart from "../../Cart/Cart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const { data } = useFetch("/carts");

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className=" bg-base-100 z-50 border-b-2 sticky top-0">
      <div className="navbar bg-base-100 container mx-auto pb-3">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <div className=" lg:flex justify-center gap-4">
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>
              </div>
            </ul>
          </div>
          <Link to="/">
            <div className=" flex items-center">
              <h1 className="text-xl lg:text-3xl font-bold text-black">Logo</h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5 text-lg">
            <li>
              <NavLink className="rounded-sm" to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className="rounded-sm" to="/products">
                Products
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-7 relative">
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <div onClick={() => setOpen(!open)} className=" relative">
                <FaCartPlus size={25} />
                <p className=" absolute -top-[10px] -right-[20px] text-lg text-white font-medium bg-black rounded-full w-5 h-5 flex items-center justify-center">
                  {data?.length}
                </p>
              </div>
            </DropdownTrigger>
            <DropdownMenu
              className=" bg-gray-100"
              closeOnSelect={false}
              variant="faded"
              aria-label="Static Actions"
            >
              <DropdownItem className=" w-[400px] h-full">
                <Cart></Cart>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
              {user ? (
                <img
                  className=" rounded-full w-12 h-12 border-2 p-1 border-black"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <NavLink to="/login">
                  <FaUserAlt size={20} />
                </NavLink>
              )}
            </PopoverTrigger>
            {user && (
              <PopoverContent>
                <div onClick={handleLogOut}>
                  {user && <NavLink>logOut</NavLink>}
                </div>
              </PopoverContent>
            )}
          </Popover>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
