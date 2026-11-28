// Seleccionamos el formulario
const formulario = document.querySelector("#formulario-contacto");

// Seleccionamos los campos
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const motivo = document.querySelector("#motivo");
const mensaje = document.querySelector("#mensaje");

// Seleccionamos el espacio donde aparecerá la respuesta
const respuesta = document.querySelector("#respuesta-formulario");


// FUNCIÓN PARA MOSTRAR ERRORES
function mostrarError(campo, idError, texto) {

    campo.classList.add("campo-invalido");

    document.querySelector("#" + idError).textContent = texto;

}


// FUNCIÓN PARA LIMPIAR ERRORES
function limpiarError(campo, idError) {

    campo.classList.remove("campo-invalido");

    document.querySelector("#" + idError).textContent = "";

}


// VALIDACIÓN DEL FORMULARIO
formulario.addEventListener("submit", function(evento) {

    // Evitamos que la página se recargue
    evento.preventDefault();

    // Limpiamos los errores anteriores
    limpiarError(nombre, "error-nombre");
    limpiarError(email, "error-email");
    limpiarError(motivo, "error-motivo");
    limpiarError(mensaje, "error-mensaje");

    respuesta.textContent = "";
    respuesta.className = "";

    // Variable para saber si el formulario es válido
    let formularioValido = true;


    // VALIDAR NOMBRE
    if (nombre.value.trim().length < 2) {

        mostrarError(
            nombre,
            "error-nombre",
            "Ingresá tu nombre (mínimo 2 caracteres)."
        );

        formularioValido = false;

    }


    // VALIDAR EMAIL
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email.value.trim())) {

        mostrarError(
            email,
            "error-email",
            "Ingresá un correo electrónico válido."
        );

        formularioValido = false;

    }


    // VALIDAR MOTIVO
    if (motivo.value === "") {

        mostrarError(
            motivo,
            "error-motivo",
            "Seleccioná un motivo de contacto."
        );

        formularioValido = false;

    }


    // VALIDAR MENSAJE
    if (mensaje.value.trim().length < 10) {

        mostrarError(
            mensaje,
            "error-mensaje",
            "El mensaje debe tener al menos 10 caracteres."
        );

        formularioValido = false;

    }


    // SI TODO ESTÁ CORRECTO
    if (formularioValido) {

        respuesta.textContent =
            "¡Mensaje completado correctamente! Gracias por contactarte.";

        respuesta.classList.add("mensaje-exito");

        // Limpiamos los campos
        formulario.reset();

    }

});


// LIMPIAR ERRORES CUANDO EL USUARIO MODIFICA LOS CAMPOS

nombre.addEventListener("input", function() {
    limpiarError(nombre, "error-nombre");
});

email.addEventListener("input", function() {
    limpiarError(email, "error-email");
});

motivo.addEventListener("change", function() {
    limpiarError(motivo, "error-motivo");
});

mensaje.addEventListener("input", function() {
    limpiarError(mensaje, "error-mensaje");
});