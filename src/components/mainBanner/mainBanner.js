import React, { useState, useEffect } from 'react';
import { ParallaxWrapper, ParallaxContent } from "./mainBannerStyles"
import SpotifyCard from '../recicleComponents/spotifyCard/spotifyCard';
import adriSpotify from '../../assets/adri-spotify.png'

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
        <SpotifyCard
          imageUrl={adriSpotify}
          title="O mundo dá voltas"
          description="Adriana Real"
          link="https://open.spotify.com/intl-pt/album/58IuINo4QajtdnLjB0DUh5"
        />
      </ParallaxContent>
    </ParallaxWrapper>
  );
};

export default MainBanner;