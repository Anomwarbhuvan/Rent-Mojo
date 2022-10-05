import React from 'react';

// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className='min-h-[1600px]'>
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;
