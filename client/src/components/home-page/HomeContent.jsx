import React from 'react';
import HomeWelcome from './HomeWelcome';
import HomeBraceletImage from './HomeBraceletImage';

function HomeContent() {
  return (
    <div className="overflow-hidden flex-col flex lg:flex-row w-full bg-white">
      <div className="lg:w-1/2 w-full bg-white">
        <HomeWelcome />
      </div>
      <div className="lg:w-1/2 h-full bg-white">
        <HomeBraceletImage />
      </div>
    </div>
  );
}

export default HomeContent;