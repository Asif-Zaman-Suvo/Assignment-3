// tinyFriend Assignment Start 

function tinyFriend(name){

    var smallest=name[0];

    for(var i=0;i<name.length;i++){
        var currentName=name[i];

        if (currentName<smallest){

            smallest=currentName;

        }

    }
    return smallest;

}


var tiny=tinyFriend(["surjo","son","sufia","suvo"])
console.log(tiny);


// tinyFriend Assignment Finish 
    
        
