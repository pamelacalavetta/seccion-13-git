

const form = document.getElementById('myForm');
function validateForm() {
    const input = document.getElementById("email");
    const inputValue = input.inputValue;

    if (!validateEmail(inputValue)) {
        alert('POR FAVOR INGRESE UN CORREO VALIDO')

    } else {
        alert('CORREO ENVIADO CORRECTAMENTE')
    }

    // si nosotros ponemos un objeto trata de convertitr rl valor a booleano
}
if (form) {

    form.addEventListener('submit', function (lala) {
        lala.preventDefault();
        validateForm();
    });
}
document.querySelector("button.button-menu-toggle")

    .addEventListener("click", function () {

        document.querySelector(".nav-links").

            classList.toggle("nav-links-responsive")
    })