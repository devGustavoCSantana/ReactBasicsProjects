// src/App.jsx
import React from 'react';
import Saudacao from './components/Saudacao';

function App() {
  const usuarioAutenticado = true;

  return (
    <div>
      <Saudacao autenticado={usuarioAutenticado} />
    </div>
  );
}

export default App;



