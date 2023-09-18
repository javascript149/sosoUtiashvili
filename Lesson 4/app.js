// 1)

let num = 1
let count = 0

for (i = 1; i <= 10; i++) {
  console.log(i)
};


// 2)

count = 10

for (count = 10; count >= 1; count--) {
  console.log(count);
}


// 3)
let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
let withoutBob = [];

for (let i = 0; i < names.length; i = i + 1) {
  if (names[i] !== 'Bob') {
    withoutBob.push(names[i]);
  }
}

console.log(withoutBob);

// 4)
function numberPower(number, power) {
  if (power == 0) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i <= power; i = i + 1) {
    result = result * number
  };

  return result;
}


number = 5;
power = 3;
let result = numberPower(number, power);
console.log(result);

//   5)

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';

    if (i % 3 === 0) {
      output = output + 'Fizz';
    }

    if (i % 5 === 0) {
      output = output + 'Buzz';
    }

 
    if (output === '') {
      output = i;
    }

    console.log(output);
  }
}

fizzBuzz();

//   6)

 i = 5;
let k = 1;
let faqt = 1;
do{
   faqt *= k;
   k++;
}
while(k <= i);
console.log(faqt);

//  7)

function capitalizeFirstLetter(inputString) {
  if (inputString.length === 0) {
    return inputString;
  }

  const firstLetter = inputString.charAt(0).toUpperCase();
  const restOfTheString = inputString.slice(1);

  return firstLetter + restOfTheString;
}

const originalString = "javascript";
const capitalizedString = capitalizeFirstLetter(originalString);
console.log(capitalizedString);


