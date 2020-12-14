const obtenerInfo = () => {
  const ajax = new XMLHttpRequest();

  ajax.open("GET", "publicacion.json");

  ajax.addEventListener("load", ajaxCallback);

  ajax.send();

  function ajaxCallback() {
    if (ajax.status === 200) {
      const respuesta = ajax.response;
      const respuestaParseada = JSON.parse(respuesta);
      const publicaciones = respuestaParseada.data;
      crear_publicacion(publicaciones);
    }
  }
};
obtenerInfo();
