import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'

//Lo siguiente no es una practica muy buena porque ahi le decimos a typescript "confia en mi"
const div = document.getElementById('root') as HTMLElement //*=> Inferencia de tipo de dato

createRoot(div).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Assertion not null operator || not null assertion operator (!)

//**
//!Inferencias:
// La inferencia es el proceso a lo cual se derivan 
// conclusiones a partir de premisas o hipotesis iniciales.
//  */

//**
// !Primitive types de typescript:
// number 
// string
// boolean
// null
// undefined
// */