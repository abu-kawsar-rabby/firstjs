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

const finalData = findingBadData([-4,-9,-5,-33,-55]);
console.log(finalData);
