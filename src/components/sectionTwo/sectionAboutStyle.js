import styled from 'styled-components';

export const YoutubeContainer = styled.div`
  background: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  background: black;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background: #193233;
  border: none;
  color: #ccc;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: #bdb6b6;
    color: #193233;
  }
`

export const ButtonContainer = styled.div`
  background-color: #000;
  padding-bottom: 30px;
`