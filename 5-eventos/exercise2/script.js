function i (){ 
var input = document.querySelector('#input').value;
console.log(`Hola ${input}`)
}
const button = document.querySelector('button');
button.addEventListener('click', i)