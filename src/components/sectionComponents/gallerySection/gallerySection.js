import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); 
  grid-auto-rows: 400px; 
  grid-gap: 10px; 
  background: black;
  padding: 40px;

  @media (max-width: 768px) {
    margin: 20px 0 0 0;
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%; 
  object-fit: cover;
`;
