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
      console.log("cambie");
    }

    function ajaxCallback() {
      if (ajax.status === 200) {
        const respuestaAjax = ajax.response;
        const respuestaParseada = JSON.parse(respuestaAjax);
        const publicaciones = respuestaParseada.data;
        let a = numeroDelArray - 2;
        bucleHistorias();
        console.log(publicaciones.length);

        let intervalo = setInterval(cambiarHistoria, 3000);
        intervalo;
        function bucleHistorias() {
          a++;

          const arrayFotos = publicaciones[a].historia;
          console.log(arrayFotos);
          insertarHistoria(arrayFotos);
        }

        function cambiarHistoria() {
          if (publicaciones.length > a) {
            a++;
            console.log(a);
            console.log(publicaciones.length);

            const arrayFotos = publicaciones[a].historia;

            cambiarSrc(arrayFotos);
          } else {
            console.log("soy mayor");
            clearInterval(intervalo);
            cerrarHistorias();
            cerrarHistorias();
          }
        }
      }
    }
  }
  mostrarHistoria();
};
