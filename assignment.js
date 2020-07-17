function feetToMile(feet)                                               
{
    var mile = feet/5280;                                    
    return mile;         

}
var output1 = feetToMile(5280);                                  
console.log(output1);                                                         


function woodCalculator(chair,table,bed)                          
{
    var total = (chair*1) +(table*3) + (bed*5);            
    return total;
}

var output2 = woodCalculator(2,2,2);                        
console.log(output2);                                                         


function brickCalculator(floor)                                         
{  
    if(floor<=10)                                                
    {
        totalBrick =15*1000;
    }
    else if(floor>10 && floor<=20)                           
    {
        totalBrick = 12*1000;
    }
    else                                                    
    {                              
        totalBrick = 10*1000;
    }
    return totalBrick;
}
var output3 = brickCalculator(45);                       
console.log(output3)



function tinyFriend(arr) {
    let shortLength = Infinity;
    let shortest = "";

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string' && arr[i].length < shortLength) {
                shortest = arr[i];
                shortLength = arr[i].length;
            }
        }
    }

    return shortest;
}

var output4 = tinyFriend(['samira', 'karina','ching', 'Rahul']);
console.log(output4);
