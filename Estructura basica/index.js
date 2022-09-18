let celulares=[
    {id:1,marca:"Samsung",modelo:"A50",precio:400},
    {id:2,marca:"Samsung",modelo:"A40",precio:350},
    {id:3,marca:"iPhone",modelo:"13",precio:450},
    {id:4,marca:"iPhone",modelo:"13 Pro Max",precio:550}
]

for(celular of celulares){
    let bloque=document.createElement("div")
    bloque.innerHTML=`<h3>Celular: ${celular.marca} ${celular.modelo}</h3>
    <p>Precio: ${celular.precio}</p>`
    document.body.appendChild(bloque)
}