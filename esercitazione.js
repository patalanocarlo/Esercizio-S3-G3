function aggiungiTask() {
  const nuovoTask = document.getElementById("taskNameInput").value;
  const listaTask = document.getElementById("listaTask");
  const nuovoTaskElemento = document.createElement("li");
  nuovoTaskElemento.textContent = nuovoTask;
  //Ora vado ad aggiungere la modalità di cancellazione...
  const completatoButton = document.createElement("button");
  completatoButton.textContent = "Completato";
  completatoButton.onclick = function () {
    nuovoTaskElemento.classList("completed"); //vado a prendere la classlist di NuovoTaskElemento...
  };
  const eliminaButton = document.createElement("button");
  eliminaButton.textContent = "Elimina";
  eliminaButton.onclick = function () {
    listaTask.removeChild(nuovoTaskElemento);
  };
  nuovoTaskElemento.appendChild(completatoButton);
  nuovoTaskElemento.appendChild(eliminaButton);
  listaTask.appendChild(nuovoTaskElemento);
  document.getElementById("taskNameInput").value;
}
