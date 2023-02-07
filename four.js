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

const finalData = findingBadData([66, 'jj']);
console.log(finalData);


