/**
 * Created by Fasila on 1/3/2018.
 */


// suppose i wanted to model a single person:name,age and city
// i could use an array like this:

 var person= ["cindy",32,"london"];

//to retrieve the persons age:


person[1]   // this is not a meaningful code


// this is perfect use case  for an object


var person={
    name:"cindy",
    age:32,city:"london"
}

//objects store data in key-value pairs
// objects have no order

//  Retrieving data

 // you have two choices: bracket and dot notation


console.log(person["name"]);
console.log(person.age);


//  Difference between bracket and dot notation

// 1. you cannot use dot notation if the property starts  with a number

//someobject.2blah //invalid
//someobject["2blah"] //valid

// 2. you can lookup using a variable with bracket notation

  var str= "name";
//someobject.str //doesnot look for name
//someobject[str] // does evaluvate str and looks for name

// 3. you cannot use dot notation for property name with spaces

 // someobject.fav color   //invalid
 // someobject["fav color"]  // valid


  // updating data
//  it access a property and reassign it

var person1={
    name:"shafi",
    age:30,city:"london"
}

// to update an age
person1["age"] +=1;
console.log(person1.age);


//    creating objects
// there are a few methods of initializing objects

// take an empty object and then add to it

var person1={}
    name:"shafi";
    age:30;
    city:"london";

// all at once

var person1={
    name:"shafi",
    age:30,
    city:"london"
};

// another way of initializing an object

 var person = new object();
person.name="aji";
person.age=25;
person.city="chennai";

// objects can hold all sorts of data

// it can be a number,string,boolean,array,another object


 var junkobject = {
     age: 45,
     color: "pink",
     ishungry: true,
     friends: ["abu", "anu"],
     pet: {
         name: "tom",
         species: "dog",
         age: 2
     }
 };