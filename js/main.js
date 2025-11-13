document.addEventListener('DOMContentLoaded', function() {

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function(tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // VALIDACIÓN FORMULARIOS
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {

            // Verifica la validez de todos los campos
            if (!form.checkValidity()) {
                event.preventDefault(); // Detiene envío
                event.stopPropagation(); // Evita propagación
            } else {
                // Si todo está correcto, simula el envío
                event.preventDefault();
                showFormSuccess();

                // Reinicia formulario correctamente
                form.reset();
                form.classList.remove('was-validated');
            }

            // Muestra los estilos de validación
            form.classList.add('was-validated');
        }, false);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


function showFormSuccess() {
    const alertBox = document.getElementById('formAlert');
    if (!alertBox) return;

    alertBox.style.display = 'block';
    alertBox.className = 'alert alert-success';
    alertBox.textContent = 'Mensaje enviado correctamente. Gracias por contactarnos.';

    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 5000);
}