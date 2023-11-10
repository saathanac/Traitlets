import React from 'react';
import HomeNavbar from './home-page/HomeNavbar';
import HomeContent from './home-page/HomeContent';

function HomePage() {
  return (
    <div className='absolute bg-gray-200 h-[100%] w-full'>
      <HomeNavbar />
      <HomeContent/>
    </div>
  );
}

export default HomePage;
