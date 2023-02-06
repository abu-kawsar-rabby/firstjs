function findingBadData(numbers){
    const badData = [];
    for(let i=0; i < numbers.length; i++){
        const index = i;
        const number = numbers[index];
        if (number < 0){
            badData.push(number);
        }
    }
    
    return badData.length;
}

const finalData = findingBadData([20, -32, 93, 62, 42, 2, 40, 67]);
console.log(finalData);
