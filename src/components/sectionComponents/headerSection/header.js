import React, { useState } from 'react';
import logo from "../../../assets/logo-transparent.png"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { SlSocialSpotify } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { HeaderWrapper, Logo, Links, SocialMedia, StyledLink, StyledIcons, Icon, MenuToggle, Modal, ModalContent, CloseButton, StyledImage } from "./headerStyles"

const icons = [
  { Icon: FaInstagram, hoverColor: '#E21EC8', href: 'https://twitter.com' },
  { Icon: SlSocialSpotify, hoverColor: 'lightgreen', href: 'https://facebook.com' },
  { Icon: AiOutlineYoutube, hoverColor: 'red', href: 'https://instagram.com', size: 25 },
  { Icon: FaWhatsapp, hoverColor: '#0E691D', href: 'https://linkedin.com' }
];

const Header = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <HeaderWrapper>
      <Logo>
        <StyledImage src={logo} alt="Logo">
        </StyledImage>
      </Logo>
      <MenuToggle onClick={toggleModal}>
        {isModalOpen ? (
          <CloseButton onClick={toggleModal}><IoCloseOutline /></CloseButton>
        ) : (
          <CiMenuBurger />
        )}
      </MenuToggle>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClick={toggleModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <StyledLink href="#">Início</StyledLink>
            <StyledLink href="#">Redes Sociais</StyledLink>
            <StyledLink href="#">Sobre</StyledLink>
            <StyledLink href="#">Orçamento</StyledLink>
            <StyledLink href="#">Galeria</StyledLink>
          </ModalContent>
        </Modal>
      )}
      {!isModalOpen && (
        <Links>
          <StyledLink href="#">Início</StyledLink>
          <StyledLink href="#">Redes Sociais</StyledLink>
          <StyledLink href="#">Sobre</StyledLink>
          <StyledLink href="#">Orçamento</StyledLink>
          <StyledLink href="#">Galeria</StyledLink>
        </Links>
      )}
      <SocialMedia>
        {icons.map((item, index) => (
          <StyledIcons key={index} href={item.href} >
            <Icon as={item.Icon} hoverColor={item.hoverColor} style={{ fontSize: item.size }}/>
          </StyledIcons>
        ))}
      </SocialMedia>
    </HeaderWrapper>
  );
};

export default Header;