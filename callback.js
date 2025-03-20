function greet(name,callback){
    console.log("Hello " + name);
    callback();
}

function aftergreet(){
    console.log("welcome to the callback function practice!");
}

greet("jhon",aftergreet)