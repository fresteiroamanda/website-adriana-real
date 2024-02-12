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
      <ParallaxContent />
    </ParallaxWrapper>
  );
};

export default MainBanner;