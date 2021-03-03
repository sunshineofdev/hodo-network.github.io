import React, { FC } from "react";
import { FeaturedNfts, Hero } from "../../components";
import { countries } from "../../data/countries";
import { monuments } from "../../data/monuments";
import { capitals } from "../../data/capitals";
import { NavLink } from "react-router-dom";

const featured = capitals;

const Home: FC = () => (
  <>
    <Hero />
    <div className='p-4 sm:p-8'>
      <div className='mt-4 mx-auto max-w-md sm:max-w-lg lg:max-w-7xl'>
        <div className='flex justify-between mb-6'>
          <h2 className='font-bold text-xl dark:text-white'>
            Available in your area
          </h2>
          <NavLink to='/browse' className='text-indigo-700 font-medium flex'>
            <span className='whitespace-nowrap'>View All</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-6'>
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </NavLink>
        </div>
        {countries.length > 0 ? (
          <FeaturedNfts items={featured} />
        ) : (
          <div>No gNFTs available in your area.</div>
        )}
      </div>

      {countries.length > 0 && (
        <div className='mt-12 mx-auto max-w-md sm:max-w-lg lg:max-w-7xl'>
          <div className='flex justify-between mb-6'>
            <h2 className='font-bold text-xl dark:text-white'>Countries</h2>
            <NavLink to='/browse' className='text-indigo-700 font-medium flex'>
              <span className='whitespace-nowrap'>View All</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-6'>
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </NavLink>
          </div>
          <FeaturedNfts items={countries} />
        </div>
      )}

      {capitals.length > 0 && (
        <div className='mt-12 mx-auto max-w-md sm:max-w-lg lg:max-w-7xl'>
          <div className='flex justify-between mb-6'>
            <h2 className='font-bold text-xl dark:text-white'>
              Capital Cities
            </h2>
            <NavLink to='/browse' className='text-indigo-700 font-medium flex'>
              <span className='whitespace-nowrap'>View All</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-6'>
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </NavLink>
          </div>
          <FeaturedNfts items={capitals} />
        </div>
      )}

      {monuments.length > 0 && (
        <div className='mt-12 mx-auto max-w-md sm:max-w-lg lg:max-w-7xl'>
          <div className='flex justify-between mb-6'>
            <h2 className='font-bold text-xl dark:text-white flex-shrink-0'>
              Monuments
            </h2>
            <NavLink to='/browse' className='text-indigo-700 font-medium flex'>
              <span className='whitespace-nowrap'>View All</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-6'>
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </NavLink>
          </div>
          <FeaturedNfts items={monuments} />
        </div>
      )}
    </div>
  </>
);

export default Home;
