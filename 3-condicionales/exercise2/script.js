var name = "heidy"
var div = document.querySelector("div")
if (name === "heidy"){
  console.log (div.innerHTML = `Bienvenida, ${name}`)
}else {
  console.log (div.innerHTML = "Lo siento pero el usuario que has introducido no está registrado.")
}