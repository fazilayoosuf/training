/**
 * Created by Fasila on 12/6/2017.
 */

// write a  function factorial() which takes a single numeric argument and returns the factorial of that number
// 4! is 4 * 3 * 2 * 1
// factorial(4) is 24

function factorial(num)
{
     // define a result variable
    var res=1;
    // calculate  factorial and  store value in result
    for( var i=1;i<=num;i++)
    {
        res *=i;
    }
    return res;
}

console.log(factorial(4));