import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SlSocialSpotify } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { Card, CardContainer, CardImage, CardContent, CardSubtitle, CardTitle, Icon } from './cardStyle'
import instaCard from '../../../assets/DSC_7627.jpg'
import ytCard from '../../../assets/DSC_7671.jpg'
import wapCard from '../../../assets/DSC_7618.jpg'
import spotCard from '../../../assets/DSC_7742.jpg'

const SocialMediaCard = ({ imageSrc, icon, title, subtitle, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Card ref={ref} className={inView ? 'fade-in' : ''} style={{ transitionDelay: `${delay * 0.2}s` }}>
      <CardImage src={imageSrc} alt={title} />
      <Icon>{icon}</Icon>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardContent>
    </Card>
  );
};

const SocialMediaCards = () => {
  return (
    <CardContainer>
      <SocialMediaCard
        imageSrc={instaCard}
        icon={<FaInstagram size={20} color='#E21EC8'/>}
        title="Instagram"
        subtitle="Follow us on Instagram"
        delay={1}
      />

      <SocialMediaCard
        imageSrc={ytCard}
        icon={<AiOutlineYoutube size={20} color='red'/>}
        title="YouTube"
        subtitle="Subscribe to our channel"
        delay={2}
      />

      <SocialMediaCard
        imageSrc={wapCard}
        icon={<FaWhatsapp size={20} color='0E691D'/>}
        title="WhatsApp"
        subtitle="Message us on WhatsApp"
        delay={3}
      />

      <SocialMediaCard
        imageSrc={spotCard}
        icon={<SlSocialSpotify size={20} color='#4ea74e'/>}
        title="Spotify"
        subtitle="Listen to our playlists"
        delay={4}
      />
    </CardContainer>
  );
};

export default SocialMediaCards;