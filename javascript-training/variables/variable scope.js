/**
 * Created by Fasila on 12/14/2017.
 */


//Local Scope:
 //A variable declared inside a function.it cn be accessed inside a function...
//it will not work when accessed outside of the function

//Global scope:
// A variable declared outside a function..it can accessed anywhere...
 // variable that is used without being declared using the var keyword will always live globally






//Local scope

function checkfunction(number){
    var num=11;
    console.log(num);
}

checkfunction(10);

//Example 2: Global scope

var foo="hello!";

function doSomethingClever() {
    console.log(foo);
    var foo = "Good bye";
    console.log(foo);
}
function  samething() {
    console.log("hai  " + foo)
}
doSomethingClever();
samething();


//Example 3:
//  javascript doesn't support block scoping

function checkWeight(Weight) {

    if(Weight > 5000){
        var   text="no free shipping for you";
        console.log(text);
    }
   // console.log(text);

}
checkWeight(6000);


