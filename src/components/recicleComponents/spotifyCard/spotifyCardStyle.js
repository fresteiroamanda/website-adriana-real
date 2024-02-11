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
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #000;
`;