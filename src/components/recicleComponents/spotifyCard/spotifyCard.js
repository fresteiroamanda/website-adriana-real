import React from 'react';
import { CardContainer, Image, Content, Title, Description } from  './spotifyCardStyle'
import { SlSocialSpotify } from "react-icons/sl";

const SpotifyCard = ({ imageUrl, title, description, link }) => {
  return (
    <CardContainer href={link} target="_blank">
      <Image src={imageUrl} alt={title} />
      <Content>
        <Title>
          <SlSocialSpotify color='#81b71a'/>
          {title}
        </Title>
        <Description>{description}</Description>
      </Content>
    </CardContainer>
  );
};

export default SpotifyCard;