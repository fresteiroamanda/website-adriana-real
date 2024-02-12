import React from 'react';
import { YoutubeContainer, Logo } from './sectionThreeStyles'
import Gallery from '../sectionComponents/gallerySection/gallery';
import gallery1 from '../../assets/DSC_7618.jpg'
import gallery2 from '../../assets/DSC_7627.jpg'
import gallery3 from '../../assets/DSC_7641.jpg'
import gallery4 from '../../assets/DSC_7671.jpg'
import gallery5 from '../../assets/DSC_7696.jpg'
import gallery6 from '../../assets/DSC_7708.jpg'
import logo from '../../assets/gallery.png'

const SectionThree = () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const width = isMobile ? '100%' : '100%';

  return (
    <div style={{background: "#000"}}>
      <Logo>
        <img src={logo} width="150px" alt="Logo" />
      </Logo>
      <Gallery imagens={[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]} />
    </div>
      
  );
};

export default SectionThree;

