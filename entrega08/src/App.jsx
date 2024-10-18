import React from 'react'
import StatusUsuarios from './components/StatusUsuario'
import './App.css'

function App() {


  return (
    <>
     <h1>Verificação de Status do Usuario</h1>
     <StatusUsuarios online={true}/>
     <StatusUsuarios online={false}/>
    </>
  )
}

export default App
