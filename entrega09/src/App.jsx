import React from 'react';
import MensagemNivel from './components/MensagemNivel';


const App = ()=> {

  return (
    <>
     <MensagemNivel nivel="Iniciante"/><br />
     <MensagemNivel nivel="Intermediario"/><br />
     <MensagemNivel nivel="Avançado"/><br />
    </>
  );
};

export default App
