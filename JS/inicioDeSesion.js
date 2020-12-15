const fotoPerfil = document.querySelector("#profile_img");

const InicioDeSesion = () => {
  const ajax = new XMLHttpRequest();

  ajax.open("GET", "publicacion.json");

  ajax.addEventListener("load", ajaxCallback);

  ajax.send();

  function ajaxCallback() {
    if (ajax.status === 200) {
      const respuesta = ajax.response;
      const respuestaParseada = JSON.parse(respuesta);
      const usuarios = respuestaParseada.data;
      const UsuarioDeIngreso = usuarios.find(
        (x) => x.usuario === localStorage.getItem("usuarioDeIngreso")
      );

      fotoPerfil.src = UsuarioDeIngreso.foto_usuario;
    }
  }
};
InicioDeSesion();
