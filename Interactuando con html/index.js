const lista=document.querySelector("#listado")

fetch("./data.json")
.then((res)=>res.json())
.then((data)=>{
  data.forEach((producto) => {
    const div=document.createElement("div")
    div.innerHTML=`
    <h3>${producto.marca}</h3>
    <h4>${producto.modelo}</h4>
    <img src="">${producto.imagen}</img>
    <p>Precio:$${producto.precio}</p>`
    lista.append(div)
  })
})

