function iva (a){
  return (`precio sin iva: ${a}, IVA: ${a*0.21} y Total: ${(a*0.21)+ a}`)
}

console.log(iva(100))