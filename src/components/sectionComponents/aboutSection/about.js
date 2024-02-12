import React from "react";
import { Container, ImageContainer, Image, TextContainer, Text, Overlay, Logo } from "./aboutStyle"
import logo from "../../../assets/logo-transparent.png"

const About = ({ imagemSrc, texto }) => {
  return (
    <Container>
      <ImageContainer>
        <Overlay />
        <Image src={imagemSrc} alt="Imagem" />
      </ImageContainer>
      <TextContainer>
        <Text>{texto}</Text>
        <Logo>
          <img src={logo} width="250px" alt="Logo" />
        </Logo>
      </TextContainer>
    </Container>
  );
};

export default About;