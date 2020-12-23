// найти Fizz и Buzz
const fizzBuzz = (begin, end) => {
  const divide = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz';
    }
    if (num % 3 === 0) {
      return 'Fizz';
    }
    if (num % 5 === 0) {
      return 'Buzz';
    }

    return num;
  };

  let i = begin;
  while (i <= end) {
    i += 1;
    console.log(divide(i - 1));
  }
};
fizzBuzz(11, 20);
