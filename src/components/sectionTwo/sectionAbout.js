import React from 'react';
import SocialMediaCards from '../sectionComponents/cardSection/card';
import About from '../sectionComponents/aboutSection/about';
import driAbout from '../../assets/main_banner.jpg'
import { YoutubeContainer, Logo, Button, ButtonContainer } from './sectionAboutStyle';
import prazerAdriana from "../../assets/prazer-adriana.png"

const SectionTwo = () => {
  const handleRedirect = () => {
    const phoneNumber = '+5521969372134';
    const message = 'Olá, desejo solicitar um orçamento.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank')
  }  

  return (
    <>
      <Logo>
        <img src={prazerAdriana} width="250px" alt="Logo" />
      </Logo>
      <YoutubeContainer>
        <iframe
          width="350px"
          height="350px"
          src={`https://www.youtube.com/embed/eRw1y1MKMx0`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe 
          width="350px" 
          height="350px" 
          src={`https://www.youtube.com/embed/sac61A6FeYI`}
          title="Pôpurri MPB - Carib Carioca" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
          ></iframe>
          <iframe 
            width="350px" 
            height="350px" 
            src={`https://www.youtube.com/embed/uKStzz2DE5s`}
            title="Gira Sol - Alceu Valença" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
          ></iframe>
      </YoutubeContainer> 
      <ButtonContainer>
        <Button onClick={handleRedirect}>Faça seu orçamento agora</Button>    
      </ButtonContainer>
      <SocialMediaCards />
      <About 
        imagemSrc={driAbout}
        texto={"Prazer, Adriana Real, cantora, compositora e multiinstrumentista, venho atuando no cenário musical carioca há 9 anos, tocando em festas particulares, corporativas, bares, restaurantes, casas de show, e afins. Influenciada por grandes nomes da mpb, como: Djavan, Gilberto Gil, Elis Regina, Rita Lee, Cássia Eller, Pitty, Marina Lima, Seu Jorge, Tim Maia, Jorge Ben, dentre outros. Assim como no samba: Alcione, Arlindo Cruz, Beth Carvalho, Ivone Lara, Jorge Aragão, Zeca Pagodinho, dentre outros. Além de  ser influenciada por grandes artistas da nova mpb e rock nacional, o que faz do  meu repertório algo mais diverso, de fácil  comunicação desde um público mais jovem até adultos."}
      />
    </>
  );
};

export default SectionTwo;




