function gemsToDiamond(number1, number2, number3){
    const friend1Diamond = number1 * 21;
    const friend2Diamond = number2 * 32;
    const friend3Diamond = number3 * 43;
    const totalDiamond = friend1Diamond+friend2Diamond+friend3Diamond;
    if(totalDiamond > 1000*2){
        const restDiamond = totalDiamond - 2000;
        return restDiamond;
    }
    else {
        return totalDiamond;
    }
}

const finalDiamond = gemsToDiamond(100,5,1);
console.log(finalDiamond);