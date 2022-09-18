import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DocumentsContextProvider } from './context/DocumentContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DocumentsContextProvider>
    <App />
  </DocumentsContextProvider>
)
