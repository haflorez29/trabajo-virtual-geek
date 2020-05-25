const div = document.querySelector('.div1')
const geekGirl1 = {
  name : 'Susana',
  age : 34,
  profesion : 'periodista',
  run : () => {return('Estoy corriendo')},
  runAMarathon : (distance) => {return (`Estoy coriendo un maratón de ${distance} kilometros`)}
  }

console.log (geekGirl1.run())
console.log (geekGirl1.runAMarathon(50))

div.innerHTML = `Mi nombre es ${geekGirl1.name}. Tengo ${geekGirl1.age} y soy ${geekGirl1.profesion}`
