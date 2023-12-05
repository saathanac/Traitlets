import React from 'react';

export default function HomeBraceletImage() {
  return (
    <div className="hidden lg:block justify-end max-w-4xl lg:mt-72">
      <div style={{ marginLeft: '8rem' }}>
        <img
          src="./images/three_traitlets_homepage.png"
          alt="Triatlet Background"
          style={{ maxWidth: '100%', display: 'block', margin: '12rem auto' }}
        />
      </div>
    </div>
  );
}
