function tinyFriend(name) {
    var indexOfSmallest = 0
    var smallestName = name[0]
  
    for (var i = 0; i < name.length; i++) {
      if (name[i] < smallestName) {
        smallestName = name[i]
        indexOfSmallest = i
      }
    }
    name.splice(indexOfSmallest,1)
    return name;
  }

 var tiny= tinyFriend(['rahim', 'karim' , 'top' , 'parvej' , 'ratul' ]);

 console.log(tiny);

  
  