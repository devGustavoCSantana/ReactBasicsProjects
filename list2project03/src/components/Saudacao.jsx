
import React from 'react';

function Saudacao({ autenticado }) {
  return autenticado ? <h1>Bem-vindo, usuário!</h1> : null;
}

export default Saudacao;

