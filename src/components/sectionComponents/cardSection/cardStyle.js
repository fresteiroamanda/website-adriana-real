import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background: #000;
  padding-top: 30px;
`;

export const Card = styled.div`
  width: 200px;
  height: 250px;
  background-color: #f5f5f5;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.5s ease;
  opacity: 0;
  transform: translateX(50px);
  cursor: pointer;
  background: black;
  border: 1px solid #ccc;

  &.fade-in {
    opacity: 1;
    transform: translateX(0);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #ddbc69b8;
`;

export const CardSubtitle = styled.p`
  margin: 5px 0 10px 0;
  font-size: 14px;
  color: #ccc;
`;

export const Icon = styled.div`
  position: absolute;
  top: 9px;
  right: 15px;
`;