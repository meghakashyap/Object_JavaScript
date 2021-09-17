var user = require("readline-sync");
var students = {};
for (var i=0; i<10; i++){
    var name = user.question("Enter Your name =");
    var marks = user.questionInt("Enter your marks ! =");
    students[name]=marks
}
console.log(students);
// take input and create object