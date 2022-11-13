//capturar el elemento boton
const button = document.getElementById("button")
//Capturar elemento h1 y h2
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")
//escuchar click en boton
button.addEventListener("click", askName)
//Funcion para preguntar nombre
function askName() {
    const nombre = prompt("Introduce tu nombre")
    insertName(nombre)
}
//Funcion para hidratar h1 y h2
function insertName(name) {
    h2.textContent = "Hola mucho gusto 🤟"
    h1.textContent = name
}