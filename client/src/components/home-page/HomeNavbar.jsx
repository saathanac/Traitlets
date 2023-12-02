import React from 'react';
import HomeHamburger from './HomeHamburger';
import HomeLogo from './HomeLogo';

const HomeNavbar = () => {
  return (
    <nav className="fixed w-full bg-gray-800 p-4 text-white flex items-center h-30">
      <div className="flex-grow">
        <HomeLogo/>
      </div>
      <div className="flex-grow-0">
        <p className="mt-4 text-4xl font-bold text-white">Traitlets</p>
      </div>
      <div className="flex-grow flex justify-end">
        <HomeHamburger />
      </div>
    </nav>
  );
};

export default HomeNavbar;

