import styled from 'styled-components';
import mainBanner from '../../assets/DSC_7828.jpg'
import mainBannerMobile from '../../assets/DSC_7761.jpg'

export const ParallaxWrapper = styled.div`
  height: 100vh;
  background-image: url(${mainBanner}); 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 24px;

  @media (max-width: 768px) {
    background-image: url(${mainBannerMobile});
  }
`;

export const ParallaxContent = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
  }
`;
