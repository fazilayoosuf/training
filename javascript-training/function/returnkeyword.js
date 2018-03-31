/**
 * Created by Fasila on 12/6/2017.
 */


// we use the return keyword to output a value from a function



function  square(x) {
   return (x * x );
}
console.log(square(6));

// the return keyword stops execution of a function

function capitalize(str){
    if(typeof  str === "number") {
        return " It's not a string!"
    }
    return str.charAt(0).toUpperCase() + str.slice(1);

}

var name= "idris";
var capital= capitalize(name);

var num= 40;
var capital = capitalize(num);
console.log(capitalize("idris"));
console.log(capitalize(20));
function test(x,y){
    return y-x;

}
console.log(test(10,30));




 // function to find whether a number is even or odd
function iseven(num){
    return num % 2 === 0;
}
 console.log(iseven(4));