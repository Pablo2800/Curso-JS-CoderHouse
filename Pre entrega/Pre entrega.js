function Celulares(id,marca,modelo,precio,inventario){
    this.id=id
    this.marca=marca
    this.modelo=modelo
    this.precio=precio
    this.inventario=inventario
}
let productos =[
    {id:1, marca:'Samsung',modelo:"A50",precio:400,stock:10},
    {id:2, marca:'Samsung',modelo:"B30",precio:550,stock:10},
    {id:3, marca:"Motorola",modelo:"G200",precio:450,stock:9},
    {id:4, marca:"iPhone",modelo:"13 Pro Max",precio:700,stock:12},
    {id:5, marca:"iPhone",modelo:"13",precio:500,stock:8},
    {id:6, marca:"Xiaomi",modelo:"Redmi Note 11",precio:300,stock:11},
    {id:7, marca:"Huawei",modelo:"P40",precio:650,stock:12},
]
let carrito=[]
let lista = "Lista de productos \n"
productos.forEach((el)=> {
	lista += `${el.id} - ${el.marca} ${el.modelo} $${el.precio} \n`
})
function addToCart(){
    let productoId=Number(prompt("Añadir al carrito:"+"\n"+lista))
    let cantidad =Number(prompt("Cantidad: "))
    let producto = productos.find(product => product.id===productoId)
    producto.cantidad=cantidad
    producto.total=producto.precio * cantidad
    carrito.push(producto)
}
addToCart()
function calcularTotal(carrito) {
    let total=0
    carrito.forEach(producto=>{
        total +=producto.total
    })
    return total
}
function mostrarCarrito(carrito) {
    let totalp=" "
    carrito.forEach(producto=>{
        totalp +=producto.marca+" "+producto.modelo+" x"+producto.cantidad+"\n"
    })
    return totalp
}
for(let i=0;i<Celulares.length;i++){
    let respuesta=prompt("Desea seguir comprando?S/N")
    if (respuesta==="S"||respuesta==="s") {
        addToCart()
    } else {
        alert("Muchas gracias por su compra")
        break
    } 
}
alert(`Actualmente el carrito esta compuesto por:\n${mostrarCarrito(carrito)}`)
alert(`El total del carrito es: $${calcularTotal(carrito)}`)
alert(`Ticket de compra: ${Math.round(Math.random()*1000000000)}`)