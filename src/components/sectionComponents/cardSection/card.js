import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { CardsWrapper, Card, Container, ContainerContent } from './cardStyle'

const SocialCard = ({ Icon, title }) => {
  return (
    <Card>
      <Icon size={30} color={'#ccc'} />
      <p>{title}</p>
    </Card>
  );
};


const Cards = () => {
  return (
    <Container>
      <ContainerContent>
        <CardsWrapper>
            <SocialCard Icon={FaInstagram} title="Instagram" />
            <SocialCard Icon={AiOutlineYoutube} title="YouTube" />
            <SocialCard Icon={CiMail} title="Contato" />
            <SocialCard Icon={BsTiktok} title="TikTok" />
        </CardsWrapper>
      </ContainerContent>
    </Container>
  );
};

export default Cards;