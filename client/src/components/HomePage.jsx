import React from 'react';
import HomeNavbar from './home-page/HomeNavbar';
import HomeContent from './home-page/HomeContent';

function HomePage() {
  return (
    <div className='absolute h-full w-full flex'>
      <HomeNavbar/>
      <HomeContent/>
    </div>
  );
}

export default HomePage;
