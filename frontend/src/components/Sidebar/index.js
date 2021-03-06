import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/navigation";
import { Footer, MenuClosedIcon, MenuOpenIcon } from "../index";

export default function Sidebar({ miniSidebar, toggle }) {
  return (
    <div
      className={`hidden md:flex flex-col border-r border-gray-700 dark:border-gray-800 bg-gray-800 dark:bg-gray-900 ${
        miniSidebar ? "w-20" : "w-80"
      }`}>
      <div className='h-16'>
        <div
          className={`flex items-center h-full p-3 ${
            miniSidebar && "justify-center"
          }`}>
          {miniSidebar ? (
            <button
              type='button'
              className='text-gray-200 px-4 py-3 focus:outline-none'
              aria-label='Toggle sidebar'
              onClick={toggle}>
              <MenuClosedIcon className='w-6 h-6' />
            </button>
          ) : (
            <button
              type='button'
              className='text-gray-200 px-4 py-3 focus:outline-none'
              aria-label='Toggle sidebar'
              onClick={toggle}>
              <MenuOpenIcon className='w-6 h-6' />
            </button>
          )}

          <span
            className={`-ml-1 font-bold text-xl text-white ${
              miniSidebar && "sr-only"
            }`}>
            Hodo Network
          </span>
        </div>
      </div>

      <nav aria-label='Sidebar' className='flex-1 space-y-2 px-3 py-2 sm:py-4'>
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            exact={item.exact}
            className='text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-800 flex items-center rounded-md px-4 py-3'
            activeClassName='bg-gray-900 dark:bg-gray-800 text-white'>
            <item.icon className='h-6 w-6' aria-hidden='true' />
            <span className={miniSidebar ? "sr-only" : "ml-3"}>
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>

      {!miniSidebar && <Footer />}
    </div>
  );
}
