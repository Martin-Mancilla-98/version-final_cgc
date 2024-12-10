document.addEventListener('DOMContentLoaded', function() {
    function obtenerDetallesCurso() {
        // Obtener el parámetro 'id' de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const cursoId = urlParams.get("id");

        // Realizar una petición a la API para obtener los detalles del curso con el 'id' proporcionado
        fetch(`https://cgcfinal-default-rtdb.firebaseio.com/cursos/${cursoId}.json`)
        
            .then((response) => response.json())
            .then((curso) => {
                const descripcionContainer = document.getElementById("descripcion-container");

                // Crear elementos HTML para mostrar los detalles del curso
                const cursoHTML = `
                                    <img src="${curso.imagen}" alt="Imagen del curso">
                    <h1>${curso.nombrecurso}</h1>


                    <h2>Presentación</h2>
                    <p>${curso.presentacion}</p>

                    <h2>Objetivo General</h2>
                    <p>${curso.objetivogeneral}</p>
                    <h2>Objetivos Específicos</h2>
                    <p>${curso.objetivoespecifico}</p>
                    <h2>Requisitos</h2>
                    <p>${curso.Requisitos}</p>
                    <h2>Valor</h2>
                    <p>Valor: $${curso.valor}</p>
                `;

                descripcionContainer.innerHTML = cursoHTML;
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                mostrarMensajeError();
            });
    }

    function mostrarMensajeError() {
        const descripcionContainer = document.getElementById("descripcion-container");
        descripcionContainer.innerHTML = "<p>Error al cargar los detalles del curso. Por favor, inténtelo de nuevo más tarde.</p>";
    }

    obtenerDetallesCurso();
});
