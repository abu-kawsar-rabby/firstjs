/* 
!------Problem No: 4-------!
this function will take array as a input and output will be the number length of less then 0 , less then 0 number is the bad data
 */
function findingBadData(numbers){
    const badData = [];
    if(Array.isArray(numbers)){
        for(let i=0; i < numbers.length; i++){
            const index = i;
            const number = numbers[index];
            if (number < 0){
                badData.push(number);
            }
        }
        return badData.length;
    }
    else{
        return "please input array of numbers.";
    }    
}