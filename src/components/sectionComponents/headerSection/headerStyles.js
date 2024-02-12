import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const StyledImage = styled.img`

  @media (min-width: 768px) {
    width: 400px; 
    margin: 0;
  }

  @media (max-width: 767px) {
    width: 300px;
  }
`;

export const Links = styled.nav`
  display: flex;
  gap: 32px;
  text-decoration: none;
  color: #ccc;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
  }
`;

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: none; 
  cursor: pointer;
  position: relative;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1); 
  }

  &:first-child {
    color: #99761c; 
  }

  &::before, &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #99761c; 
    transition: width 0.3s, transform 0.3s; 
    transform-origin: left; 
  }

  &:hover::before {
    width: 100%;
  }

  &:hover::after {
    width: 100%;
    transition-delay: 0.3s; 
  }

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    color: #ccc;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isOpen ? 'block' : 'none')};

  @media (min-width: 769px) {
    display: none;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 27%;
  left: 16%;
  transform: translate(-50%, -50%);
  background-color: black;
  padding: 20px;
  color: #ccc;
  display: flex;
  flex-direction: column;
}
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 12px;
  color: #ccc;
  font-size: 20px;
  cursor: pointer;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const StyledIcons = styled.div`
  display: flex;
  gap: 12px;
  font-size: 20px;
  cursor: pointer;
  align-items: center;
`;

export const Icon = styled.span`
  transition: color 0.3s, transform 0.3s;
  color: #ccc;

  &:hover {
    color: ${props => props.hoverColor}; 
    transform: scale(1.2); 
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 93px;
  left: 25px;
  color: white;
  font-size: 24px;
`;