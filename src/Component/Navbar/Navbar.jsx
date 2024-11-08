import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl text-[#131313] font-bold">Book Byte</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-xl">
            <NavLink to="/" className={({isActive})=>isActive?'text-[#23BE0A] font-bold':'text-[#131313CC]'}>Home</NavLink>
            <NavLink to="/listed" className={({isActive})=>isActive?'text-[#23BE0A] font-bold':'text-[#131313CC]'}>Listed Books</NavLink>
            <NavLink to="/pages" className={({isActive})=>isActive?'text-[#23BE0A] font-bold ':'text-[#131313CC]'}>Pages to Read</NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-4 ">
          <a className="btn bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
        </div>
      </div>
    );
};

export default Navbar;