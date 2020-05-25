const contador = {
  valorMaximo : 10,
  valorMinimo : 1,
  valorInicial : 4 ,
  valorActual : 3,
  aumentar : function() {return (this.valorInicial+1 )},
  disminuir : function() { return (this.valorInicial -1 )},
  restablecer : function(){ return (this.valorActual)}
}

console.log(contador.aumentar())
console.log(contador.disminuir())
console.log(contador.restablecer())
