/**
 * Created by Fasila on 3/5/2018.
 */

//SELECT THE BODY AND CHANGE ITS COLOR EVERY SECOND

var body=document.getElementsByTagName("body");

var isBlue=false;

setInterval(function(){
    if(isBlue){
       document.body.style.backgroundColor="white";
    }
    else {
        document.body.style.backgroundColor="pink";
    }
    isBlue=!isBlue;
},1000);