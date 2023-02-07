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

const finalOutput = isLGSeven(-888);
console.log(finalOutput);



