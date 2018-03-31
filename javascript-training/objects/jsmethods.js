/**
 * Created by Fasila on 1/4/2018.
 */

// javascript methods are actiom that can be performed on objects.
//  js method is a property containing a function  definition

var comments={};
comments.data=["good job","bye","lame"]

console.log(comments.data);

function  print(arr) {
    arr.forEach(function (el) {
        console.log(el)
    })
}

print(comments.data);

comments.print=function  () {
    this.data.forEach(function (el) {
        console.log(el)
    })
}

console.log(comments.print());


