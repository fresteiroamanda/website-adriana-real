import styled from 'styled-components';
import mainBanner from '../../../assets/DSC_7828.jpg'
import mainBannerMobile from '../../../assets/DSC_7761.jpg'

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

  @media (max-width: 768px) {
    background-image: url(${mainBannerMobile});
  }
`;

export const ParallaxContent = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const TextContent = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Quicksand",sans-serif;
  width: 400px;
  position: absolute;
  left: 10%;
  bottom: 4%;
  background: #00000096;
  color: #ddbc69b8;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 20px;
  padding: 10px 0;

  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 12px;
  width: 265px;
  margin: 0 auto;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background: #193233;
  color: #bdb6b6;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: #bdb6b6;
    color: #193233;
  }
`
