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