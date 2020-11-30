const contenedorParaPonerHistorias = document.querySelector(
  "#contenedorParaPonerHistorias"
);

const htmlParaHistorias = ` <div id="lugarParaPonerHistorias" class="lugarParaMostrarHistorias oculto">
  <div id="cerrar" class="cerrar">cerrar</div>
</div> `;
const cerrarHistorias = () => {
  contenedorParaPonerHistorias.removeChild(
    contenedorParaPonerHistorias.firstChild
  );
  contenedorParaPonerHistorias.appendChild(htmlParaHistorias);
};
const botonCerrar = document.querySelector("#cerrar");
botonCerrar.addEventListener("click", function () {
  cerrarHistorias();
});
