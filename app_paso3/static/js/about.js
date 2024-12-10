document.addEventListener('DOMContentLoaded', function() {
  function obtenerDatos() {
      fetch("https://cgcfinal-default-rtdb.firebaseio.com/cursos.json")
          .then(response => response.json())
          .then(data => {
              renderizarTarjetas(data);
          })
          .catch(error => {
              console.error("Error fetching data:", error);
              mostrarMensajeError();
          });
  }

  function renderizarTarjetas(data) {
      const cardDeck = document.getElementById("card-deck");
      cardDeck.innerHTML = "";
      Object.keys(data).forEach(key => {
          const objeto = data[key];
          const cardHTML = `
              <div class="card">
                  <img class="card-img-top" src="${objeto.imagen}" alt="Imagen del curso">
                  <div class="card-body">
                      <h5 class="card-title">${objeto.nombrecurso}</h5>
                      <p class="card-text">Duración: ${objeto.duracion} horas</p>
                      <p class="card-text">Valor: $${objeto.valor}</p>
                      <button class="btn btn-primary" onclick="window.location.href='/otra_pagina2.html?id=${key}'">Detalle</button>
                  </div>
              </div>
          `;
          cardDeck.innerHTML += cardHTML;
      });
  }

  function mostrarMensajeError() {
      const cardDeck = document.getElementById("card-deck");
      cardDeck.innerHTML = "<p>Error al cargar los cursos. Por favor, inténtelo de nuevo más tarde.</p>";
  }

  obtenerDatos();
  setInterval(obtenerDatos, 5000);
});

