document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch('https://your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            responseMessage.textContent = '¡Tu mensaje ha sido enviado con éxito!';
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            responseMessage.textContent = 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.';
        });
    });
});
