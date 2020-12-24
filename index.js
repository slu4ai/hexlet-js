// разность квадрата суммы и суммы квадратов последовательности натуральных чисел от 1 до n
export const sumSquareDifference = (n) => {
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

// определяет, является ли число n натуральной степенью тройки
export const isPowerOfThree = (n) => {
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

// счастливый билет
export const isHappyTicket = (num) => {
  // сумма цифр числа
  const sumOfDigits = (n) => {
    const nstr = String(n);
    let result = 0;
    for (let i = 0; i < nstr.length; i += 1) {
      result += Number(nstr[i]);
    }
    return result;
  };
  // первая половина цифр билета
  const ticket1 = Number(num.slice(0, num.length / 2));
  // вторая половина цифр билета
  const ticket2 = Number(num.slice(num.length / 2));

  if (num.length % 2 !== 0) {
    return false;
  }
  if (sumOfDigits(ticket1) === sumOfDigits(ticket2)) {
    return true;
  }

  return false;
};
isHappyTicket('224332');

// проверяет сбалансированы ли скобки
export const areBracketsBalanced = (brackets) => {
  if (brackets === '') {
    return true;
  }

  let count = 0;
  for (let i = 0; i < brackets.length; i += 1) {
    if (brackets[i] === '(') {
      count += 1;
    } else {
      count -= 1;
    }
    // если счетчик во время цикла был отрицательным возвращаем false
    if (count < 0) {
      return false;
    }
  }
  // счетчик должен быть равен нулю
  if (count === 0) {
    return true;
  }

  return false;
};
areBracketsBalanced('()(())');

// сколько есть способов без двух нулей идущих подряд
export const withoutTwoZeros = (zero, one) => {
  const factorial = (n) => {
    if (n === 0) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i += 1) {
      result *= i;
    }
    return result;
  };

  if (zero > one + 1) {
    return 0;
  }
  // равно сочетанию one + 1 элементов по zero
  return factorial(one + 1) / (factorial(zero) * factorial(one + 1 - zero));
};
withoutTwoZeros(2, 5);
