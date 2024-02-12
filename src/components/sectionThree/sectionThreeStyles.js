import styled from 'styled-components';

export const YoutubeContainer = styled.section`
  display: flex;
  justify-content: center;
  background: black;
  gap: 30px;
  width: 100%;
  max-width: 560px; 
  margin: auto; 
  
  @media (max-width: 768px) {
    background : black;
    flex-direction: column;
  }  
`;

export const Logo = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 60px;
`;