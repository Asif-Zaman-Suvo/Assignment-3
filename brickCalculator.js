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

       


        