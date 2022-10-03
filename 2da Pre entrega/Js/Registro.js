/*datosU.addEventListener("input", (e) => {
    console.log(e.target.value);
});

datosU.addEventListener("blur", (e) => {
    if (e.target.value === "") {
        console.log(Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campo Obligatorio',
        }));
    } else {
        console.log("Validacion Exitosa");
    }
});*/


/*datosM.addEventListener("input", (e) => {
    console.log(e.target.value);
});

datosM.addEventListener("blur", (e) => {
    if (e.target.value === "") {
        console.log(Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campo Obligatorio',
        }));
    } else {
        console.log("Validacion Exitosa");
    }
});*/

const datosU = document.querySelector("#formName");
const datosM = document.querySelector("#formMail");
const contra = document.querySelector("#contraseña");
const confirmContra = document.querySelector("#confirm");

const formulario = document.querySelector("form");
formulario.addEventListener("submit", validarFormulario);
function validarFormulario(e) {
    e.preventDefault();
}
