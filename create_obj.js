var key=['one','two','three','four','five'];
var value=[1,2,3,4,5,];
var new_dict = {};
for (i in value){
    new_dict[key[i]] = value[i]
}
console.log(new_dict)
// create object using list