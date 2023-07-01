import React from 'react';
import { Button, ButtonConteiner } from './styled';

export default function ButtonPrimary({ nome, sobrenome }) {
  return (
    <ButtonConteiner>
      <Button>{nome}</Button>
    </ButtonConteiner>
  );
}
