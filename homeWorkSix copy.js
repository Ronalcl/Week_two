// 1)
 var local = [];
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
function findnumber(num2Find, numFound) {
    for (var i = 0; i < numArray.length; i += 1)
        if (numFound[i] === num2Find) {
            local.push(i);
        }
}


findnumber(27, numArray);
var foundNum = 5;
console.log(local)
 // Could have done indexOf L()L
// 2)
var addedAll = 0;
var ayeRay = [];

for (var i = 0; i < numArray.length; i += 1) {
    addedAll += numArray[i];
     }
     ayeRay.push(addedAll);
     console.log(ayeRay)

// 3)

var array3 = [1,2,3,4,5,6,7,8,9,10];
array3.splice(9/* location of item in array to delete*/, 1/* how many to delete */);
// array3.pop(9); 
console.log(array3);

// 4)
function bustOver25(x,y){
    
    if( y + x <=25){
        console.log("True");
    } else {
        console.log("False");
    }
}
bustOver25(23, 2);
// 5)
var arrayString = [];
function twelveAndBelow (r, b){
    if (r.length + b.length > 12){
        console.log("Error string too long.")
    } else {  arrayString.push(r, b) ;
        console.log(arrayString);
    }
}
twelveAndBelow("WASSUP", "?")

// 6) 
var num = 0;
do {
  num++;
  console.log("Very Low Number");
} while (num <=5); do {
    num++; console.log("Low Number");
} while (num <=10); do {
    num++; console.log("High Number");
} while (num <=15); do {
    num++; console.log("Very High Number");
} while (num <=20);



function handleClick(){
    console.log("Hands off!");
}