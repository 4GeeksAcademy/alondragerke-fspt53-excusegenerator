/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Función para inicializar la aplicación
let initializeApp = () => {
  document.querySelector("#excusa").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");

  // Agrega un evento de clic al botón para regenerar la excusa
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generateExcuse();
  });
};

// Llama a initializeApp al cargar la página
window.onload = initializeApp;

let generateExcuse = () => {
  let sujeto = [
    "mis loros",
    "las luciérnagas",
    "un grupo de patos",
    "los extraterrestres",
    "mis vecinos"
  ];
  let accion = [
    "robaron mi lámpara",
    "organizaron una procesión",
    "dieron un discurso político",
    "me extorsionaron con navajas",
    "me robaron el móvil"
  ];
  let tiempo = [
    "ayer",
    "la semana pasada",
    "hace una hora",
    "hace unos días",
    "hace dos días"
  ];
  let problema = [
    "así que no he podido volver a casa.",
    "así que no he podido llamarte.",
    "así que no he podido salir de casa.",
    "así que no encontré el regalo perfecto para tu cumpleaños.",
    "así que no puedo ir."
  ];

  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let tiempoIndex = Math.floor(Math.random() * tiempo.length);
  let problemaIndex = Math.floor(Math.random() * problema.length);

  return (
    sujeto[sujetoIndex] +
    " " +
    accion[accionIndex] +
    " " +
    tiempo[tiempoIndex] +
    " " +
    problema[problemaIndex]
  );
};
