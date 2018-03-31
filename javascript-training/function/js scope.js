/**
 * Created by Fasila on 1/3/2018.
 */


// scope is  the context that the code is exeduted in

// in this prgrm we first declare num= 8 ,outside the function num is incremented by 1( 9 ).
  //  inside the domath function num value is 9 then it is incremented by 1(10)
   var num=8;


function  domath() {

    num=num + 1;
    if(num%5===0) {
        return true
    }
    else {
        return false
    }

}
  num+=1;
console.log(domath());

// example 2

 // name fazi is declared outside the funcion. ( it is  global variable)
// name shafi is declared inside the function.  (it is local variable)
// when we call a function it display the name variable that is present inside the function.
 var name="fazi";
 function hi(){
     var name="shafi";
     console.log(name);
 }

hi();
console.log(name)

// example 3
// variable name  without  using var keyword ais considered as global
// both displays anu 
var name="aji";
function bye(){
     name="anu";
    console.log(name);
}

bye();
console.log(name)