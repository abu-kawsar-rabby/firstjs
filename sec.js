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

const isEvenOdd  = evenOdd('chatgpt');
console.log(isEvenOdd);