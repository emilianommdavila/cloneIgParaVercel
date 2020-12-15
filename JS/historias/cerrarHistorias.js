const contenedorParaPonerHistorias = document.querySelector(
  "#lugarParaPonerHistorias"
);

// const htmlParaHistorias = ` <div id="lugarParaPonerHistorias" class="lugarParaMostrarHistorias oculto">
//   <div id="cerrar" class="cerrar">cerrar</div>
// </div> `;
let pararHistoria = false;
const cerrarHistorias = () => {
  contenedorParaPonerHistorias.style.display = "none";
  contenedorParaPonerHistorias.removeChild(
    contenedorParaPonerHistorias.lastChild
  );
  pararHistoria = true;
};
const botonCerrar = document.querySelector("#cerrar");
botonCerrar.addEventListener("click", function () {
  cerrarHistorias();
});

// function openForm() {
//   document.querySelector("#cerrar").style.display = "flex";
// }

// function closeForm() {
//   document.getElementById("publicacionNueva").style.display = "none";
// }
