import React from "react";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <main className='border-b border-gray-200 dark:border-gray-700 px-4 sm:px-8'>
      <div className='mx-auto max-w-7xl w-full py-8 md:py-12 lg:pt-16 lg:pb-20 text-center lg:text-left'>
        <h1 className='tracking-tight font-extrabold text-gray-900 dark:text-white text-4xl sm:text-5xl xl:text-6xl'>
          <span>Hodo </span>
          <span className='text-indigo-600 dark:text-white'>Network</span>
        </h1>
        <p className='mt-3 mx-auto text-lg text-gray-500 dark:text-gray-400 sm:text-xl md:mt-5'>
          Welcome to the first marketplace for Georeferenced Non-Fungible Tokens
          (gNFT).
        </p>
        <div className='mt-8 sm:flex sm:justify-center lg:justify-start'>
          <div className='rounded-md shadow'>
            <NavLink
              to='/browse'
              className='w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-6'>
              Start Browsing
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}