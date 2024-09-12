const precio = 400000;
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");
const aumentarBtn = document.getElementById("aumentarBtn");
const disminuirBtn = document.getElementById("disminuirBtn");

precioSpan.innerHTML = precio;
let cantidad = 0;

function actualizarTotal() {
  totalSpan.innerHTML = cantidad * precio;
}

aumentarBtn.addEventListener("click", () => {
  cantidad += 1;
  cantidadSpan.innerHTML = cantidad;
  actualizarTotal();
});
disminuirBtn.addEventListener("click", () => {
  if (cantidad > 0) {
    cantidad -= 1;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
  }
});
