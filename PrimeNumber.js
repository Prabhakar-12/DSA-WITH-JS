/* function isPrime(number) {
    if (number < 2) {
        return "The number is not a prime number.";
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return "The number is not a prime number.";
        }
    }
    return "The number is a prime number.";
}

const number = 32;
console.log(isPrime(number));
 */
function isprime(number){
    if(number<2){
        return "The number is not a prime number";
    }
    for (let i=2;i<=Math.sqrt(number);i++){
        if(number%i==0){
            return "The number is not a prime number";
        }
    }
    return "The number is a prime number";
}
const number=7

console.log(isprime(number));
function Myprime(n){
    if(n<2){
        return "The number is not a [prime number";
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return "The number is not a prime number";
        }
    }
    return "The number is a prime number"
}
const n=37
console.log(Myprime(n));
function prabha(num){
    if(num<2){
        return "The number is not a prime number";
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return "The number is not a prime number";
        }
    }
    return "the Number is a prime number";
}
const num=43;
console.log(prabha(num));