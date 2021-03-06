import React from "react";

export default function CollectionCardEmpty() {
  return (
    <div className='flex flex-col rounded-md overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 border-dashed border border-gray-400 dark:border-gray-700'>
      <div className='flex-shrink-0 w-full'>
        <div className='h-60'></div>
      </div>
      <div className='flex-1 bg-white dark:bg-gray-800 p-4 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='text-base font-semibold text-gray-900 dark:text-gray-100 capitalize'>
            Nothing to display
          </p>
        </div>
      </div>
    </div>
  );
}
