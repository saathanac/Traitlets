import React from 'react';
import HomeWelcome from './HomeWelcome';
import HomeBraceletImage from './HomeBraceletImage';

function HomeContent() {
  return (
    <div style={{ display: 'flex' }}>
      <HomeWelcome style={{ flex: '1' }} />
      <HomeBraceletImage style={{ flex: '1' }} />
    </div>
  );
}

export default HomeContent;
