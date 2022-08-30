let numero=Number(prompt("Ingrese la cantidad de productos que llevara"))
alert("Si el monto final de la compra sobrepasa los $5000 se le realizara un descuento del 20%")
let total=0
for (let i= 0; i < numero ; i++) {
let gasto=Number(prompt(`Ingrese el costo del producto ${i+1}`))
total+=gasto
}
function descuento(total){
    return total-(total*0.2)
}
alert(`El subtotal de su compra es de: ${total}`)
if (total>5000) {
    alert(`Alcanzo el monto adecuado para que se le realize el descuento,por lo cual el precio final de su compra es de: ${descuento(total)}`)
} else {
    alert("No alcanzo el monto adecuado para realizar un descuento")
}
alert("¡¡MUCHAS GRACIAS POR SU COMPRA!!")