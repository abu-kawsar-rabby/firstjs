function isLGSeven(number){
    let minusNumber = number - 7;
    if(minusNumber < 7){
        return minusNumber;
    }
    else if (minusNumber >= 7){
        const doubleNumber = number * 2;
        return doubleNumber;
    }

}
const finalOutput = isLGSeven(-15);
console.log(finalOutput);