const discos = [

    {
        nombre: "Vida",
        anio: 1972,
        etapa: "sui",
        nombreEtapa: "SUI GENERIS",
        portada: "img/discos/vida",
        descripcion: "El primer álbum de estudio de Sui Generis. Un trabajo fundamental para el desarrollo del rock argentino, con canciones que retratan experiencias, emociones y situaciones de la juventud.",
        canciones: [
            "Canción para mi muerte",
            "Necesito",
            "Quizás porque"
        ]
    },

    {
        nombre: "Confesiones de invierno",
        anio: 1973,
        etapa: "sui",
        nombreEtapa: "SUI GENERIS",
        portada: "img/discos/confesiones.jpg",
        descripcion: "El segundo disco de Sui Generis. Consolidó la identidad del dúo y contiene algunas de las canciones más reconocidas de su primera etapa.",
        canciones: [
            "Rasguña las piedras",
            "Aprendizaje",
            "Bienvenidos al tren"
        ]
    },

    {
        nombre: "La Máquina de Hacer Pájaros",
        anio: 1976,
        etapa: "maquina",
        nombreEtapa: "LA MÁQUINA",
        portada: "img/discos/maquina.jpg",
        descripcion: "Primer álbum de la banda que Charly formó después de Sui Generis. Presenta una propuesta de rock progresivo, con composiciones complejas y una búsqueda sonora diferente.",
        canciones: [
            "Bubulina",
            "Como mata el viento norte",
            "Por probar el vino y el agua salada"
        ]
    },

    {
        nombre: "Películas",
        anio: 1977,
        etapa: "maquina",
        nombreEtapa: "LA MÁQUINA",
        portada: "img/discos/peliculas.jpg",
        descripcion: "Segundo y último álbum de La Máquina de Hacer Pájaros. Profundiza la experimentación musical y combina diferentes estilos dentro del rock progresivo.",
        canciones: [
            "Qué se puede hacer salvo ver películas",
            "Hipercandombe",
            "Ruta perdedora"
        ]
    },

    {
        nombre: "La grasa de las capitales",
        anio: 1979,
        etapa: "seru",
        nombreEtapa: "SERÚ GIRÁN",
        portada: "img/discos/grasa.jpg",
        descripcion: "Segundo álbum de Serú Girán. La banda desarrolló una identidad propia con composiciones elaboradas y letras que abordaban distintos aspectos de la sociedad argentina.",
        canciones: [
            "Viernes 3 AM",
            "Perro andaluz",
            "San Francisco y el lobo"
        ]
    },

    {
        nombre: "Bicicleta",
        anio: 1980,
        etapa: "seru",
        nombreEtapa: "SERÚ GIRÁN",
        portada: "img/discos/bicicleta.jpg",
        descripcion: "Uno de los discos más reconocidos de Serú Girán. Reúne canciones que combinan melodías elaboradas, experimentación y una mirada crítica sobre la realidad de la época.",
        canciones: [
            "Canción de Alicia en el país",
            "A los jóvenes de ayer",
            "Cuánto tiempo más llevará"
        ]
    },

    {
        nombre: "Yendo de la cama al living",
        anio: 1982,
        etapa: "solista",
        nombreEtapa: "CARRERA SOLISTA",
        portada: "img/discos/yendo.jpg",
        descripcion: "Primer álbum de estudio de Charly García como solista. Marca el comienzo de una nueva etapa artística, con una identidad musical propia y una fuerte experimentación sonora.",
        canciones: [
            "Inconsciente colectivo",
            "Yo no quiero volverme tan loco",
            "No bombardeen Buenos Aires"
        ]
    },

    {
        nombre: "Clics modernos",
        anio: 1983,
        etapa: "solista",
        nombreEtapa: "CARRERA SOLISTA",
        portada: "img/discos/clics.jpg",
        descripcion: "Un álbum fundamental del rock argentino. Grabado en Nueva York, incorpora sonidos electrónicos y nuevas influencias musicales que renovaron su propuesta artística.",
        canciones: [
            "Nos siguen pegando abajo",
            "No me dejan salir",
            "Los dinosaurios"
        ]
    },

    {
        nombre: "Piano Bar",
        anio: 1984,
        etapa: "solista",
        nombreEtapa: "CARRERA SOLISTA",
        portada: "img/discos/piano.jpg",
        descripcion: "Uno de los trabajos más representativos de su carrera solista. Combina la energía del rock con letras y melodías que se convirtieron en clásicos.",
        canciones: [
            "Demoliendo hoteles",
            "Promesas sobre el bidet",
            "Raros peinados nuevos"
        ]
    },

    {
        nombre: "Parte de la religión",
        anio: 1987,
        etapa: "solista",
        nombreEtapa: "CARRERA SOLISTA",
        portada: "img/discos/religion.jpg",
        descripcion: "Un disco que muestra otra etapa de su carrera, con una propuesta sonora más elaborada y canciones que forman parte de su repertorio más reconocido.",
        canciones: [
            "Rezo por vos",
            "Buscando un símbolo de paz",
            "No voy en tren"
        ]
    }

];


