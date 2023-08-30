// var myNewO = {a:"hello", b:[1,2,3],c:{inside:['a','b']}};
// myNewO['b'][1]
// myNewO['c']['inside'][1]



// var carInfo = {make:"Toyota",year:1990,model:"Camry"};
// console.dir(carInfo);

// carInfo["make"];
// carInfo['year'] = 2009;
// carInfo['year'] += 1;

// for (key in carInfo){
//     console.log(key);
//     console.log(carInfo[key]);
// }



// Object Methods

// var simple = {
//     prop : "Hello",
//     myMethod : function(){
//         console.log("The myMethod was called")
//     }
// }
// console.dir(simple);
// simple.myMethod()


var myobj = {
    name : "Ali",
    greet : function(){
        console.log("Hello " + this.name)
    }
}
myobj.greet()