/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// -----------------------------
// Color del botón contacto adaptado según el color del fondo
// -----------------------------
document.addEventListener("DOMContentLoaded", () => { //DOMContentLoaded para q se ejecute cuando todo el html esté cargado
  const btnContacto = document.querySelector(".contacto");

  if (btnContacto) {
    btnContacto.addEventListener("click", () => {
      window.location.href = "mailto:"; //se abre el correo del usaurio

      console.log("Botón de contacto pulsado \uD83D\uDC4D"); //+ mensajito para verificar que se ha clicado
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".places__grid"); //selecciona el 1r elem. places__grid
  const title = document.querySelector(".places__second-title");

  grid.classList.add("animate__animated", "animate__slower"); //añado clase animate__animated al inicio y slower para q sea + lenta

  const observer = new IntersectionObserver( //para detectar cuando es visible en pantalla
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { //en caso de que sea true:
          grid.classList.add("animate__fadeInUp"); //se agrega la animación al grid
          obs.unobserve(entry.target); //sólo una vez!!
        }
      });
    },
    {
      threshold: 0.5, //se dispara cuando esté al 50% visible
    }
  );

  observer.observe(title);
});
