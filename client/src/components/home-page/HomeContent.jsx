import React from 'react';
import HomeWelcome from './HomeWelcome';
import HomeBraceletImage from './HomeBraceletImage';

function HomeContent() {
  return (
    <div className="overflow-hidden flex-col flex lg:flex-row w-full bg-white">
      <div className="w-full h-full bg-white">
        <HomeWelcome />
      </div>
    </div>
  );
}

export default HomeContent;