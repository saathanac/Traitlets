import React from 'react';
import HomeHeader from './home-page/HomeHeader';
import HomeContent from './home-page/HomeContent';

function HomePage() {
  return (
    <div className='absolute bg-gray-200 h-[100%] w-full'>
      <h1>Hello, this is the home page!</h1>
      <HomeHeader/>
      <HomeContent/>
    </div>
  );
}

export default HomePage;
