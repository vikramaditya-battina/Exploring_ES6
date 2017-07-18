/* Understanding Let keyword */
/* let will have block scope*/
let val = 10
console.log(val)
console.log("Hello Atom");
{
  var newval2 = 3
  let newval = 6
  console.log(newval)
}
console.log(newval2)  // No Error var has functional scope, let has block level scope
//console.log(newval) Error newval is a error, because let will have block scope only

/**************************** Variable Hosting ***********************/
function var_hosting(){
  console.log("In var hosting");
  val = 10;
  var val;
  console.log(val)
}
//no error everything works fin because of variable hosting
var_hosting()

/********** let hosting is not supported **********************/
function let_hosting(){
  console.log("In Let hosting")
  val = 10
  let val
  console.log(val)
}
let_hosting()
