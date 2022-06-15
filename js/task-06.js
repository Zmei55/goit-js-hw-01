let total = 0;

while (true) {
  let input = prompt('Введите число:');

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  } else {
    input = Number(input);
    total += input;
  }
}
