import React, { useState, useEffect } from 'react';
import { ParallaxWrapper, ParallaxContent } from "./mainBannerStyles"

const MainBanner = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

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
        <h1>Seu Título Aqui</h1>
        <p>Sua Descrição Aqui</p>
      </ParallaxContent>
    </ParallaxWrapper>
  );
};

export default MainBanner;