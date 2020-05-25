const body = document.querySelector('body');

const hola = (e)=>{  
  let f = e.key
  // console.log(f)
  if( f == "m" ){ 
    body.style.backgroundColor="purple"   
  }else if (f == "r"){
    body.style.backgroundColor="red";
  }
}

body.addEventListener('keypress',hola)

