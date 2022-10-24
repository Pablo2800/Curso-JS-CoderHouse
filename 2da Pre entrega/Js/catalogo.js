fetchProductos().then((productos)=>{
    catalogo=productos
    cardProduct(catalogo,card)
  })

window.addEventListener("load",function(){
  new Glider(this.document.querySelector(".carousel__lista"),{
    slidesToShow: 1,
    dots: '.carousel___indicadores',
    draggable: false,
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente'
    }
  })
})

const c1=document.querySelector("#car1")
const c5=document.querySelector("#car5")
ofertaAur(c1,12)
ofertaAur(c5,16)
function ofertaAur(elemento,posicion){
elemento.addEventListener("click",()=>{
  catalogo.forEach(()=> {
    Swal.fire({
     title:catalogo[posicion].marca+" "+catalogo[posicion].modelo,
     imageUrl:"/2da Pre entrega/Imagenes auriculares/1.png",
     html:`<p><del>Antes: $${catalogo[posicion].precio+1000}</del></p>`+
     `<p>Ahora: $${catalogo[posicion].precio}</p>`+
     `<p>${catalogo[posicion].data}</p>`+
    `<p>Para mas informacion</p>`+
    `<button class="btnAgregar"><a href="./Auriculares.html">Ir a catalogo auriculares</button>`,
    imageHeight:250,
  })
  });
})
}

const c2=document.querySelector("#car2")
const c3=document.querySelector("#car3")
const c4=document.querySelector("#car4")
ofertaCel(c2,3)
ofertaCel(c3,7)
ofertaCel(c4,9)
function ofertaCel(elemento,posicion){
elemento.addEventListener("click",()=>{
  catalogo.forEach(()=> {
    Swal.fire({
     title:catalogo[posicion].marca+" "+catalogo[posicion].modelo,
     imageUrl:`${catalogo[posicion].imagen}`,
     html:`<p><del>Antes: $${catalogo[posicion].precio+10000}</del></p>`+
     `<p>Ahora: $${catalogo[posicion].precio}</p>`+
     `<p>${catalogo[posicion].camara}</p>`+
    `<p>Para mas informacion</p>`+
    `<button class="btnAgregar"><a href="./${catalogo[posicion].marca}.html">Ir a catalogo ${catalogo[posicion].marca}</button>`,
    imageHeight:250,
  })
});
})
}