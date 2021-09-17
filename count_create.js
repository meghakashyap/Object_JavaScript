var word = "MISSISSIPPI";
dict = {};
for (var i=0; i<word.length; i++){
    var count = 0;
    for (var j=0; j<word.length; j++){
        if (word[i] == word[j]){
            count+=1
        }
        dict[word[i]] = count
    }

}
console.log(dict);
// count and create