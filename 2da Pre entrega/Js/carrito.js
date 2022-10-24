let carrito = JSON.parse(localStorage.getItem("cart")) || [];

const texto2=document.querySelector(".carrit").innerHTML=`<li class="carrit"><a href="./Carrito.html"><i class="fa-solid fa-cart-shopping">(${carrito.length})</i></a></li>`
