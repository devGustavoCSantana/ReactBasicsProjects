import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Garagem from './components/Garagem'
import MyForm from './components/MyForm'
import MyForm02 from './components/MyForm02'
import MyForm03 from './components/MyForm03'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Garagem />
    <MyForm />
    <MyForm02 />
    <MyForm03 />
  </StrictMode>,
)
