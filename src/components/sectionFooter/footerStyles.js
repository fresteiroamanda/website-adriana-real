import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: black;
  color: #99761c;
  padding: 20px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Logo = styled.div`
  margin-bottom: 10px;
`;

export const ContactLink = styled.a`
  color: #99761c;
  font-size: 18px;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;