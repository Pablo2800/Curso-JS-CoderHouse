fetchProductos().then((productos)=>{
    catalogo=productos
    cardProduct(catalogo,card)
    function MostrarPrecios(n_ofer,product){
      if(catalogo[product].producto=="tablet" || catalogo[product].producto=="auricular"){
    n_ofer.querySelector(".precio_ant").innerHTML=`<del>Precio anterior:$${catalogo[product].precio+1000}</del>`
    n_ofer.querySelector(".precio_act").innerHTML=`Precio actual:$${catalogo[product].precio}`
    }
    else if(catalogo[product].producto=="celular"){
    n_ofer.querySelector(".precio_ant").innerHTML=`<del>Precio anterior:$${catalogo[product].precio+10000}</del>`
    n_ofer.querySelector(".precio_act").innerHTML=`Precio actual:$${catalogo[product].precio}`
  }
  }
    MostrarPrecios(c1,12)
    MostrarPrecios(c2,22)
    MostrarPrecios(c3,7)
    MostrarPrecios(c4,9)
    MostrarPrecios(c5,16)
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
const c2=document.querySelector("#car2")
const c3=document.querySelector("#car3")
const c4=document.querySelector("#car4")
const c5=document.querySelector("#car5")
ofertaAur(c1,12)
ofertaTab(c2,22)
ofertaCel(c3,7)
ofertaCel(c4,9)
ofertaAur(c5,16)
//Mostrar los auriculares en oferta
function ofertaAur(elemento,posicion){
elemento.addEventListener("click",()=>{
  catalogo.forEach(()=> {
    Swal.fire({
     title:catalogo[posicion].marca+" "+catalogo[posicion].modelo,
     imageUrl:`${catalogo[posicion].imagen}`,
     html:`<p><del>Antes: $${catalogo[posicion].precio+1000}</del></p>`+
     `<p>Ahora: $${catalogo[posicion].precio}</p>`+
     `<p>${catalogo[posicion].data}</p>`+
    `<p>Para mas informacion</p>`+
    `<button class="btnAgregar"><a href="./Auriculares.html"}">Ir a catalogo ${catalogo[posicion].producto}</button>`,
    imageHeight:250,
    background:`#c5c8e7`
  })
  });
})
}
//Mostrar las tablets en oferta
function ofertaTab(elemento,posicion){
  elemento.addEventListener("click",()=>{
    catalogo.forEach(()=> {
      Swal.fire({
       title:catalogo[posicion].marca+" "+catalogo[posicion].modelo,
       imageUrl:`${catalogo[posicion].imagen}`,
       html:`<p><del>Antes: $${catalogo[posicion].precio+1000}</del></p>`+
       `<p>Ahora: $${catalogo[posicion].precio}</p>`+
       `<p>${catalogo[posicion].data}</p>`+
      `<p>Para mas informacion</p>`+
      `<button class="btnAgregar"><a href="./Tablets.html"}">Ir a catalogo ${catalogo[posicion].producto}</button>`,
      imageHeight:250,
      background:`#c5c8e7`
    })
    });
  })
  }
  //Mostrar los celulares en oferta
function ofertaCel(elemento,posicion){
elemento.addEventListener("click",()=>{
  catalogo.forEach(()=> {
    Swal.fire({
     title:catalogo[posicion].marca+" "+catalogo[posicion].modelo,
     background:`#c5c8e7`,
     imageUrl:`${catalogo[posicion].imagen}`,
     html:`<p><del>Antes: $${catalogo[posicion].precio+10000}</del></p>`+
     `<p>Ahora: $${catalogo[posicion].precio}</p>`+
     `<p>${catalogo[posicion].camara}</p>`+
    `<p>Para mas informacion</p>`+
    `<button class="btnAgregar"><a href="./${catalogo[posicion].marca}.html">Ir a catalogo ${catalogo[posicion].marca}</button>`,
    imageHeight:250
  })
});
})
}


