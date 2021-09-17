var user = require("readline-sync");
var num = user.question("Enter Any character? =");
dict={"name":"Raju", "marks":56};
var response = "";
for ( i in dict){
    if (dict.hasOwnProperty(num)){
        console.log("exists");
        break
    }
    else {
        console.log( "Not exists");
    } 
}
// check property exists or not


