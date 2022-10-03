let section = document.getElementById("objetos");
let temp = document.querySelector("template");
let card = temp.content.querySelector("div");
let total = 0
function cardProduct(array,card){
    array.forEach((producto) => {
    let cardClonada = card.cloneNode(true);
    section.appendChild(cardClonada);
    cardClonada.children[0].innerText = producto.marca;
    cardClonada.children[2].src = producto.imagen;
    cardClonada.children[1].innerText = producto.modelo;
    cardClonada.children[3].innerText = "Precio:$" + producto.precio;
    cardClonada.querySelector(".btnAgregado").innerText="Añadir al carrito"
    //cardClonada.querySelector(".stock").innerText=`Stock ${producto.inventario}`

    cardClonada.querySelector(".btnAgregado").addEventListener("click",()=>{
      carrito.push(producto)
      document.querySelector(".carrit").innerHTML=`<li class="carrit"><a href="./Carrito.html">Carrito (${carrito.length})</a></li>`
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

