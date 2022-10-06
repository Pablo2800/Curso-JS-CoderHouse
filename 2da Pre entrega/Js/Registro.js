const nombre=document.querySelector("#name")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const form=document.querySelector("#form")
const parrafo=document.querySelector("#warnings")

form.addEventListener("submit",(e)=>{
    if(nombre.value.lenght<6){
        console.log("Nombre corto")
    }
})