    // feetToMile Assignment Start 

    function feetToMile(foot)

    {
        var mile=foot/5280;
        mile=mile.toFixed(2);

        return mile;
    }

    var result=feetToMile(29029);
    console.log(result);


    // feetToMile Assignment Finish



    // woodCalculator Assignment Start 


    function woodCalculator(chair,table,bed){
        var chairA=chair*1 ;
        var tableB=table*3;
        var bedC=bed*5;
        
        var total=chairA+tableB+bedC;
        
        return total;
        
        }
        
        var amountOfWood=woodCalculator(10,8,6);
        console.log(amountOfWood);
        
        
        // woodCalculator Assignment Finish 



                // brickCalculator Assignment Start 
            
            
            
                function brickCalculator(height){


                    var first=10;
                    var second=10;
                    var third=10;
                    
            
            
            
                        if(height>0 && height<=10){
            
                            
            
                            var sumOfBricksA=first*15
            
                            var sumOfBricksATotal=1000*sumOfBricksA;
                            
            
            
                            return sumOfBricksATotal;
                        
                        }
            
                        if (height>=11 && height<=20){
            
                            
            
                            var sumOfBricksB=second*12;
                            var sumOfBricksBTotal=1000*sumOfBricksB + 150000;
            
                            return sumOfBricksBTotal;
            
            
            
            
                        }
            
                        else if (height>=21 && height <=30){
            
                        
            
            
                            var sumOfBricksC=third *10;
                            var sumOfBricksCTotal=1000*sumOfBricksC +270000;
            
                            return sumOfBricksCTotal;
                        }
            
            
                        else{
                            
                        }
                    
                    }
            
                    
            
            
                var result=brickCalculator(30);
                console.log(result);
            
    //    brickCalculator Assignment Finish



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
        
            

            
                
            
            
                    