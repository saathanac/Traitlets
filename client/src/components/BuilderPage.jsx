import React from 'react';
import SelectionsDisplay from './builder-page/SelectionsDisplay';
import TopDisplay from './builder-page/TopDisplay';
import HomeHamburger from './home-page/HomeHamburger';

function BuilderPage() {
  return (
    <div className='fixed absolute bg-gray-200 min-h-screen w-full'>
      <div className='absolute top-2 right-2 z-50'>
        <HomeHamburger/>
      </div>
      <TopDisplay/>
      <SelectionsDisplay/>
    </div>
  );
}

export default BuilderPage;