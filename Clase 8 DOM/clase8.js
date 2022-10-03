//Las clases se ponen con un .
const conetenedores = document.querySelector(".container")
//A los id se los llama con un #
const formulario =document.querySelector("#formName")
//A las etiquetas se las llama por su nombre
const texto=document.querySelector("h1")
       

//Como modificar
const texto2=document.querySelector("h2").textContent="Texto modificado"
//Como eliminar
const deleteText=document.querySelector("h3")
deleteText.remove()
//Como agregar
let agregado=document.createElement("h5")
agregado.innerHTML="<h5>Parrafo de demostracio</h5>"
document.body.appendChild(agregado)
//Como iterar en un array
const lista=document.querySelector("#listaCarrito")
let cursos=["Diseño ux/ui",",Marketing","Data","Producto"]
for(let curso of cursos){
    let listado=document.createElement("li")
    listado.innerHTML=curso
    lista.appendChild(listado)
}
