const sumSquareDifference = (n) => {
  // разность квадрата суммы и суммы квадратов последовательности натуральных чисел от 1 до n
  const square = (m) => m * m;
  // сумма натуральных чисел от 1 до а
  const sumSequence = (a) => (a === 1 ? 1 : a + sumSequence(a - 1));
  // сумма квадратов натуральных чисел
  const sumSquare = (b) => (b === 1 ? 1 : b * b + sumSquare(b - 1));
  // квадрат суммы натуральных чисел от 1 до с
  const squareOfSum = (c) => square(sumSequence(c));

  if (n < 1) {
    return NaN;
  }

  return squareOfSum(n) - sumSquare(n);
};
sumSquareDifference(22);

const isPowerOfThree = (n) => {
  // определяет, является ли число n натуральной степенью тройки
  let i = 0;

  while (i <= n) {
    if (3 ** i === n) {
      return true;
    }
    i += 1;
  }

  return false;
};
isPowerOfThree(243);
