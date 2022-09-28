let carrito = JSON.parse(sessionStorage.getItem("cart")) || [];

function actualizarCarrito() {
    localStorage.setItem("cart", JSON.stringify(carrito));
}

