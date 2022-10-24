let showcart = JSON.parse(localStorage.getItem("cart"));
let showTotal= JSON.parse(localStorage.getItem("total"))
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
    showTotal -= producto.precio
    localStorage.setItem("total",JSON.stringify(showTotal))
    localStorage.setItem("cart",JSON.stringify(carrito))
    totalC.innerHTML=(`Total a pagar:$ ${showTotal}`)
  })
  
  const totalC=document.querySelector(".total")
  totalC.innerText=(`Total a pagar:$ ${showTotal}`)
  const confirmar=document.querySelector(".confirm")
  confirmar.addEventListener("click", () => {
    Swal.fire({
      icon: 'success',
      title: 'COMPRA CONFIRMADA',
      text: 'Muchas gracias por su compra',
      footer: '<a href="./main.html">Seguir comprando</a>'
    })
  });
  })
}
//Mostramos los productos del carrito
actualizarCarrito()
