/*
 this function will multiply the Number with 3, then plus 10 with multiplies number , then divide total sum by 2 and finally minus 5 from total sum and return the final value as a number 
 */

function mindGame(number){
        if(typeof number === 'number'){
            const multiplyNumber = number*3;
            const plusNumber = multiplyNumber + 10;
            const divideNumber = plusNumber / 2;
            const minusNumber = divideNumber - 5;
            return minusNumber;
        }
        else{
            return 'please provide a number.';
        }
}

const totalSum = mindGame(10); 
console.log(totalSum);
// ! this is the end of first problem ! //

