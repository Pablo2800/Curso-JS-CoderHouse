let section = document.getElementById("objetos");
let temp = document.querySelector("template");
let card = temp.content.querySelector("div");
let subtotal=JSON.parse(localStorage.getItem("total"))
let total= 0
//Funcion agregar carrito
const agregarCelCarrito=(prodId)=>{
  const item=celulares.find((prod)=>prod.id===prodId)
  carrito.push(item)
  subtotal += item.precio
}
const agregarAurCarrito=(prodId)=>{
  const item=auriculares.find((prod)=>prod.id===prodId)
  carrito.push(item)
  subtotal += item.precio
}
const agregarTabCarrito=(prodId)=>{
  const item=tablets.find((prod)=>prod.id===prodId)
  carrito.push(item)
  subtotal += item.precio
}
function cardProduct(array,card){
    array.forEach((producto) => {
    let cardClonada = card.cloneNode(true);
    section.appendChild(cardClonada);
    cardClonada.children[0].innerText = producto.marca;
    cardClonada.children[2].src = producto.imagen;
    cardClonada.children[1].innerText = producto.modelo;
    cardClonada.children[3].innerText = "Precio:$" + producto.precio;
    //Si el usuario clickea la card muestra informacion
    cardClonada.children[2].addEventListener("click",()=>{
      if(producto.producto=="celular"){
        Swal.fire({
            imageUrl:`${producto.imagen}`,
            html:
            `<li>${producto.camara}</li>
            <li>${producto.caracteristicas}</li>
            <li>Bateria: ${producto.bateria}</li>
            <li>Memoria de ${producto.memoria}</li>`,
            background:`#c5c8e7`
        })}else if(producto.producto=="auricular"){
          Swal.fire({
            imageUrl:`${producto.imagen}`,
            html:
            `<li>${producto.data}</li>
            <li>${producto.data2}</li>
            <li>${producto.data3}</li>
            <li>${producto.data4}</li>`,
            background:`#c5c8e7`,
        })
        }else if(producto.producto=="tablet"){
          Swal.fire({
            imageUrl:`${producto.imagen}`,
            html:
            `<li>${producto.data}</li>
            <li>${producto.data2}</li>
            <li>${producto.data3}</li>
            <li>${producto.data4}</li>`,
            background:`#c5c8e7`,
        })
        }
    })
    cardClonada.querySelector(".btnAgregado").innerText="Añadir al carrito"
    cardClonada.querySelector(".btnAgregado").addEventListener("click",()=>{
      if(producto.stock>0){
        if(producto.producto=="celular"){
        agregarCelCarrito(producto.id)}
        else if(producto.producto=="auricular"){
          agregarAurCarrito(producto.id)
        } else if(producto.producto=="tablet"){
          agregarTabCarrito(producto.id)
        }
      total +=producto.precio
      localStorage.setItem("total",JSON.stringify(subtotal))
      producto.stock--
      document.querySelector(".carrit").innerHTML=`<button class="cart"><a href="./Carrito.html"><i class="fa-solid fa-cart-shopping">(${carrito.length})</i></a></button>`
      cardClonada.querySelector(".btnAgregado").textContent="Añadido"
      localStorage.setItem("cart",JSON.stringify(carrito))
      sessionStorage.setItem("stock",JSON.stringify(producto.stock))
      
      }else if(producto.stock===0){
        cardClonada.querySelector(".btnAgregado").textContent="Sin Stock"
      }
    })
    cardClonada.querySelector(".btnAgregado").addEventListener("mouseover",()=>{
      cardClonada.querySelector(".btnAgregado").textContent="Añadir al carrito"
    })
})
}
