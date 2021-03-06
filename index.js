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
export const isHappyTicket = (number) => {
  if (number.length % 2 !== 0) {
    return false;
  }
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
  const num = sumOfDigits(Number(number.slice(0, number.length / 2)));
  // вторая половина цифр билета
  const ber = sumOfDigits(Number(number.slice(number.length / 2)));

  return num === ber;
};
isHappyTicket('120012');

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

// переворот целого числа
export const reverseInt = (integer) => {
  // перевод целого числа в строку
  const integerstr = String(Math.abs(integer));
  let result = '';

  for (let i = 0; i < integerstr.length; i += 1) {
    result = `${integerstr[i]}${result}`;
  }

  if (integer < 0) {
    return -Number(result);
  }

  return Number(result);
};
reverseInt(-5600);

// проверяет является ли число счастливым
export const isHappyNumber = (a) => {
  // сумма квадратов цифр числа
  const sumOfsquareDigits = (num) => {
    const square = (n) => n * n;
    const numstr = String(num);
    let result = 0;

    for (let i = 0; i < numstr.length; i += 1) {
      result += square(Number(numstr[i]));
    }
    return result;
  };

  let counter = a;
  for (let i = 1; i <= 10; i += 1) {
    counter = sumOfsquareDigits(counter);
    if (counter === 1) {
      return true;
    }
  }

  return false;
};

// проверяет является ли число идеальным
export const isPerfect = (a) => {
  // сумма делителей числа
  const sumOfDivides = (b) => {
    let result = 1;
    for (let i = 2; i <= b / 2; i += 1) {
      if (b % i === 0) {
        result += i;
      }
    }
    return result;
  };

  return a === sumOfDivides(a) && a >= 6;
};
isPerfect(8128);

// функция Аккермана
export const ackerman = (m, n) => {
  if (m < 0 || n < 0) {
    return null;
  }
  if (m === 0) {
    return n + 1;
  }
  if (m > 0 && n === 0) {
    return ackerman(m - 1, 1);
  }

  return ackerman(m - 1, ackerman(m, n - 1));
};
ackerman(2, 3);

// меняет регистр букв
export const invertCase = (text) => {
  const bigText = text.toUpperCase();
  const smallText = text.toLowerCase();
  let result = '';

  for (let i = 0; i < text.length; i += 1) {
    if (text[i] !== bigText[i]) {
      result = `${result}${bigText[i]}`;
    } else {
      result = `${result}${smallText[i]}`;
    }
  }

  return result;
};
invertCase('I loVe JS');

// переворот строки
export const reverse = (word) => (word.length < 2 ? word : reverse(word.slice(1)) + word[0]);
reverse('hexlet');

// форматирует время
export const formattedTime = (min) => {
  // переводим часы и добавляем '0', если часов меньше 10
  const hour = Math.floor((min / 60) % 24);
  const hh = (hour >= 10 ? `${hour}` : `0${hour}`);
  // переводим минуты и добавляем '0', если минут меньше 10
  const mm = (min % 60 >= 10 ? `${min % 60}` : `0${min % 60}`);

  return `${hh}:${mm}`;
};
formattedTime(2782);

// разница углов
const diff = (int1, int2) => {
  // разница между большим и меньшим углом
  const difference = Math.max(int1, int2) - Math.min(int1, int2);

  if (difference <= 180) {
    return difference;
  }

  return 360 - difference;
};
diff(185, 0);

// счастливый билет решение учителя
const isHappyTicket1 = (num) => {
  let balance = 0;

  for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
    balance += +num[i] - +num[j];
  }
  return balance === 0;
};
isHappyTicket1('020011');
