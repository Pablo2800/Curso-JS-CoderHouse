let celulares=[
    {id:1,marca:"Samsung",modelo:"A50",precio:400},
    {id:2,marca:"Samsung",modelo:"A40",precio:350},
    {id:3,marca:"iPhone",modelo:"13",precio:450},
    {id:4,marca:"iPhone",modelo:"13 Pro Max",precio:550}
]
let section=document.getElementById("objetos")
let temp=document.querySelector("template")
let card = temp.content.querySelector("div")

celulares.forEach((producto)=>{
    let cardClonada=card.cloneNode(true)
    section.appendChild(cardClonada)
    cardClonada.children[0].innerText=producto.marca
    cardClonada.children[1].innerText="Modelo "+producto.modelo
    cardClonada.children[2].innerText="Precio:$"+producto.precio
})


const buttonCard=document.querySelector("#btnAgregado")

buttonCard.addEventListener("click",()=>{
    console.log("Añadiste al carrito")
})

const formulario=document.querySelector("form")

const datosU=document.querySelector("#formName")

datosU.addEventListener("input",(e)=>{
    console.log(e.target.value)
})

datosU.addEventListener("blur",(e)=>{
    if(e.target.value ===""){
        console.log("Campo obligatorio")
    } else{
        console.log("Validacion Exitosa")
    }
    })

const datosM=document.querySelector("#formMail")

datosM.addEventListener("input",(e)=>{
    console.log(e.target.value)
})

datosM.addEventListener("blur",(e)=>{
    if(e.target.value ===""){
        console.log("Campo obligatorio")
    } else{
        console.log("Validacion Exitosa")
    }
})

formulario.addEventListener("submit",validarFormulario)
function validarFormulario(e){
    e.preventDefault()
    console.log(`${datosU.value} ${datosM.value}`)
}
