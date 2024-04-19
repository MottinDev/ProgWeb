import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Todos } from './views/todo/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Todos/>
  </React.StrictMode>,
)
