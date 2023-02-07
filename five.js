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