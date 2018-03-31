/**
 * Created by Fasila on 3/7/2018.
 */


 var button= document.querySelector("button");
var isPurple=false;
/*button.addEventListener("click",function () {
   // alert("clicked");
    
    document.body.style.background="pink";

});*/

/*
button.addEventListener("click",function(){
 if(isPurple){
     document.body.style.background="white";
 } 
    else{
     document.body.style.background="purple";
 }
    isPurple=!isPurple;
});

    */

button.addEventListener("click",function(){
    document.body.classList.toggle("purple");
})