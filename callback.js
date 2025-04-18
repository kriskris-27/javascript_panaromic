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
// --------------------------------------



// closure



function outer(){
    var a =10;
    function inner(){
        console.log(a);
    }
    return inner;
}

outer()()


