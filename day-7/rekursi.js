// faktorial
// factorial 5 -->  n! = n x (n-1) x (n-2) x (n-3) x (n-4)
// factorial 5 -->  5! = 5 x (5-1) x (5-2) x (5-3) x (5-4)
// factorial 5 -->  5! = 5 x 4 x 3 x 2 x 1
// factorial 5 -->  5! = 120

function factorial(num) {
  let i = 0;
  let hasilKali = 1;

  while (i < num) {
    hasilKali = hasilKali * (num - i);
    // console.log(hasilKali)
    i++;
  }

  console.log(hasilKali);
  return hasilKali;
}

factorial(5);

// rekursi faktorial
function factorial(n) {
  //5
  // Base case: if n is 0 or 1, return 1

  //
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
  }
}

// Example usage
console.log(factorial(5)); // Output: 120
