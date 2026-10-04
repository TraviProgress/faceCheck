// ===== 1. FECHA Y HORA =====

const fecha = document.getElementById("fecha");

function mostrarFecha() {
  const ahora = new Date();
  fecha.textContent = ahora.toLocaleString("es-PE");
}

mostrarFecha();
setInterval(mostrarFecha, 1000);

// ===== 2. TRABAJADORES (datos de ejemplo) =====

const trabajadores = [
  { dni: "12345678", nombre: "Juan Pérez", cargo: "Operario" },
  { dni: "87654321", nombre: "María López", cargo: "Supervisora" },
  { dni: "11223344", nombre: "Carlos Ramos", cargo: "Almacenero" },
];

// ===== 3. ELEMENTOS DE LA PÁGINA =====

const inputDni = document.getElementById("dni");
const foto = document.querySelector(".usuario");
const mensaje = document.getElementById("mensaje");
const btnEntrada = document.getElementById("btnEntrada");
const btnSalida = document.getElementById("btnSalida");

// ===== 4. MARCAR ASISTENCIA =====

const escaner = document.querySelector(".escaner");

// Muestra un error y limpia la pantalla
function mostrarError(texto) {
  mensaje.textContent = "❌ " + texto;
  mensaje.style.color = "#f87171";
  foto.textContent = "Foto del trabajador";
  escaner.textContent = "Coloca tu rostro dentro del marco";
}

function marcar(tipo) {
  const dni = inputDni.value;

  // Validar: 8 caracteres y solo números
  if (dni.length !== 8 || isNaN(dni)) {
    mostrarError("El DNI debe tener 8 números");
    return;
  }

  // Buscar al trabajador en la lista
  const trabajador = trabajadores.find((t) => t.dni === dni);

  if (!trabajador) {
    mostrarError("Trabajador no encontrado");
    return;
  }

  // Paso 1: mostrar al trabajador y "verificar" su rostro
  foto.textContent = trabajador.nombre + " - " + trabajador.cargo;
  escaner.textContent = "🔍 Verificando rostro...";
  mensaje.textContent = "";

  // Paso 2: después de 2 segundos, confirmar el registro
  setTimeout(() => {
    const hora = new Date().toLocaleTimeString("es-PE");
    escaner.textContent = "✅ Rostro verificado";
    mensaje.textContent = "✅ " + tipo + " registrada a las " + hora;
    mensaje.style.color = "#22c55e";
    inputDni.value = "";
  }, 2000);
}

// ===== 5. BOTONES =====

btnEntrada.addEventListener("click", () => marcar("Entrada"));
btnSalida.addEventListener("click", () => marcar("Salida"));
