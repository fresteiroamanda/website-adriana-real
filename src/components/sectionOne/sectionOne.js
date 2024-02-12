import React from 'react';
import Header from '../sectionComponents/headerSection/header';
import Parallax from '../sectionComponents/mainBanner/mainBanner';
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