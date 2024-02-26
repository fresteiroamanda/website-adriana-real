import React from 'react';
import { ParallaxWrapper, TextContent, Button, MainImage, ImageOverlay } from "./mainBannerStyles"
import mainBanner from '../../../assets/main_banner.jpg'

const MainBanner = () => {

  const handleRedirect = () => {
    const phoneNumber = '+5521969372134';
    const message = 'Olá, desejo solicitar um orçamento.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank')
  }  

  return (
    <ParallaxWrapper>
      <MainImage src={mainBanner} alt="Main Banner" />
      <ImageOverlay />
      <TextContent>
        <p>Cantora do RJ com repertório nacional eclético para os mais diversos tipos de eventos</p>
        <Button onClick={handleRedirect}>Faça seu orçamento agora</Button>
      </TextContent>
    </ParallaxWrapper>
  );
};

export default MainBanner;