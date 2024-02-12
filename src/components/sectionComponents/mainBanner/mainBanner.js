import React, { useState, useEffect } from 'react';
import { ParallaxWrapper, ParallaxContent, TextContent, Button } from "./mainBannerStyles"

const MainBanner = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleRedirect = () => {
    const phoneNumber = '+5521969372134';
    const message = 'Olá, desejo solicitar um orçamento.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank')
  }  

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ParallaxWrapper>
      <ParallaxContent>
        <TextContent>
          Cantora do RJ com repertório nacional eclético para os mais diversos tipos de eventos
          <Button onClick={handleRedirect}>Faça seu orçamento agora</Button>
        </TextContent>
      </ParallaxContent>
    </ParallaxWrapper>
  );
};

export default MainBanner;