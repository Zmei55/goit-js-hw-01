let total = 0;

while (true) {
  let input = prompt('Введите число:');

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  input = Number(input);
  total += input;
}
