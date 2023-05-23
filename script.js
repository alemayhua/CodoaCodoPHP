function cargarContenido(url, seleccion) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const elemento = document.querySelector(seleccion);
            elemento.innerHTML = html;
        });
}

window.addEventListener('DOMContentLoaded', function () {
    cargarContenido('header.html', '.header');
    cargarContenido('footer.html', '.footer');
    document.getElementById('cantidad').addEventListener('change', function () {
        document.getElementById('total').innerHTML = "Total a pagar:$" + calcularTotal();
    });
    document.getElementById('categoria').addEventListener('change', function () {
        document.getElementById('total').innerHTML = "Total a pagar:$" + calcularTotal();
    });
});

function mostrarResumen() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correo').value;
    let cantidad = document.getElementById('cantidad').value;
    let categoria = document.getElementById('categoria').options[document.getElementById('categoria').selectedIndex].text;
    let resumen = `<p><strong>Nombre:</strong> ${nombre}</p><p><strong>Apellido:</strong> 
    ${apellido}</p><p><strong>Correo:</strong> ${correo}</p><p><strong>Cantidad:</strong> 
    ${cantidad}</p><p><strong>Categoría:</strong> ${categoria}
    </p><strong>Total:</strong> $${calcularTotal()}`;

    document.getElementById('resumen').innerHTML = resumen;
    document.getElementById('contenedorResumen').style.display = 'block';
    document.getElementById('formularioTicket').style.display = 'none';
    document.getElementById('formularioTicket').addEventListener('submit', function (e) {
        e.preventDefault();
    });
}

function calcularTotal() {
    let cantidad = document.getElementById('cantidad').value;
    let categoria = document.getElementById('categoria').value;
    let total = cantidad * 200;

    if (categoria === "1") {
        total *= 0.8;
    } else if (categoria === "2") {
        total *= 0.5;
    } else if (categoria === "3") {
        total *= 0.85;
    }

    return total;
}






