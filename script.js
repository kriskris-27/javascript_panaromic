// console.log('Hello js');
// function addtwoval(a,b){
//     return a+b
// }

// console.log(addtwoval(2,4));


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




function greeting(mamname,callback,cbname){
    console.log(`Good morning ${mamname} mam`);
    callback(cbname);
}

function returngreet(kris){
    console.log(`Good morning ${kris}`)
}

greeting("mahalakshmi",returngreet,"krishna")

