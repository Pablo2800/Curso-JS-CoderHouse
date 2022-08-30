/*let food=prompt("¿Que se le antoja cenar?")
switch(food){
    case "hamburguesa":
        console.log(`Pedido: ${food},valor 1000`)
        break;
    case "pizza":
        console.log(`Pedido: ${food},valor 1200`)
        break;
    case"lomo":
        console.log(`Pedido: ${food},valor 1300`)
        break;
        default:
            console.log("Hoy no pedimos cena")
            break;
}*/

/*let option = prompt(`Elija un opcion de pelicula:
1)Batman
2)Superman
3)Spiderman
4)Moonfall`)

switch(option){
    case "1":
        alert("Batman")
        break;
    case "2":
        alert("Superman")
        break;
    case"3":
        alert("Spiderman")
        break;
    case "4":
        alert("Moonfall")
        break;
    default:
        alert("No ingresaste una pelicula valida")
        break;
}   */

//WHILE

/*let x = 0
while (x<=10) {
    console.log(`El valor de x es: ${x}`)
    x++
}*/

/*let entrada=prompt("Ingrese un texto o ESC para interrumpir")
let texto= " "
while (entrada != "ESC" && entrada !="esc") {
    texto += entrada +" "
entrada=prompt("Ingrese un texto o ESC para interrumpir")
}
alert(texto)*/

//DO-WHILE

/*let y=0
do{
    console.log(`El valor de y, es: ${y}`)
    y++
} while(y<=10)*/

//FOR

/*for (let i=0;i <10; i++) {
    alert(`El valor de i es: ${i}`)
}*/

//TABLA DE MULTIPLICAR

/*let numero=Number(prompt("Ingrese un numero: "))
for(let i=1;i<=10;i++){
    let resultado= numero * i
    alert(`${numero} X ${i} = ${resultado}`)
}*/

for (let i=0;i<=10; i++){
    if(i === 6){
        continue 
    }
    alert(`El valor de i es ${i}`)
}