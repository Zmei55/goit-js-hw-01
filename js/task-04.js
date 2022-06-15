const pricePerDroid = 3000;
let credits = 23580;
let totalPrice = prompt('Сколько ремонтных дроидов хотели бы Вы купить?');

// order *= pricePerDroid;

if (totalPrice === '0' || totalPrice === null) {
  console.log('Отменено пользователем!');
  totalPrice = 0;
} else if (totalPrice > 0) {
  totalPrice *= pricePerDroid;
}

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
  totalPrice = 0;
} else {
  credits -= totalPrice;
}

console.log(`Вы купили ${totalPrice} дроидов, на счету осталось ${credits} кредитов.`);
