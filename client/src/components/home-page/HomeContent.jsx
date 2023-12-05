import React from 'react';
import HomeWelcome from './HomeWelcome';
import HomeBraceletImage from './HomeBraceletImage';

function HomeContent() {
  return (
    <div className="flex w-full">
      <div className="lg:w-1/2 w-full h-full bg-white">
        <HomeWelcome />
      </div>
      <div className="lg:w-1/2 bg-white">
        <HomeBraceletImage />
      </div>
    </div>
  );
}

export default HomeContent;