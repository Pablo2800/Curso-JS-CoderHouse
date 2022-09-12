let lista=prompt("Seleccione un catalogo: "+"\n"+"1)Celulares"+"\n"+"2)Tablets"+"\n"+"3)Auriculares");
class Celulares{
    constructor(marca,modelo,precio){
    this.marca=marca;
    this.modelo=modelo;
    this.precio=precio;
}
mostrarProducto(){
    return this.marca+" "+this.modelo+" "+this.precio
}
}
const celular1=new Celulares("Samsung","A50","$60.000")
const celular2=new Celulares("Motorola","G20","$55.000")
const celular3=new Celulares("Xiaomi","Readmi Note 11","$82.000")
const celular4=new Celulares("Apple","iPhone 13 Pro Max","$300.000")
class Tablets{
    constructor(marca,modelo,precio){
        this.marca=marca
        this.modelo=modelo
        this.precio=precio
    }
    mostrarProducto(){
        return this.marca+" "+this.modelo+" "+this.precio
    }
}
const tablet1=new Tablets("Lenovo","Tab K10","$77.000")
const tablet2=new Tablets("Hp","Pavilion 15","$115.000")
const tablet3=new Tablets("Samsung","Galaxy tab A8","$80.000")
const tablet4=new Tablets("Apple","!Pad 9° generacion","$88.000")
class Auriculares{
    constructor(marca,cantidad,precio){
        this.marca=marca
        this.cantidad=cantidad
        this.precio=precio
    }
    mostrarProducto(){
        return this.marca+" "+this.precio}
    }
const auricular1=new Auriculares("Sony",1,9000)
const auricular2=new Auriculares("JBL",1,"$12.000")
const auricular3=new Auriculares("Motorola",1,"$11.000")

const stockTablets=[tablet1,tablet2,tablet3,tablet4]
const stockCelulares=[celular1,celular2,celular3,celular4]
const carrito=[]
let total=0
switch (lista) {
        case "1":
            let listaCelulares=prompt("Agregar al carrito: "+"\n"+
                                   "1)"+celular1.mostrarProducto()+"\n"+
                                   "2)"+celular2.mostrarProducto()+"\n"+
                                   "3)"+celular3.mostrarProducto()+"\n"+
                                   "4)"+celular4.mostrarProducto())                             
               switch (listaCelulares) {
                   case "1":
                       carrito.push(celular1.mostrarProducto())
                       break;
                   case "2":
                       carrito.push(celular2.mostrarProducto())
                       break;
                   case "3":
                       carrito.push(celular3.mostrarProducto())
                       break;
                   case "4":
                       carrito.push(celular4.mostrarProducto())
                   default:
                        
                       break;
               }
           break;
        case "2":
            let listaTablets=prompt("Agregar al carrito: "+"\n"+
                                   "1)"+tablet1.mostrarProducto()+"\n"+
                                   "2)"+tablet2.mostrarProducto()+"\n"+
                                   "3)"+tablet3.mostrarProducto()+"\n"+
                                   "4)"+tablet4.mostrarProducto())
               switch (listaTablets) {
                   case "1":
                       carrito.push(tablet1.mostrarProducto())
                       break;
                   case"2":
                       carrito.push(tablet2.mostrarProducto())
                       break;
                   case "3":
                       carrito.push(tablet3.mostrarProducto())
                        break;
                   case "4":
                       carrito.push(tablet4.mostrarProducto())
                       break;
                   default:
                      alert("ERROR")
                       }
           break;
        case "3":
            let listaAuriculares=prompt("Agregar al carrito: "+"\n"+
                                    "1)"+auricular1.mostrarProducto()+"\n"+
                                    "2)"+auricular2.mostrarProducto()+"\n"+
                                    "3)"+auricular3.mostrarProducto())
                switch (listaAuriculares) {
                    case "1":
                        carrito.push(auricular1.mostrarProducto())
                        break;
                    case "2":
                        carrito.push(auricular2.mostrarProducto())
                        break;
                    case "3":
                        carrito.push(auricular3.mostrarProducto())
                        break;
                    default:
                        break;
                }
}
alert("En el carrito hay: "+carrito)