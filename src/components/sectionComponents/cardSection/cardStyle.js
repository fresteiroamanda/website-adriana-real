import styled from 'styled-components';
import adri from '../../../assets/DSC_7742.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: black;

  @media (max-width: 768px) {
    background-image: url(${adri});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0;
  }
`

export const ContainerContent = styled.div`
  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const CardsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 200px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #99761c;
  border-radius: 8px;
  text-align: center;
  display: inline-block;
  color: #ccc;
  cursor: pointer;
  transition: transform 0.3s;
  font-family: 'Roboto',sans-serif;

  &:hover {
    transform: scale(1.1); 
  }
`;

export const Title = styled.h2`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 0 20px;
  color: #99761c;
  font-family: 'Roboto',sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`