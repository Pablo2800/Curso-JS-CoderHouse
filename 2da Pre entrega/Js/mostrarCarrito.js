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
  //Mostrar el total del carrito
  const totalC=document.querySelector(".total")
  totalC.innerText=(`Total a pagar:$ ${showTotal}`)
//Registro del usuario
  const confirmar=document.querySelector(".confirm")
  confirmar.addEventListener("click", () => {
    Swal.fire({
      title: 'PARA SEGUIR CON SU COMPRA DEBE REGISTRARSE',
      showConfirmButton: false,
      html:
      '<div class="form">'+
      '<form class="formulario">'+
      '<div><label class="name">Nombre</label><input id="swal-input1" class="swal2-input" placeholder="Ingrese su nombre" type="text"></div>'+
      '<div><label class="email">Email </label><input id="swal-input2" class="swal2-input" placeholder="Ingrese su email" type="email"></div>'+
      '<div><label class="direccion">Direccion </label><input id="swal-input3" class="swal2-input" placeholder="Ingrese su direccion" type="text"></div>'+
      '<div><button class="enviar" type="submit">Continuar <i class="fa fa-arrow-right"></i></button></div>'+
      '</form>'+
      '</div>',
    focusConfirm: false,
  })
  const formulario=document.querySelector(".formulario")
  formulario.addEventListener("submit",validadFormulario)
  function validadFormulario(e){
  e.preventDefault()
  const nombre=document.querySelector("#swal-input1").value
  const email=document.querySelector("#swal-input2").value
  const direccion=document.querySelector("#swal-input3").value

  if(nombre && email && direccion !=""){
  document.querySelector(".enviar").addEventListener("click", () => {
    Swal.fire({
      icon: 'success',
      title: `COMPRA CONFIRMADA`,
      confirmButtonText:
      `Finalizar`,
      html:`<p>Sr/Sra ${nombre} no olvide revisar su email: ${email} para estar atento al estado del envio del producto</p>`+
      `<p>El envio se realizara a la direccion: ${ direccion}</p>`,
      footer: '<a href="./index.html">Seguir comprando</a>',
      background:`#cfd1e6;`
    })
  })
}else{
  Swal.fire({
    title:'Debe rellenar los campos',
    background:`#c5c8e7`
  })
}
  }
});
})
}
//Mostramos los productos del carrito
actualizarCarrito()
