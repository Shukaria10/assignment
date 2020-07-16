function feetToMile(feet)                                               //declaration of function
{
    var mile = feet/5280;                                    //Equation of feet to mile convertion
    return mile;         

}
var output1 = feetToMile(5280);                                         //function call & output
console.log(output1);                                                         //print the output


function woodCalculator(chair,table,bed)                               //declaration of function
{
    var total = (chair*1) +(table*3) + (bed*5);            //Equation of total cubic feet of wood need
    return total;
}

var output2 = woodCalculator(2,2,2);                        //function call,parameter passing and output
console.log(output2);                                                          //print the output


function brickCalculator(floor)                                         //declaration of function
{  
    if(floor<=10)                                                // if condition for 1-10th floor
    {
        totalBrick =15*1000;
    }
    else if(floor>10 && floor<=20)                           // else-if condition for 11-20th floor
    {
        totalBrick = 12*1000;
    }
    else                                                    //else condition for above 20th floor
    {                              
        totalBrick = 10*1000;
    }
    return totalBrick;
}
var output3 = brickCalculator(45);                           //output of total feet of brick need
console.log(output3)


function tinyFriend(name)                                            //declaration of function
{
 
 var min =name[0];                                             //indexing the intial first value
 for(var i=0;i<=name.length;i++)
 {  var element = name[i];
    if(element < min)
    {
        min = element;
    }

 }
 return min;

}
var output4 = tinyFriend([23,22,45,211]);                                //passing value & output
console.log(output4);