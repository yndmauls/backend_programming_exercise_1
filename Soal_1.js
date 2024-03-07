function BilanganPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

for(let i = 2; i <= 1000; i++) {
    if(BilanganPrime(i)) {
        console.log(i);
    }
}
