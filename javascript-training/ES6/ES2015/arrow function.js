/**
 * Created by Fasila on 3/21/2018.
 */

//call,bind,apply are allow us to define this keyword manually
//bind creates the copy of the function while it calls immediately

function person(name){
    this.name=name;
}

person.prototype.myfriends5=
    function(friends){

    var arr=friends.map(function(el){

        return this.name +' is friends with ' + el;


    }.bind(this));
        console.log(arr);
}

var friends=['bob','john','jane'];
new person('fazi').myfriends5(friends);



//ES6

person.prototype.myfriends6=
    function(friends){

      //  var arr=friends.map(el) =>

            return this.name+' is friends with '+ el;



        console.log(arr);
    }
new person('Mike').myfriends6(friends);

