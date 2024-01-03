import React from 'react';
import HomeNavbar from './home-page/HomeNavbar';
import HomeContent from './home-page/HomeContent';

function HomePage() {
  return (
    <div className='overflow-hidden absolute h-full w-full flex fixed'>
      <HomeNavbar/>
      <HomeContent/>
    </div>
  );
}

export default HomePage;
