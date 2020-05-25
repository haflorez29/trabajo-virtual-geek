const li = document.querySelector('.teacher--isra');
const tuerto = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');
let aux;

function myFunction(e) {  
  aux = e.currentTarget;
  let buscar = aux.querySelector('.favorite')
  aux.classList.toggle('teacher--selected')
  if (buscar.innerHTML === "Quitar"){
   buscar.innerHTML = "Añadir"
  }else if (buscar.innerHTML === "Añadir"){
    buscar.innerHTML = "Quitar"
  }
}

li.addEventListener (('click'), myFunction);
tuerto.addEventListener (('click'), myFunction);
nasi.addEventListener (('click'), myFunction);