/*
!------Problem No: 1-------!
 this function will multiply the input Number with 3, then plus 10 with multiplies number , then divide total sum by 2 and finally minus 5 from total sum and return the final value as a number.
 */

function mindGame(number){
        if(typeof number === 'number'){
            const multiplyNumber = number*3;
            const addNumber = multiplyNumber + 10;
            const divideNumber = addNumber / 2;
            const finalNumber = divideNumber - 5;
            return finalNumber;
        }
        else{
            return 'please provide a number.';
        }
}