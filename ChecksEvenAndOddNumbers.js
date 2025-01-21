/* function NumberOFEvenODD(array){
    let NumberOFEven=0;
    let numberOfOdd=0;
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            NumberOFEven++;
        }else{
            numberOfOdd++;
        }
    }
    return `The number of Even number are${NumberOFEven} and The number of OddNumber are ${numberOfOdd}`;
}
const array=[1,2,3,4,5,6,23,66,890,44,21,12 ,7,8,9,10];
console.log(NumberOFEvenODD(array)); */
function NumberOFEvenODD(array){
    let NumberOfeven=0;
    let Numberofodd=0;
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            NumberOfeven++;
        }else{
            Numberofodd++;
        }
    }
     return `NUMber Of Even number are ${NumberOfeven} and Number of Odd are ${Numberofodd}`;

}

const array=[1,2,3,4,5,6,23,66,890,44,21,12 ,7,8,9,10];
console.log(NumberOFEvenODD(array));