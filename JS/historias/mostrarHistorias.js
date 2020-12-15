const lugarParaHistorias = document.querySelector("#lugarParaHistorias");

let contador = 0;
const historia = (publi) => {
  return `
  <div class="child" data-identificador=${contador}>
    <div class="border" >
    <img class="historia" id="historia" src="${publi.foto_usuario}" alt="">
    </div>
    <p class="textito">${publi.usuario}</p>
    </div>
    
    `;
};

const mapeo_historias = (publi) => {
  contador++;
  const elemento = document.createElement("historiasMapeadas");

  elemento.innerHTML = historia(publi);
  return elemento;
};

const crear_historia = () => {
  const ajax = new XMLHttpRequest();

  ajax.open("GET", "historias.json");

  ajax.addEventListener("load", ajaxCallback);

  ajax.send();

  function ajaxCallback() {
    if (ajax.status === 200) {
      const respuesta = ajax.response;
      const respuestaParseada = JSON.parse(respuesta);
      const historias = respuestaParseada.data;
      const map_historias = historias.map(mapeo_historias);
      for (var i = 0; i < map_historias.length; i++) {
        map_historias[i].addEventListener("click", function (e) {
          pararHistoria = false;
          funcionMostrar(e);
          cambiarVisibilidad();
        });
      }

      map_historias.forEach((element) => {
        lugarParaHistorias.appendChild(element);
      });
    }
  }
};
crear_historia();
