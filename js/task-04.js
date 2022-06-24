const pricePerDroid = 3000;
let credits = 23580;
let request = prompt('Сколько ремонтных дроидов хотели бы Вы купить?');
let totalPrice = 0;

if (request === '0' || request === null) {
  console.log('Отменено пользователем!');
  totalPrice = 0;
} else if (request > 0) {
  totalPrice = request * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
    totalPrice = 0;
  } else {
    credits -= totalPrice;
  }
}

console.log(`Вы купили ${totalPrice} дроидов, на счету осталось ${credits} кредитов.`);
