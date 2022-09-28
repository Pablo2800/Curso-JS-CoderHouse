let showcart=JSON.parse(sessionStorage.getItem("cart"))

cardProduct(showcart, card)

let section2 = document.getElementById("totalCart");
let temp2 = document.getElementById("templ");
let totalCarrito =temp2.content.querySelector("div")
let total = 0

carrito.forEach((producto) => {
    section2.appendChild(totalCarrito)
    total+=producto.precio
    totalCarrito.children[0].innerText=`Total a pagar: $${total}`
    totalCarrito.querySelector(".confirm").innerText="CONFIRMAR COMPRA"
    
})
totalCarrito.querySelector(".confirm").addEventListener("click",()=>{
    alert("Muchas gracias por su compra")
})