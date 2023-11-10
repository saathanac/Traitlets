import React, { useState } from 'react';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleMenu}
    >
      <div
        className={`hamburger-menu`}
        style={{
          width: '25px',
          height: '3px',
          backgroundColor: 'white', // Change the background color to white
          margin: '4px 0',
          transition: '0.4s',
          transform: isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : '',
        }}
      ></div>
      <div
        className={`hamburger-menu`}
        style={{
          width: '25px',
          height: '3px',
          backgroundColor: 'white', // Change the background color to white
          margin: '4px 0',
          transition: '0.4s',
          opacity: isOpen ? '0' : '1',
        }}
      ></div>
      <div
        className={`hamburger-menu`}
        style={{
          width: '25px',
          height: '3px',
          backgroundColor: 'white', // Change the background color to white
          margin: '4px 0',
          transition: '0.4s',
          transform: isOpen ? 'rotate(45deg) translate(-5px, -6px)' : '',
        }}
      ></div>
    </div>
  );
};

export default Hamburger;
