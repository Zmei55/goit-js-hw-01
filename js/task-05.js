let land = prompt('Укажите страну назначения:').toLowerCase();
let price = 0;

switch (land) {
  case 'китай':
    price = 100;
    console.log(
      `Доставка в ${land[0].toUpperCase() + land.slice(1)} будет стоить ${price} кредитов`
    );
    break;

  case 'чили':
    price = 250;
    console.log(
      `Доставка в ${land[0].toUpperCase() + land.slice(1)} будет стоить ${price} кредитов`
    );
    break;

  case 'австралия':
    price = 170;
    console.log(
      `Доставка в ${land[0].toUpperCase() + land.slice(1)} будет стоить ${price} кредитов`
    );
    break;

  case 'индия':
    price = 80;
    console.log(
      `Доставка в ${land[0].toUpperCase() + land.slice(1)} будет стоить ${price} кредитов`
    );
    break;

  case 'ямайка':
    price = 120;
    console.log(
      `Доставка в ${land[0].toUpperCase() + land.slice(1)} будет стоить ${price} кредитов`
    );
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
