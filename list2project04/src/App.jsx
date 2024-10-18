
import React from 'react';
import VerificaIdade from './components/VerificaIdade';

function App() {
  const idadeUsuario = 20;
  return (
    <div>
      <VerificaIdade idade={idadeUsuario} />
    </div>
  );
}

export default App;


