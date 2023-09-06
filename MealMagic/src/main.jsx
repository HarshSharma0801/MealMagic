import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ItemsProvider from './ContextAPI/ItemsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <BrowserRouter>
   <ItemsProvider>
   <App />
   </ItemsProvider>
   </BrowserRouter>
    

   

 
  </React.StrictMode>,
)
