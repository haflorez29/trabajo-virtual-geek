
const div = document.querySelector('.div1')
const div1 = document.querySelector('.div2')
const geekGirl1 = {
  name : 'Susana',
  age : 34,
  profesion : 'periodista',
  run : ()=> console.log ('Estoy corriendo')
}
const geekGirl2 = {
  name : 'Rocio',
  age : 25,
  profesion : 'actriz'
}

div.innerHTML = `Mi nombre es ${geekGirl1.name}. Tengo ${geekGirl1.age} y soy ${geekGirl1.profesion}`

div1.innerHTML = `Mi nombre es ${geekGirl2.name}. Tengo ${geekGirl2.age} y soy ${geekGirl2.profesion}`


