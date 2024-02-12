import React from 'react';
import { GalleryContainer, Image } from './gallerySection'

const Gallery = ({ imagens }) => {
  return (
    <GalleryContainer>
      {imagens.map((imagem, index) => (
        <Image key={index} src={imagem} alt={`Imagem ${index + 1}`} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;