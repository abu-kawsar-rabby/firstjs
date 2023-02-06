function evenOdd(name){
    let result = [];
    const nameLength = name.length;
    if(nameLength % 2 == 0){
        const isEven ='even';
        return isEven;
    }
    else{
        const isOdd ="odd";
        return isOdd ;
    }
}

const isEvenOdd  = evenOdd("chatgpta");
console.log(isEvenOdd);