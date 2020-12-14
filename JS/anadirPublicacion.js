function anadirPublicacion() {
  console.log();
  const linkFoto = document.querySelector("#Foto").value;
  const descripcion = document.querySelector("#Descripcion").value;
  const usuarioDeIngreso = localStorage.getItem("usuarioDeIngreso");
  const publicacion = [
    {
      usuario: usuarioDeIngreso,
      foto_usuario: "assets/fotoPerfil/perfil.jpg",
      foto_publicacion: linkFoto,
      descripcion: descripcion,
      likes: "0",
      comentarios: [],
      guardar: "false",
    },
  ];
  crear_publicacion(publicacion);
}
hola = document.querySelector("#botonSubmit");
console.log(hola);
hola.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  anadirPublicacion();
});
const botonParaAnadirHistorias = document
  .querySelector("#botonParaAnadirHistorias")
  .addEventListener("click", openForm);

function openForm() {
  document.getElementById("publicacionNueva").style.display = "block";
}

function closeForm() {
  document.getElementById("publicacionNueva").style.display = "none";
}
// const anadir = () => {
//   const ajax = new XMLHttpRequest();

//   ajax.open("GET", "publicacion.json");

//   ajax.addEventListener("load", ajaxCallback);

//   ajax.send();

//   function ajaxCallback() {
//     if (ajax.status === 200) {
//       const respuesta = ajax.response;
//       const respuestaParseada = JSON.parse(respuesta);
//       const publicaciones = respuestaParseada.data;
//       anadirPublicacion(publicaciones);
//     }
//   }
// };
// obtenerInfo();
