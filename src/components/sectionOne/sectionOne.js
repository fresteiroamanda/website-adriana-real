import React from 'react';
import Header from '../headerSection/header';
import Parallax from '../mainBanner/mainBanner';
import { AppWrapper, MainContent} from './sectionOneStyles'


const SectionOne = () => {
  return (
    <AppWrapper>
      <Header />
      <MainContent>
        <Parallax />
      </MainContent>
    </AppWrapper>
  );
};

export default SectionOne;