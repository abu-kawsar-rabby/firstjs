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