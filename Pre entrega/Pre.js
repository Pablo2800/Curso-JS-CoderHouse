const Celulares=[
    {id:1, marca:'Samsung',modelo:"A50",precio:400},
    {id:2, marca:'Samsung',modelo:"B30",precio:550},
    {id:3, marca:"Motorola",modelo:"G200",precio:450},
    {id:4, marca:"iPhone",modelo:"13 Pro Max",precio:700},
    {id:5, marca:"iPhone",modelo:"13",precio:500},
    {id:6, marca:"Xiaomi",modelo:"Redmi Note 11",precio:300},
    {id:7, marca:"Huawei",modelo:"P40",precio:650},
]
let Carrito = []
let total=0

let lista = "Lista de productos\n"
Celulares.forEach((el)=> {
	lista += `${el.id} - ${el.marca} ${el.modelo} $${el.precio} \n`
})
alert(lista)
let entrada=Number(prompt("Desea comprar algun objeto?"+"\n"+"1)Si"+"\n"+"2)No"))
if (entrada===1) {
    let compra=Number(prompt("Que celular desea comprar?"+"\n"+lista))
} else if (entrada===2) {
    alert("Muchas gracias por su visita")
}
do {
    for(let i=0;i<Celulares.length;i++){
        let respuesta=prompt("Desea seguir comprando?S/N")
        if (respuesta==="S"||respuesta==="s") {
            prompt(lista)
        } else {
            alert("Muchas gracias por su compra")
            break
        } 
}  
}while(respuesta!='') 
//Esta funcion hace que todos los productos del carrito se sumen
Carrito.forEach((producto)=>(total+=producto.precio))
