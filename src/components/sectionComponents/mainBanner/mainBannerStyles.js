import styled from 'styled-components';

export const ParallaxWrapper = styled.div`
  height: 100vh;
  display: flex;
  font-size: 24px;
`;

export const MainImage = styled.img`
  width: 44%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
}
`

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); 
  z-index: 1; 

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.5); 
  }
`;

export const TextContent = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Quicksand",sans-serif;
  width: 300px;
  position: absolute;
  left: 16%;
  bottom: 21%;
  background: #00000096;
  color: #ccc;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 16px;
  padding: 10px 0;
  border: 1px solid #ddbc6961;
  text-align: center;
  padding: 30px;
  cursor: pointer;
  transition: transform 0.3s;
  z-index: 2;

  &:hover {
    transform: scale(1.1); 
  }

  @media (max-width: 768px) {
    position: absolute;
    left: 10%;
    bottom: 0;
    width: 69%;
    font-size: 13px;
    padding: 20px;
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
  background: transparent;
  color: #ddbc69b8;
  font-size: 17px;
  cursor: pointer;
  border: 1px solid #ddbc69b8;

  &:hover {
    background: #bdb6b6;
    color: #193233;
  }
`