// =====================================
// ELEMENTOS DEL HTML
// =====================================

const galeria = document.querySelector("#galeria-discos");

const buscador = document.querySelector("#buscador-discos");

const botonesFiltro = document.querySelectorAll(".filtro");

const cantidadDiscos = document.querySelector("#cantidad-discos");

const mensajeSinResultados = document.querySelector("#sin-resultados");


// =====================================
// MOSTRAR LOS DISCOS EN LA GALERÍA
// =====================================

function mostrarDiscos(listaDiscos) {

    // Limpiamos la galería anterior
    galeria.innerHTML = "";

    // Actualizamos la cantidad de resultados
    cantidadDiscos.textContent =
        listaDiscos.length + " DISCOS ENCONTRADOS";

    // Si no hay resultados, mostramos un mensaje
    if (listaDiscos.length === 0) {

        mensajeSinResultados.style.display = "block";

    } else {

        mensajeSinResultados.style.display = "none";

    }

    // Recorremos cada disco del arreglo
    listaDiscos.forEach(function(disco) {

        const tarjeta = document.createElement("button");

        tarjeta.type = "button";

        tarjeta.classList.add("disco-card");

        tarjeta.innerHTML = `

            <div class="disco-imagen">

                <img
                    src="${disco.portada}"
                    alt="Portada del álbum ${disco.nombre}"
                    loading="lazy"
                >

            </div>

            <span class="disco-etapa">
                ${disco.nombreEtapa}
            </span>

            <h3>${disco.nombre}</h3>

            <p class="disco-anio">${disco.anio}</p>

        `;

        // Abrimos el modal al seleccionar una tarjeta
        tarjeta.addEventListener("click", function() {

            abrirModal(disco);

        });

        // Si falta una imagen, mostramos un reemplazo visual
        const imagen = tarjeta.querySelector("img");

        imagen.addEventListener("error", function() {

            imagen.style.display = "none";

            imagen.parentElement.classList.add("sin-portada");

            imagen.parentElement.setAttribute(
                "data-titulo",
                disco.nombre
            );

        });

        // Agregamos la tarjeta a la galería
        galeria.appendChild(tarjeta);

    });

}


// =====================================
// ABRIR LA VENTANA CON INFORMACIÓN
// =====================================

function abrirModal(disco) {

    // Colocamos los datos del disco en el modal
    document.querySelector("#modalTitulo").textContent =
        disco.nombre;

    document.querySelector("#modal-etapa").textContent =
        disco.nombreEtapa;

    document.querySelector("#modal-anio").textContent =
        "AÑO DE LANZAMIENTO: " + disco.anio;

    document.querySelector("#modal-descripcion").textContent =
        disco.descripcion;

    // Mostramos la portada
    const imagenModal = document.querySelector("#modal-portada");

    imagenModal.src = disco.portada;

    imagenModal.alt = "Portada de " + disco.nombre;

    imagenModal.style.display = "block";

    imagenModal.onerror = function() {

        imagenModal.style.display = "none";

    };

    // Limpiamos la lista anterior de canciones
    const listaCanciones = document.querySelector(
        "#modal-canciones-lista"
    );

    listaCanciones.innerHTML = "";

    // Agregamos las canciones del disco
    disco.canciones.forEach(function(cancion) {

        const elemento = document.createElement("li");

        elemento.textContent = cancion;

        listaCanciones.appendChild(elemento);

    });

    // Abrimos el modal utilizando Bootstrap
    const modal = bootstrap.Modal.getOrCreateInstance(
        document.querySelector("#modalDisco")
    );

    modal.show();

}


// =====================================
// BUSCADOR Y FILTROS
// =====================================

// Guardamos la categoría seleccionada
let filtroActual = "todos";


// Función que combina el buscador y los filtros

function filtrarDiscos() {

    // Obtenemos lo que escribió el usuario
    const textoBuscado = buscador.value.toLowerCase().trim();

    // Creamos una lista con los discos que coinciden
    const discosFiltrados = discos.filter(function(disco) {

        const coincideNombre = disco.nombre
            .toLowerCase()
            .includes(textoBuscado);

        const coincideEtapa =
            filtroActual === "todos" ||
            disco.etapa === filtroActual;

        return coincideNombre && coincideEtapa;

    });

    // Mostramos solamente los resultados encontrados
    mostrarDiscos(discosFiltrados);

}


// =====================================
// EVENTO DEL BUSCADOR
// =====================================

buscador.addEventListener("input", function() {

    filtrarDiscos();

});


// =====================================
// EVENTOS DE LOS BOTONES DE FILTRO
// =====================================

botonesFiltro.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Guardamos la categoría seleccionada
        filtroActual = boton.dataset.filtro;

        // Quitamos la clase activo de todos los botones
        botonesFiltro.forEach(function(otroBoton) {

            otroBoton.classList.remove("activo");

        });

        // Marcamos el botón seleccionado
        boton.classList.add("activo");

        // Aplicamos el filtro
        filtrarDiscos();

    });

});


// =====================================
// MOSTRAR TODOS LOS DISCOS AL INICIAR
// =====================================

mostrarDiscos(discos);
