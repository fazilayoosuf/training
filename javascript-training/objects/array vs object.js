/**
 * Created by Fasila on 1/4/2018.
 */


// array with objects
 var posts=[
    {
        title:"cats are mediocre",
        author: "colt",
        comments:["awesome post","terrible post"]
    },
    {
        title:"cats are actually awesome",
        author:"cat lover",
        comments:["lol","i hate u"]
    }

        ]


console.log(posts.length);
console.log(posts[0]);

console.log(posts[0].comments[1])


// object with array values
var someobject={
    friends:[
        {name:"anu"},
        {name:"abu"},
        {name:"shafi"}
    ],
    color:"pink",
    isEvil:true

};


console.log(someobject.friends[2].name);



// create an array of movie objects.each movie should have a title,
// rating and haswatched properties,
// iterate through the array and print out something that looks like

// you have watched "singam" - 5 stars
// you have not seen "siruthai" - 4.5 stars


 var movies =[
     {
         title:"singam",
         haswatched:true,
         rating:5
     },
     {
         title:"siruthai",
         haswatched:false,
         rating:4.5
     }
 ]
   movies.forEach(function (movie) {
       var result="you have";
       if(movie.haswatched)
       {
           result+= " watched";
       }
       else
       {
           result+=" not seen"
       }
       result+= "\"  "+movie.title+" \"-" ;
           result+= movie.rating +" stars";
       console.log(result);

   })

function buildstring(movie) {

    var result="you have";
    if(movie.haswatched)
    {
        result+= " watched";
    }
    else
    {
        result+=" not seen"
    }
    result+= "\"" + movie.title+"\"-" ;
    result+= movie.rating +" stars";
    return result;


}

movies.forEach(function (movie) {
    console.log(buildstring(movie));
})