/*** javaScript introduced a new keyword const   ***/
const x = 10
const y = [1,2]
const z = {"a":1, "b":2} //use Object freeze to make Object Immutable

 //x = 2 Error Assigment ot constant Variable
 //y  = [1,2] Error Assigment ot constant Variable
 y.push(3) //no error
 console.log(y)

//no error
z["c"] = 2
z["a"] = 3
console.log(z)

//checking the scope of the constants has blocklevel scope
function scope(){
  //const let x  = 10 //Error
  //let const x  =10 //Error
  //const var x = 10 //Error
  {
    const newx  = 10 //No Error
    console.log(newx)
  }
  //console.log(newx) //Error
  //console.log(x)
}
scope()
//console.log(newx) I think const has block level scope

//****************************** Redeclaration Errors *****************************//
var ONE = 1
var ONE = 3 //No error
//let ONE = 1 //Redeclaration Errors
//let ONE = 2 //Redeclaration Error
let TWO = 1
{
  var ONE = 2
  let TWO = 2
  console.log(TWO) //will print 2
}
console.log(TWO) // will print 1
/************************************* End of Redeclaration Error *************************//
