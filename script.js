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

document.getElementById('searchInput').addEventListener('input', function() {
  const searchInput = document.getElementById('searchInput').value;
  const resultDiv = document.getElementById('result');

  // Extract only digits from the input
  const carNumber = searchInput.replace(/\D/g, '');

  if (carNumber in cars) {
    const carInfo = cars[carNumber];
    resultDiv.innerHTML = `Car Found: ${carInfo.make} ${carInfo.model}, Number: ${carInfo.number}`;
    resultDiv.classList.remove('error');
    resultDiv.classList.add('success');
  } else {
    resultDiv.innerHTML = 'Car not found';
    resultDiv.classList.remove('success');
    resultDiv.classList.add('error');
  }
});