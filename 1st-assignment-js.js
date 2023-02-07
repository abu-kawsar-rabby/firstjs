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

/* 
!------Problem No: 2-------!
 this function will take only 'string' as a input and it will be return output as even/odd defined by the length of input..
*/
function evenOdd(name){
    const result = [];
    if(typeof name === 'string'){
        if(name.length % 2 == 0){
            const isEven ='even';
            return isEven;
        }
        else{
            const isOdd ="odd";
            return isOdd ;
        }
    }
    else{
        return 'please input a string.';
    }
}

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

/*
!------Problem No: 5-------!
three friends gems as a input and there multiple by serially 21,32,43 
and sum the total diamond, if total diamond greater then 2000 then output will be the rest ammount from 2000. else it will return total daimond of three friend's sum.
*/ 

function gemsToDiamond(number1, number2, number3){
    if(typeof number1 === 'number' && typeof number2 === 'number' && typeof number3 === 'number'){
        const friend1Diamond = number1 * 21;
        const friend2Diamond = number2 * 32;
        const friend3Diamond = number3 * 43;
        const totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond;
        if(totalDiamond > 1000*2){
            const restDiamond = totalDiamond - 2000;
            return restDiamond;
        }
        else {
            return totalDiamond;
        }
    }
    else{
        return "please input 3 number.";
    }
}