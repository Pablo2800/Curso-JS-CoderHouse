let showcart = JSON.parse(localStorage.getItem("cart"));
let sectionCart = document.getElementById("objetosCart");
let tempCart = document.querySelector("template");
let cardCart = tempCart.content.querySelector("div");
carrito.forEach((producto) => {
  let cardCartClonada = cardCart.cloneNode(true);
  sectionCart.appendChild(cardCartClonada);
  cardCartClonada.children[0].innerText= producto.marca
  cardCartClonada.children[1].innerText= producto.modelo
  cardCartClonada.children[2].src= producto.imagen
  cardCartClonada.children[3].innerText= "$"+producto.precio
  cardCartClonada.querySelector(".btnSacar").innerText="Eliminar del carrito"

  cardCartClonada.querySelector(".btnSacar").addEventListener("click", () => {
    carrito.splice(0,1)
    document.querySelector(".carrit").innerHTML=`<li class="carrit"><a href="./Carrito.html">Carrito (${carrito.length})</a></li>`
    cardCartClonada.remove()
    producto.inventario++
    localStorage.setItem("stock",JSON.stringify(producto.inventario))
    total -= producto.precio
    localStorage.setItem("cart",JSON.stringify(carrito))
    sessionStorage.setItem("totalCart",JSON.stringify(total))
  })
})

let section2 = document.getElementById("totalCart");
let temp2 = document.getElementById("templ");
let totalCarrito = temp2.content.querySelector("div");

carrito.forEach((producto) => {
  section2.appendChild(totalCarrito);
  total +=producto.precio
  totalCarrito.children[0].innerText = `Total a pagar: $${total}`;
  totalCarrito.querySelector(".confirm").innerText = "CONFIRMAR COMPRA";
  totalCarrito.querySelector(".confirm").addEventListener("click", () => {
    const { value: email } = Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputLabel: 'Your email address',
      inputPlaceholder: 'Enter your email address'
    })
    if (email) {
      Swal.fire(`Entered email: ${email}`)
    }
    /*Swal.fire({
      icon: "success",
      title: "COMPRA CONFIRMADA",
      text: "Muchas gracias por su compra",
      footer: '<button class="ticket">Ticket de compra</button>',
    });*/

  let ticketBut=document.querySelector(".ticket")
    ticketBut.addEventListener("click", () => {
    Swal.fire(`Ticket de compra Numero:${Math.round(Math.random()*1000000000)}`)
    })
  });
});


