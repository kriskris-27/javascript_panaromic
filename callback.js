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



// function outer(){
//     var a =10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// outer()()


//FUNction

// console.log('Hello js');
// function addtwoval(a,b){
//     return a+b
// }

// console.log(addtwoval(2,4));

//object

// const car = {
//     name:"Audi r8",
//     manuf:"Audi",
//     cc:"2500",
//     bhp:"600",
//     torque:"520",
//     color:"red"
// };

// console.log(car)

// const Audi_r8=new Object();
// Audi_r8.cc=2500;
// Audi_r8.bhp=620;
// Audi_r8.torque=590;
// Audi_r8.color="black";
// Audi_r8.Addons="Yes"

// console.log(Audi_r8);

// // console.log(typeof(Audi_r8));


// class Car{
//     constructor(brand){
//         this.carname=brand
//     }
//     whatcar(){
//         return 'I have a ' + this.carname;
//     }
// }

// let thisCar=new Car("gtr");
// console.log(thisCar.whatcar())




// function greeting(mamname,callback,cbname){
//     console.log(`Good morning ${mamname} mam`);
//     callback(cbname);
// }

// function returngreet(kris){
//     console.log(`Good morning ${kris}`)
// }

// greeting("mahalakshmi",returngreet,"krishna")


//callback fetch

// function getUserdata(api,callback,whereto){
//     fetch(api)
//         .then(res=>res.json())
//         .then(data=>{
//             callback(data,whereto);
//         })
// }

// function handleUser(data,whereto){
//     console.log(`You are at ${whereto} and here is your detils`,data);
    
// }

// getUserdata("https://jsonplaceholder.typicode.com/users/1"
// ,handleUser,"Dashboard");


//BLOCKING MAIN THREAD


// function blockmainthread(sec){
//     console.log("START");
//     const start=Date.now();
//     while(Date.now()-start <= sec*1000){
        
//     }
//     console.log("END")
// }


// console.log("ENTERING")
// blockmainthread(4)
// console.log("EXITING");


