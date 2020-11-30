const lugarParaHistorias = document.querySelector("#lugarParaHistorias");
const funcionMostrar = (soyElNumero) => {
  numeroDelArray = soyElNumero.path[2].dataset.identificador;

  const lugarParaPonerHistorias = document.querySelector(
    "#lugarParaPonerHistorias"
  );
  const historiaNueva = (foto) => {
    return `
        <div class="cosoNuevo">
        <img class="fotoHistoria" id="historiaNueva" src="${foto}" alt="">
    </div>
    `;
  };
  const insertarHistoria = (historiaParaMostrar) => {
    const insertarHistoria = anadirHistoria(historiaParaMostrar);
    lugarParaPonerHistorias.appendChild(insertarHistoria);
  };
  const anadirHistoria = (foto) => {
    const elemento = document.createElement("history");
    elemento.innerHTML = historiaNueva(foto);
    return elemento;
  };

  function mostrarHistoria() {
    const ajax = new XMLHttpRequest();

    ajax.open("GET", "historias.json");

    ajax.addEventListener("load", ajaxCallback);

    ajax.send();

    function cambiarSrc(src) {
      historiaSeleccionada = document.querySelector("#historiaNueva");
      historiaSeleccionada.src = src;
    }

    function ajaxCallback() {
      if (ajax.status === 200) {
        const respuestaAjax = ajax.response;
        const respuestaParseada = JSON.parse(respuestaAjax);
        const publicaciones = respuestaParseada.data;
        let a = numeroDelArray - 2;
        bucleHistorias();
        setInterval(cambiarHIstoria, 1000);

        function bucleHistorias() {
          a++;

          const arrayFotos = publicaciones[a].historia;
          console.log(arrayFotos);
          insertarHistoria(arrayFotos);
        }

        function cambiarHIstoria() {
          a++;

          const arrayFotos = publicaciones[a].historia;

          cambiarSrc(arrayFotos);
        }
      }
    }
  }
  mostrarHistoria();
};
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
        map_historias[i].addEventListener("click", function (hola) {
          funcionMostrar(hola);
        });
      }

      map_historias.forEach((element) => {
        lugarParaHistorias.appendChild(element);
      });
    }
  }
};
crear_historia();
