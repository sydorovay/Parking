const cars = {
  '40': { make: 'Berker Christiane', model: 'X', number: 'TS-AQ_40' },
  '5441': { make: 'Hochter Shtefan', model: 'X', number: 'M-UC_5441' },
  '880': { make: 'Lukas Gahabka', model: 'X', number: 'RO-LL_880' },
  '613': { make: 'Moser Ingrid I Chor', model: 'X', number: 'PS_MM_613' },
  '543': { make: 'Michaela fotografin', model: 'X', number: 'TS-W-543' },
  '1007': { make: 'Dr.Cristiane Pfaller', model: 'X', number: 'RO_QQ_1007' },
  '802': { make: 'Daniel Spaw Dirigent', model: 'X', number: 'HO-U_802' },
  '255': { make: 'Zobelt Ushi I Chor', model: 'X', number: 'RO_ZU_255' },
};
const searchInput = document.getElementById('searchInput');
const dataList = document.getElementById('carNumbers');
const resultDiv = document.getElementById('result');

// Функція для оновлення випадаючого списку з варіантами
function updateCarNumbersList(input) {
    // Очищаємо попередні варіанти у списку
    while (dataList.firstChild) {
        dataList.removeChild(dataList.firstChild);
    }

    // Отримуємо введений текст
    const inputValue = input.value.toLowerCase().trim();

    // Додаємо варіанти до списку, які починаються з введеного тексту
    Object.keys(cars).forEach(key => {
        if (key.startsWith(inputValue)) {
            const option = document.createElement('option');
            option.value = cars[key].number;
            dataList.appendChild(option);
        }
    });

    // Пошук автомобіля під час введення
    const carNumber = inputValue.replace(/\D/g, ''); // Видаляємо всі нецифрові символи

    if (carNumber in cars) {
        const carInfo = cars[carNumber];
        resultDiv.innerHTML = `Car Found: ${carInfo.make} ${carInfo.model}, Number: ${carInfo.number}`;
        resultDiv.classList.remove('error');
        resultDiv.classList.add('success');
        document.body.classList.add('found');
    } else {
        resultDiv.innerHTML = 'Car not found';
        resultDiv.classList.remove('success');
        resultDiv.classList.add('error');
        document.body.classList.remove('found');
    }
}

// Отримуємо введення користувача
searchInput.addEventListener('input', function() {
    updateCarNumbersList(this);
});