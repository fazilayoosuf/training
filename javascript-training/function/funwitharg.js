/**
 * Created by Fasila on 12/6/2017.
 */
// function with arguments
function square(num)
{
    console.log(num*num);
}
 //when we call square we need to pass in a value

square(10);
square(6);
square(5);

// example 2

function hello()
{
    console.log("hello there")

}
hello();
function hello(name)
{
    console.log("hai" + name + "how are you")
}


hello("fazi");

// functions can have as many arguments as needed

function area(length,width){
    console.log("area is:",length*width);
}
area(6,3);

function person(person1,person2,person3){
    console.log("hi "+ person1);
    console.log("hello  "+ person2);
    console.log("myself  "+ person3);
}

person("abu","anu","aji");