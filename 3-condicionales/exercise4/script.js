var dogAge = 10;
var first = 15;
var second = 9;
var third = 5;

if (dogAge === 1){
  console.log (`tiene ${first} años`)
}else if (dogAge === 2){
  console.log (`tiene ${first+second} años`)
}else if (dogAge >= 3){
  console.log (`tiene ${first+second+(third*(dogAge-2))} años`)
}