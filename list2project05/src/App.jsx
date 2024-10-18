import React from 'react';

const ListaOrdenada = () => {
  const tarefas = [
    'Comprar mantimentos',
    'Fazer exercícios',
    'Estudar React'
  ];

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ol>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ol>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ListaOrdenada />
    </div>
  );
}

export default App;
