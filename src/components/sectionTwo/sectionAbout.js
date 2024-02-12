import React from 'react';
import Cards from '../sectionComponents/cardSection/card';
import About from '../sectionComponents/aboutSection/about';
import driAbout from '../../assets/DSC_7761.jpg'
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
      <Cards />
      <About 
        imagemSrc={driAbout}
        texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Facilisis leo vel fringilla est ullamcorper eget. Varius vel pharetra vel turpis nunc eget lorem dolor. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Risus nec feugiat in fermentum posuere. Odio tempor orci dapibus ultrices. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Orci eu lobortis elementum nibh tellus molestie. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Vulputate mi sit amet mauris commodo quis. Ultricies mi eget mauris pharetra et ultrices neque. Sed faucibus turpis in eu. Orci a scelerisque purus semper eget duis. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Bibendum neque egestas congue quisque egestas. Blandit massa enim nec dui. Consequat nisl vel pretium lectus quam id leo in. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum."}
      />
    </>
  );
};

export default SectionTwo;




