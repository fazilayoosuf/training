/**
 * Created by Fasila on 12/6/2017.
 */


function replace(str){
    var newstr=str.replace(/-/g,"*");
    return newstr;

}
console.log(replace("hai-ram"));