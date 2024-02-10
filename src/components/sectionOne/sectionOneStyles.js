import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Definindo a altura total da tela */
`;

export const MainContent = styled.div`
  flex: 1; /* Faz com que o conteúdo principal ocupe todo o espaço restante */
  overflow: auto; /* Adicionando scroll se necessário */
`;