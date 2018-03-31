/**
 * Created by Fasila on 3/10/2018.
 */

var p1Button=document.querySelector("#p1");
var p2Button=document.getElementById("p2");
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");

var p1score=0;
var p2score=0;
var winningscore=5;

var gameover=false;

p1Button.addEventListener("click",function(){
    if(!gameover) {
        p1score++;
        if(p1score===winningscore){
            gameover=true;
        }
        p1display.textContent = p1score;
    }
});

p2Button.addEventListener("click",function(){
    p2score++;
    p2display.textContent=p2score;
});