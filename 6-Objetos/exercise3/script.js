const div = document.querySelector('.div')
const geekGirl1 = {
  name : 'Susana',
  age : 34,
  profesion : 'periodista',
  run : () => {return('Estoy corriendo')},
  runAMarathon : (distance) => {return (`Estoy coriendo un maratón de ${distance} kilometros`)},
  showBio : function(){
  return 'Mi nombre es' + " " + this.name + " " +'Tengo' + " " + this.age + " " + 'y soy' + " " + this.profesion}
  }

const geekGirl2 = {
    name : 'Rocio',
    age : 25,
    profesion : 'actriz',
    showBio : function(){
      return 'Mi nombre es' + " " + this.name + " " +'Tengo' + " " + this.age + " " + 'y soy' + " " + this.profesion}
  }

alert (geekGirl1.showBio())
alert (geekGirl2.showBio())

