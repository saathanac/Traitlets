import React from 'react';
import SelectionsDisplay from './builder-page/SelectionsDisplay';
import TopDisplay from './builder-page/TopDisplay';

function HomePage() {
  return (
    <div className='absolute bg-gray-200 h-[100%] w-full'>
      <TopDisplay/>
      <SelectionsDisplay/>
    </div>
  );
}

export default HomePage;