import React from 'react';

import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h3 className='text-4xl lg:text-[42px] font-semibold leading-none mb-6'>
            Search properties to rent
          </h3>
          
        </div>
        {/* <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div> */}
      </div>
      <Search />
    </section>
  );
};

export default Banner;
