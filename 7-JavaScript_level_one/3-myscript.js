var hot = false
var temp = 50
var ham = 10;
var cheese = 10;
var report = "blank";
// if (temp>80) {
//     console.log("Temp is greater than 80")
// }



// if (temp>80) {
//     hot = true
// }
// console.log(hot);


// if (temp>80) {
//     console.log("Hot Outside!")
// }else{
//     console.log("it's not very hot!");
// }

// if (temp>80) {
//     console.log("Hot Outside!")
// } else if(temp <= 80 && temp>= 50){
//     console.log("Average temp Condition");
// }else if (temp < 50 && temp >= 32) {
//     console.log("It's pretty cold outside")
// }else{
//     console.log("It's very cold out")
// }


if (ham >= 10 && cheese >= 10) {
    report = "Strong sales of both ham and cheese"
}else if(ham===0 && cheese ===0){
    report = "Nothing sold!"
}else{
    report = "We had some sales of items"
}

console.log(report)