import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
      <div
        className={`hamburger-menu`}
        style={{
          width: '25px',
          height: '3px',
          backgroundColor: 'white',
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
          backgroundColor: 'white',
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
          backgroundColor: 'white',
          margin: '4px 0',
          transition: '0.4s',
          transform: isOpen ? 'rotate(45deg) translate(-5px, -6px)' : '',
        }}
      ></div>

      {isOpen && (
        <div>
          <p onClick={() => handleNavigation('/checkout')}>Checkout</p>
          <p onClick={() => handleNavigation('/builder')}>Builder</p>
          <p onClick={() => handleNavigation('/')}>Home</p>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
