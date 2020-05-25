const div = document.querySelector("div")

if (div.classList.contains('warning')){
  document.querySelector('h1').innerHTML = "Aviso";
  document.querySelector('p').innerHTML = "Tenga cuidado"
}else if (div.classList.contains('error')){
  document.querySelector('h1').innerHTML = "Error";
  document.querySelector('p').innerHTML = "Ha surgido un error"
}else if (div.classList.contains('succes')){
  document.querySelector('h1').innerHTML = "Correcto";
  document.querySelector('p').innerHTML = "Los datos son correctos"
}