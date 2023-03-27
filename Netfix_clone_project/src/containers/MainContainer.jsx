import React, { memo } from 'react';
import MainComponent from '../components/MainComponent';

const MainContainer = memo(() => {
  return (
    <div>
      <MainComponent></MainComponent>
    </div>
  );
});

export default MainContainer;
