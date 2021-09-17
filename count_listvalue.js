var dict = {
    'Alex': ['subj1', 'subj2', 'subj3'],
    'David': ['subj1', 'subj2']
    }
var count = 0;
for (i in dict){
    for (j of dict[i] ){
        count++
    }
}
console.log(count);
// count the element in list