// function greet(name,callback){
//     console.log("Hello " + name);
//     callback();
// }

// function aftergreet(){
//     console.log("welcome to the callback function practice!");
// }

// greet("jhon",aftergreet)
// ------------------------------------
// setTimeout(function(){
//     console.log("TImer finished");
    
// }, 5000)

// function x(y){
//     console.log("x");
//     y();
    
// }
// x(function y(){
//     console.log("y");
// })
// -----------------------------------------

function one() {
    const a = 10;
    two();
  }
  function two() {
    const b = 20;
    console.log("Inside two");
  }
  one();
  
//   ---------------------------------
// interview level
var x = 1;
function foo() {
  var x = 2;
  function bar() {
    console.log(x);
  }
  return bar;
}
var baz = foo();
baz(); // 2, not 1
