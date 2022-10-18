auriculares=[]

async function fetchProductos() {
    const resp = await fetch("/2da Pre Entrega/Auriculares.json");
    return await resp.json();
}
  
fetchProductos().then((productos) => {
    auriculares = productos;
    cardProduct2(auriculares, card);
});

function cardProduct2(array,card){
    array.forEach((producto) => {
    let cardClonada = card.cloneNode(true);
    section.appendChild(cardClonada);
    cardClonada.children[0].innerText = producto.marca;
    cardClonada.children[2].src = producto.imagen;
    cardClonada.children[1].innerText = producto.modelo;
    cardClonada.children[3].innerText = "Precio:$" + producto.precio;
    cardClonada.querySelector(".btnAgregado").innerText="Añadir al carrito"
    cardClonada.querySelector(".info").innerHTML=`<button class="info"><i class="fa-solid fa-circle-info"></i></button>`
    //cardClonada.querySelector(".stock").innerText=`Stock ${producto.inventario}`
    cardClonada.querySelector(".info").addEventListener("click", () => {
      Swal.fire({
          html:
          `<li>${producto.data}</li>
          <li>${producto.data2}</li>
          <li>${producto.data3}</li>
          <li>${producto.data4}</li>`,
          background:`#ffe3b3`,
      })
    })
    cardClonada.querySelector(".btnAgregado").addEventListener("click",()=>{
        carrito.push(producto)
        document.querySelector(".carrit").innerHTML=`<button class="cart"><a href="./Carrito.html"><i class="fa-solid fa-cart-shopping">(${carrito.length})</i></a></button>`
        cardClonada.querySelector(".btnAgregado").textContent="Añadido"
        localStorage.setItem("cart",JSON.stringify(carrito))
        producto.inventario--
        localStorage.setItem("stock",JSON.stringify(producto.inventario))
        producto.inventario === 0 && cardClonada.querySelector(".btnAgregado").remove()
        total +=producto.precio
        sessionStorage.setItem("totalCart",JSON.stringify(total))
      })
      cardClonada.querySelector(".btnAgregado").addEventListener("mouseover",()=>{
        cardClonada.querySelector(".btnAgregado").textContent="Añadir al carrito"
      })
    })
}