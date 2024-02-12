import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: black;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor e opacidade do overlay */
  z-index: 1; /* Garante que o overlay esteja acima da imagem */
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const Text = styled.p`
  color: #ccc;  
  font-size: 16px;
  line-height: 1.5;
  font-family: 'Roboto',sans-serif;
  margin: 50px;
  text-align: end;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Logo = styled.div`
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;
