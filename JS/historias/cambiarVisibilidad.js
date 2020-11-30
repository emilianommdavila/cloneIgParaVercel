cambiarVisibilidad = () => {
  console.log("hasta aca bien");
  let booleano = false;
  change = document.querySelector("#lugarParaPonerHistorias");
  console.log(change);
  //   toggle;
  if (booleano === false) {
    change.classList.remove("oculto");
    change.classList.add("visible");
  } else {
    change.classList.add("oculto");
    change.classList.remove("visible");
  }
};
