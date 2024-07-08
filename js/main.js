document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('miModal');
    var btn = document.querySelector('.boton');
    var span = document.getElementsByClassName('cerrar')[0];
    var formulario = document.getElementById('formularioUsuario');
    var contenedorDatos = document.getElementById('contenedorDatos');

    btn.onclick = function () {
        modal.style.display = 'block';
    }

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        var nombreCompleto = document.getElementById('nombreCompleto').value;
        var correoElectronico = document.getElementById('correoElectronico').value;

        var usuarioDiv = document.createElement('div');
        usuarioDiv.className = 'datos-usuario';

        var icono = document.createElement('img');
        icono.className = 'icono-usuario';
        icono.src = 'https://via.placeholder.com/50';

        var detallesDiv = document.createElement('div');
        detallesDiv.className = 'detalles-usuario';
        detallesDiv.innerHTML = `<strong>${nombreCompleto}</strong><br>${correoElectronico}`;

        usuarioDiv.appendChild(icono);
        usuarioDiv.appendChild(detallesDiv);

        var asignacionesDiv = document.createElement('div');
        asignacionesDiv.className = 'asignaciones-usuario';

        for (var i = 1; i <= 3; i++) {
            var asignacion = document.createElement('div');
            asignacion.className = 'asignacion';
            asignacion.innerText = `Asignación ${i}`;
            asignacionesDiv.appendChild(asignacion);
        }

        usuarioDiv.appendChild(asignacionesDiv);
        contenedorDatos.appendChild(usuarioDiv);

        modal.style.display = 'none';
        formulario.reset();
    });
});
