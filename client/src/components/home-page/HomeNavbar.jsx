import React from 'react';
import NewHomeHamburger from './NewHomeHamburger';
import HomeLogo from './HomeLogo';

const HomeNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex items-center">
      <div className="flex-grow">
        <HomeLogo />
      </div>
      <div className="flex-grow-0">
        <p className="font-bold text-white">Traitlets</p>
      </div>
      <div className="flex-grow flex justify-end">
        <NewHomeHamburger />
      </div>
    </nav>
  );
};

export default HomeNavbar;
