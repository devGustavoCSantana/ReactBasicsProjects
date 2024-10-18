import { useState } from 'react'
import BotaoLogin from './components/BotaoLogin'
import './App.css'

function App() {
  const [logado, setlogado] = useState(false);

  const toggleLogin = () => {
    setlogado(!logado);
  };

  return (
    <div className='App'>
      <h1>Renderização Condicional</h1>

      <BotaoLogin logado={logado} />
      <br />
      <button onClick={toggleLogin}>
        {logado ? 'Deslogar' : 'Logar'}
      </button>
    </div>
  );
}

export default App
