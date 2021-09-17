var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 }
var max = 0 ;
for ( i in my_dict){
    var count = 0;
    for ( x in my_dict){
        if (my_dict[i]>my_dict[x]){
            max = my_dict[i]
            count++
        }
        if (count == 3){
            console.log(max)
            break
        }
    }
}

// three max value