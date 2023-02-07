/* 
!------Problem No: 3-------!
this function will take a number as a input, minus 7 from the input number and the rest value is less then 7 it will input only the rest value of 7 and the input number is greater then or equal to 7 then output will be the double of input number 
 */
function isLGSeven(number){
    const minusNumber = number - 7;
    if(typeof number === 'number'){
        if(minusNumber < 7){
            return minusNumber;
        }
        else if(minusNumber >= 7){
            const doubleNumber = number * 2;
            return doubleNumber;
        }
    }
    else{
        return 'please provide a number';
    }
}