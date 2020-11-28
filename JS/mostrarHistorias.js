const lugarParaHistorias = document.querySelector("#lugarParaHistorias");
const funcionMostrar = () => {
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
      console.log("cambie");
    }

    function ajaxCallback() {
      if (ajax.status === 200) {
        const respuestaAjax = ajax.response;
        const respuestaParseada = JSON.parse(respuestaAjax);
        const publicaciones = respuestaParseada.data;
        let a = -1;
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
          console.log(arrayFotos);
          cambiarSrc(arrayFotos);
        }
      }
    }
  }
  mostrarHistoria();
};

const historia = (publi) => {
  return `
    <div class="child">
    <div class="border">
    <img class="historia" id="historia" src="${publi.foto_usuario}" alt="">
    </div>
    <p class="textito">${publi.usuario}</p>
    </div>

    `;
};

const mapeo_historias = (publi) => {
  const elemento = document.createElement("historiasMapeadas");
  elemento.innerHTML = historia(publi);
  elemento.addEventListener("click", funcionMostrar);
  return elemento;
};

const crear_historia = () => {
  console.log("hola");
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
      map_historias.forEach((element) => {
        lugarParaHistorias.appendChild(element);
      });
    }
  }
};
crear_historia();
