import React from 'react';

import {
  SearchBarContainer,
  SearchBar,
  MainContainer,
  CardContainer,
  CardContainerInfo,
  CardContainerInfoBotton,
} from './styled';

export default function Main() {
  return (
    // width 100%
    // flex
    // jcc
    // aic

    <MainContainer>
      <SearchBarContainer>
        <SearchBar />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{' '}
        </svg>
      </SearchBarContainer>
      <CardContainer>
        <CardContainerInfo>
          <h1>Stockhol, SE</h1>
          <h1>Stockhol, SE</h1>
          <h1>"IMAGEM"</h1>
          <h1>Clear Sky</h1>
          <h1>Thusrsday 14:20 PMy</h1>
        </CardContainerInfo>
        <CardContainerInfoBotton>
          <p>item 1</p>
          <p>item 2</p>
          <p>item 3</p>
          <p>item 4</p>
          <p>item 4</p>
        </CardContainerInfoBotton>
      </CardContainer>
    </MainContainer>
  );
}
