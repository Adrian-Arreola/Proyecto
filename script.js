function enviarQueja(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const queja = document.getElementById('queja').value.trim();
    const errorMessages = document.getElementById('errorMessages');

    errorMessages.innerHTML = '';
    errorMessages.style.display = 'none';

    const errors = [];

    if (nombre === '' || telefono === '' || correo === '' || queja === '') {
        errors.push('Por favor, complete todos los campos.');
    }

    if (telefono.length <10) {
        errors.push('Por favor, ingrese un número de teléfono válido (10 dígitos).');
    }

    const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!correoRegex.test(correo)) {
        errors.push('Por favor, ingrese un correo electrónico válido.');
    }

    if (queja.length < 10) {
        errors.push('La queja debe tener al menos 10 caracteres.');
    }

    if (errors.length > 0) {
        errorMessages.style.display = 'block';
        const errorList = document.createElement('ul');
        errors.forEach(error => {
            const listItem = document.createElement('li');
            listItem.textContent = error;
            errorList.appendChild(listItem);
        });
        errorMessages.appendChild(errorList);
        return false;
    }

    alert('Se envió la queja exitosamente');
    return true;
}
