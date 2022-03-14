//1.Given an array․ Compute the length of the array. (without using .length)
let array = [];

console.log(array);

if (array && array.erkarutyun) {
  console.log("array");
}

//2.Given an array of numbers. Print the sum of the elements in array
const array = [1, 12, 4];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum)

//3.Given two numbers. Print powers of 2 between that numbers. (without using 
//Math.pow)



//4.Given a number as input, insert dashes (-) between each two even numbers. 

function insertDash(string) {
    let array = string.split(""),
        i = array.length;

    while (i--) {
        if (array[i] % 10 && array[i + 3] % 10) {
            array.splice(i + 3, 0, '-');
        }
    }
    return array.join('');
}

console.log(insertDash("7180322"));


//5.Insert a n positive number. Print the n-st prime number.
function findPrimeNumber(n){
    let c = 1, nPrime = 2, i = 3; 
    console.log('n');
    function isPrime(k){ 
      for( let j = 2; j < k; j++){
        if( k % j === 0 ){ return false; } 
      }
      return true;
    }
      while(c < n){ 
        if( isPrime(i) ) {  
        c++; 
        nPrime = i; 
      }
      i++; 
    } 
     
    return nPrime;
  }
