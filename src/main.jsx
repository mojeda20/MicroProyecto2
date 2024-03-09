import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa el componente App

// Selecciona el elemento del DOM donde tu aplicación React será montada
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Crea una raíz de ReactDOM

// Renderiza tu componente App dentro de la raíz de ReactDOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
