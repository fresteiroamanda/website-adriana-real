import styled from 'styled-components';

export const CardContainer = styled.a`
  display: block;
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none; 
  color: inherit; 
  background: #424141ab;
  transition: transform 0.4s;
  margin-top: 11%;
  margin-left: 10%;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    background: #ab8c3a4f;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  gap: 12px;

  @media (max-width: 768px) {
    color: #ccc;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #000;

  @media (max-width: 768px) {
    color: #ccc;
  }
`;