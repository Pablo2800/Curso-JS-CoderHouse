let showcart = JSON.parse(localStorage.getItem("cart"));
let sectionCart = document.getElementById("objetosCart");
let tempCart = document.querySelector("template");
let cardCart = tempCart.content.querySelector("div");

//Funcion eliminar del carrito
const eliminarCart = (prodId)=>{
  const item = carrito.find((producto)=>producto.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice,1)
}
//Actualizar carrito
const actualizarCarrito=() => {
carrito.forEach((producto) => {
  let cardCartClonada = cardCart.cloneNode(true);
  sectionCart.appendChild(cardCartClonada);
  cardCartClonada.children[0].innerText= producto.marca
  cardCartClonada.children[1].innerText= producto.modelo
  cardCartClonada.children[2].src= producto.imagen
  cardCartClonada.children[3].innerText= "$"+producto.precio
  cardCartClonada.querySelector(".btnSacar").innerText="Eliminar del carrito"
  cardCartClonada.querySelector(".btnSacar").addEventListener("click", () => {
    //Eliminar Productos
    eliminarCart(producto.id)
    document.querySelector(".carrit").innerHTML=`<li class="carrit"><a href="./Carrito.html">Carrito (${carrito.length})</a></li>`
    cardCartClonada.remove()
    producto.stock++
    sessionStorage.setItem("stock",JSON.stringify(producto.stock))
    total -= producto.precio
    localStorage.setItem("cart",JSON.stringify(carrito))
    sessionStorage.setItem("totalCart",JSON.stringify(total))
  })
  })
}
//Mostramos los productos del carrito
actualizarCarrito()

let section2 = document.getElementById("totalCart");
let temp2 = document.getElementById("templ");
let totalCarrito = temp2.content.querySelector("div");

carrito.forEach((producto) => {
  section2.appendChild(totalCarrito);
  total +=producto.precio
  totalCarrito.children[0].innerText = `Total a pagar: $${total}`;
  totalCarrito.querySelector(".confirm").innerText = "CONFIRMAR COMPRA";
  totalCarrito.querySelector(".confirm").addEventListener("click", () => {
    Swal.fire({
      icon: 'success',
      title: 'COMPRA CONFIRMADA',
      text: 'Muchas gracias por su compra',
      footer: '<a href="./main.html">Seguir comprando</a>'
    })
  });
});
  
let vaciarCart= document.querySelector(".vaciar")

vaciarCart.addEventListener("click",()=>{
  carrito.length=0
  actualizarCarrito()
})