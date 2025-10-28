/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

document.addEventListener("DOMContentLoaded", () => { //DOMContentLoaded para q se ejecute cuando todo el html esté cargado
  const btnContacto = document.querySelector(".contacto");

  if (btnContacto) {
    btnContacto.addEventListener("click", () => {
      window.location.href = "mailto:"; //se abre el correo del usaurio

      console.log("Botón de contacto pulsado \uD83D\uDC4D"); //+ mensajito para verificar que se ha clicado
    });
  }
});
