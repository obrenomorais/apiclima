import React from 'react';
import {
  HeaderContainer,
  HeaderImage,
  HeaderLinks,
  HeaderNav,
  HeaderPhrase,
} from './styled';

import imagem from '../../assets/Por-Agua-Abaixo.jpg';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderPhrase>Frase</HeaderPhrase>

      <HeaderNav>
        <HeaderLinks href="#">link1</HeaderLinks>
        <HeaderLinks href="#">link2</HeaderLinks>
      </HeaderNav>

      <HeaderImage src={imagem} />
    </HeaderContainer>
  );
}
