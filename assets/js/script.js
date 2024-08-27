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

    $('#btnproject').click(function () {
        Swal.fire({
            title: "Estos son mis dos proyectos importantes hasta el momento:",
            showDenyButton: true,
            confirmButtonText: "Proyecto 1",
            denyButtonText: `Proyecto 2`
        }).then((result) => {
            if (result.isConfirmed) {
                window.open('https://eriq-obregon.github.io/botcamp-js-m2-S9/', '_blank');
            } else if (result.isDenied) {
                window.open('https://eriq-obregon.github.io/bootcamp-js-M2-S8/', '_blank');
            }
        });
    })
    $('#tlf').click(function () {
        Swal.fire({
            title: "¿Seguro/a que quieres mi número de teléfono?",
            text: "Tendrás que llamar si o si.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "red",
            cancelButtonText: "No lo quiero",
            confirmButtonText: "Lo quiero"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Mi número es:",
                    text: "+569 7238 0046",
                    icon: "info"
                });
            }
        });
    })
    $('#ig').click(function () {
        window.open('https://www.instagram.com/eriqq.qq/', '_blank')
    })
    $('#linkedin').click(function () {
        window.open('https://www.linkedin.com/in/erick-obreg%C3%B3n-b2470931a/', '_blank')
    })

    const modalHTML = `

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Formulario de Contacto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body">
                    <form id="formulariolindo">
                        <div class="row mb-3">
                            <div class="col">
                              <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" required>
                            </div>
                            <div class="col">
                              <input type="text" class="form-control" placeholder="Apellidos" aria-label="Apellidos" required>
                            </div>
                          </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Correo electrónico" aria-describedby="emailHelp" required>
                            <div id="emailHelp" class="form-text">El correo es para contactarnos con usted.</div>
                        </div>
                        <div class="input-group mb-1">
                            <span class="input-group-text">+56</span>
                            <input type="tel" class="form-control input-group" placeholder="Número de telefono" pattern="[9] [0-9]{4} [0-9]{4}" aria-label="numeroDeTelefono" required>
                        </div>
                        <p class="form-text">Formato esperado: 9 1111 1111</p>
                        <div class="mb-3">
                            <textarea class="col-12" name="mensajito" id="comentario" placeholder="Mensaje o Comentario" aria-label="mensajeOComentario"></textarea>
                        </div>


                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>`;

    $('#formularioConModal').html(modalHTML);

    $('#form').click(function () {
        $('#exampleModal').modal('show');
    });

    $('#formularioConModal').on('submit', '#formulariolindo', function (e) {
        e.preventDefault();
        Swal.fire({
            title: "Formulario Enviado",
            text: "Pronto será contactado",
            icon: "success"
        })
        this.reset()
        $('#exampleModal').modal('hide')
    });
})









