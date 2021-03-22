import React from "react";
import { NavLink } from "react-router-dom";
import { Logo, DarkToggle } from "../index";
import { ReactLogo } from "../../assets";
// import ProfileLink from "../ProfileLink";
// import { user } from "../../data";
import { ROUTE_BROWSE_ALL, ROUTE_DEFAULT } from "../../constants/routes";

export default function Navbar() {
  return (
    <nav className='px-4 sm:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <NavLink
                to={ROUTE_DEFAULT}
                exact={true}
                className='flex-shrink-0 flex items-center'>
                {/* TODO: Update logo */}
                <Logo img={ReactLogo} alt='React Logo' />
                <span className='text-black dark:text-white font-medium'>
                  {process.env.REACT_APP_COMPANY}
                </span>
              </NavLink>
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              <NavLink
                to={ROUTE_DEFAULT}
                exact={true}
                className='text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-indigo-400 inline-flex items-center px-1 text-sm font-medium'
                activeClassName='text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white'>
                Home
              </NavLink>
              <NavLink
                to={ROUTE_BROWSE_ALL}
                exact={true}
                className='text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-indigo-400 inline-flex items-center px-1 text-sm font-medium'
                activeClassName='text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white'>
                Browse
              </NavLink>
            </div>
          </div>
          <div className='hidden sm:ml-6 sm:flex sm:items-center'>
            <DarkToggle />
            {/* <div className='ml-4'>
              <ProfileLink img={user.img} name={user.name} />
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
