const div = document.querySelector('div')

function multiplication (a , b){
  return (a*b)
}

console.log(multiplication(3,8))
div.innerHTML = multiplication(2,5)