import { styled } from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d5f6e0;
  flex-direction: column;
  padding-top: 100px;
  gap: 5vw;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 70%;
  height: 50px;
  //border: 1px solid black;
  gap: 5px;
  padding-right: 2px;
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 7px;
`;

export const CardContainer = styled.div`
  width: 70%;
  background-color: green;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const CardContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
`;

export const CardContainerInfoBotton = styled.div`
  width: 50%;
  background-color: blueviolet;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;
