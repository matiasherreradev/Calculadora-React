import './App.css';
import casio from "./imagenes/casio.png";
import Boton from "./componentes/Boton.js";
import React from 'react';
import Pantalla from "./componentes/Pantalla.js";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate} from "mathjs";

function App() {

const [input, setInput] = useState ("");

const agregarInput = val => {
setInput(input+ val);
};

const calcularResultado = () => {
  if (input) {
    setInput(evaluate(input));
  } else {
    alert("Por favor ingrese valores para realizar la operacion");
  }
};

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={casio}
          className="freecodecamp-logo"
          alt="logo de casio" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input = {input}/>
      <div className="fila">
        <Boton manejarClic = { agregarInput }>7</Boton>
        <Boton manejarClic = { agregarInput }>8</Boton>
        <Boton manejarClic = { agregarInput }>9</Boton>
        <Boton manejarClic = { agregarInput }>/</Boton>    
        </div> 
        <div className="fila">
        <Boton manejarClic = { agregarInput }>4</Boton>
        <Boton manejarClic = { agregarInput }>5</Boton>
        <Boton manejarClic = { agregarInput }>6</Boton>
        <Boton manejarClic = { agregarInput }>*</Boton>  
        </div>
        <div className="fila">
        <Boton manejarClic = { agregarInput }>1</Boton>
        <Boton manejarClic = { agregarInput }>2</Boton>
        <Boton manejarClic = { agregarInput }>3</Boton>
        <Boton manejarClic = { agregarInput }>-</Boton>        
        </div>
        <div className="fila">
        <Boton manejarClic = { agregarInput }>0</Boton>
        <Boton manejarClic = { agregarInput }>.</Boton>
        <Boton manejarClic = { calcularResultado }>=</Boton>
        <Boton manejarClic = { agregarInput }>+</Boton>     
        </div>
        <div className="fila">
          <BotonClear manejarClear = {() => setInput("")}>
            CLEAR
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
