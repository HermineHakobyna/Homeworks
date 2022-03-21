//1.Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements 
//starting from a to b spaced by step

function range(start, end, step = 1) {
  
    function range(start, end, step = 1) {
  
        const allNumbers = [start, end, step];
      
        if (!allNumbers) {
          
        }
       if (step <= 0) {
          
        } else if (start > end) {
          step = -step;
        }
        
        const length = Math.floor(Math.abs((end - start) / step)) + 1;
        
        return Array.from(Array(length), (x, index) => start + index * step);
        
      }
      console.log(range(1, 5)); 



    //2. Given a string and a symbol. Find the number of occurrences of the symbol in the string.
function char_count(str, letter) 
{
 let letter_Count = 0;
 for (let position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('another string', 't'));

//3.Given a string. Check whether the string is palindrome or not.
function checkPalindrome(string) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {
      
      if (string[i] !== string[len - 1 - i]) {
          return 'No';
      }
  }
  return 'yes';
}
const string = prompt('Enter a string: ');

 const value = checkPalindrome(string);

console.log(value);


//4.Given an array of numbers. Find the maximum element in array
function arrayMax(arr) {
  let len = arr.length, max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
};

//5.Given an array. Create the array which elements are products between two neighbours.


//6.


//7. Print the following number pattern:
let n = 5; // height of pattern
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);

