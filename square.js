var user = require("readline-sync");
var num = user.questionInt("How many more times? =");
var obj = {};
for (var i =0; i<=num; i++){
    obj[i]=i*i
}
console.log(obj);

// square