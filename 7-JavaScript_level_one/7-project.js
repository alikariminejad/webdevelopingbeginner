var firstname = prompt("First name please: ")
var lastname = prompt("Last name please: ")
var age = prompt("How old are you?")
var height = prompt("What is your height?")
var petname = prompt("What is your pet name?")
alert("Thank you so much for information!")

//logic


// Four conditions
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

// name condition
if(firstname[0] === lastname[0]){
    nameCond = true;   
}else{
    nameCond = false;
}

// age condition
if(age > 20 && age < 30){
    ageCond = true;
}else{
    ageCond = false;
}

// height condition
if(height >= 170){
    heightCond = true;
}else{
    heightCond = false;
}

// pet name condition
if(petname[petname.length-1] === "y"){
petCond = true;
}else{
petCond = false;
}

// check all conditions
if(nameCond && ageCond && heightCond && petCond){
    console.log("Welcome spy");
}else{
    console.log("Nothing to see here");
}