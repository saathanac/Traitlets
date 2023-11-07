import React from 'react';
import HomeHeader from './home-page/HomeHeader';
import HomeContent from './home-page/HomeContent';

function HomePage() {
  return (
    <div className='absolute bg-gray-200 h-[100%] w-full'>
      <HomeHeader/>
      <HomeContent/>
    </div>
  );
}

export default HomePage;
