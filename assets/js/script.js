$(document).ready(function () {
    $('#mifoto').click(function () {
        $('#mifoto').addClass('quitar')
        $('#mifoto2').removeClass('quitar')
        $('.pelado').text('Yo después de programar')
    })
    $('#mifoto2').click(function () {
        $('#mifoto2').addClass('quitar')
        $('#mifoto').removeClass('quitar')
        $('.pelado').text('Yo antes de programar')
    })

    let habilidades = [
        { habilidad: "Comunicación efectiva" },
        { habilidad: "Resolucion de problemas" },
        { habilidad: "Adaptabilidad" },
        { habilidad: "Trabajo en equipo" },
        { habilidad: "Pensamiento crítico" },
        { habilidad: "Gestión del tiempo" },
        { habilidad: "Creatividad" },
        { habilidad: "Liderazgo" },
        { habilidad: "Empatía" },
        { habilidad: "Organización" },
        { habilidad: "Capacidad de aprendizaje rápido" },
        { habilidad: "Toma de decisiones" },
        { habilidad: "Resiliencia" },
        { habilidad: "Atención al detalle" },
        { habilidad: "Proactividad" },
        { habilidad: "Manejo del estrés" },
        { habilidad: "Autodisciplina" },
        { habilidad: "Confianza en uno mismo" },
        { habilidad: "Escucha activa" },
        { habilidad: "Pensamiento estratégico" },
        { habilidad: "Manejo de conflictos" },
        { habilidad: "Paciencia" },
        { habilidad: "Habilidades interpersonales" },
        { habilidad: "Capacidad de motivar a otros" }
    ]
    let estado = 0

    function mostrarParrafo(index) {
        $('#habilidades').empty();
        const nuevoParrafo = $('<p id="habilidadesStyle"></p>').text(habilidades[index].habilidad);
        $('#habilidades').append(nuevoParrafo);
    }

    mostrarParrafo(estado);

    $('#btnhabilidades').click(function () {
        estado = (estado + 1) % habilidades.length;
        mostrarParrafo(estado);
    });

    $('#btnproject').click(function(){
        Swal.fire({
            title: "Estos son mis dos proyectos importantes hasta el momento:",
            showDenyButton: true,
            confirmButtonText: "Proyecto 1",
            denyButtonText: `Proyecto 2`
          }).then((result) => {
            if (result.isConfirmed) {
                window.open('https://www.google.com', '_blank');
            } else if (result.isDenied) {
                window.open('https://www.github.com', '_blank');
            }
          });
    })
})









