const button = document.querySelector('button');
const ul = document.querySelector('ul')
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const movies =(e)=> {
  let content =document.querySelector(".list")
  content.innerHTML =  `
    <li class="inception">${inception}</li>
    <li class="Butter">${theButterFlyEffect}</li>
    <li class="Eternal">${eternalSunshineOfTheSM}</li>
    <li class="Blue">${blueVelvet}</li>
    <li class="split">${split}</li>`;

    content.addEventListener('click', (e) => {
      console.dir(e.target.textContent)
    })
}

button.addEventListener('click', movies)
