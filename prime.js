function checkprime(num){
    let factors = 0;
    for(let i=0;i<=num;i++){
        if(num%i==0){
            factors++;
        }
    }
    if(factors==2){
        return true;
    }else{
        return false;
    }
}