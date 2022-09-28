let section = document.getElementById("objetos");
let temp = document.querySelector("template");
let card = temp.content.querySelector("div");


function cardProduct(array,card){
    array.forEach((producto) => {
    let cardClonada = card.cloneNode(true);
    section.appendChild(cardClonada);
    cardClonada.children[0].innerText = producto.marca;
    cardClonada.children[2].src = producto.imagen;
    cardClonada.children[1].innerText = producto.modelo;
    cardClonada.children[3].innerText = "Precio:$" + producto.precio;
    cardClonada.querySelector(".btnAgregado").innerText="Añadir al carrito"
    cardClonada.querySelector(".stock").innerText=`Stock ${producto.inventario}`

    cardClonada.querySelector(".btnAgregado").addEventListener("click",()=>{
      console.log(`Agregaste ${producto.marca}`)
      carrito.push(producto)
      cardClonada.querySelector(".btnAgregado").textContent="Añadido"
      sessionStorage.setItem("cart",JSON.stringify(carrito))
    })
    cardClonada.querySelector(".btnAgregado").addEventListener("mouseover",()=>{
      cardClonada.querySelector(".btnAgregado").textContent="Añadir al carrito"
    })
})
}

//cardClonada.querySelector(".stock").textContent=(`Stock ${(producto.inventario)-1}`)