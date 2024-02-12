import React from 'react';
import logo from '../../assets/logo-transparent.png'
import { SocialMedia, StyledIcons, Icon } from '../sectionComponents/headerSection/headerStyles';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SlSocialSpotify } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
import { FooterContainer, Logo, ContactLink } from "./footerStyles"

const Footer = () => {

  const handleRedirect = () => {
    const phoneNumber = '+5521969372134';
    const message = 'Olá, desejo solicitar um orçamento.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank')
  }  
  const icons = [
    { Icon: FaInstagram, hoverColor: '#E21EC8', href: 'https://twitter.com' },
    { Icon: BsTiktok, hoverColor: '#22EBE7', href: 'https://twitter.com' },  
    { Icon: SlSocialSpotify, hoverColor: 'lightgreen', href: 'https://facebook.com' },
    { Icon: AiOutlineYoutube, hoverColor: 'red', href: 'https://instagram.com', size: 25 },
    { Icon: FaWhatsapp, hoverColor: '#0E691D', href: 'https://linkedin.com' }
  ];
  return (
    <FooterContainer>
      <Logo>
        <img src={logo} width="350px" alt="Logo" />
      </Logo>
      <SocialMedia style={{margin: "0 auto"}}>
        {icons.map((item, index) => (
          <StyledIcons key={index} href={item.href} >
            <Icon as={item.Icon} hoverColor={item.hoverColor} style={{ fontSize: item.size }}/>
          </StyledIcons>
        ))}
      </SocialMedia>
      <ContactLink onClick={handleRedirect}>Entrar em contato</ContactLink>
    </FooterContainer>
  );
};

export default Footer;
