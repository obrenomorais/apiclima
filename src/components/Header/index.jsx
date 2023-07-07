import React from 'react';
import { HeaderContainer, HeaderImage, HeaderPhrase } from './styled';

import imagem from '../../assets/Por-Agua-Abaixo.jpg';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderPhrase>Frase</HeaderPhrase>

      <HeaderImage src={imagem} />
    </HeaderContainer>
  );
}
