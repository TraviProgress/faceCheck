// ===== 1. FECHA Y HORA =====

const fecha = document.getElementById("fecha");

function mostrarFecha() {
  const ahora = new Date();
  fecha.textContent = ahora.toLocaleString("es-PE");
}

mostrarFecha();
setInterval(mostrarFecha, 1000);