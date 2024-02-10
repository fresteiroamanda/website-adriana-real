import styled from 'styled-components';
import mainBanner from '../../assets/DSC_7828.jpg'

export const ParallaxWrapper = styled.div`
  height: 100vh;
  background-image: url(${mainBanner}); 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 24px;
`;

export const ParallaxContent = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 100%;
`;
