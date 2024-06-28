const cars = {
  '1234': { make: 'Toyota', model: 'Camry', year: 2018 },
  '5678': { make: 'Honda', model: 'Civic', year: 2017 },
  '91011': { make: 'Ford', model: 'Mustang', year: 2016 },
  // Add more cars as needed
};

document.getElementById('searchButton').addEventListener('click', function() {
  const searchInput = document.getElementById('searchInput').value;
  const resultDiv = document.getElementById('result');

  // Extract only digits from the input
  const carNumber = searchInput.replace(/\D/g, '');

  if (carNumber in cars) {
    const carInfo = cars[carNumber];
    resultDiv.innerHTML = `Car Found: ${carInfo.make} ${carInfo.model}, Year: ${carInfo.year}`;
    resultDiv.classList.remove('error');
    resultDiv.classList.add('success');
  } else {
    resultDiv.innerHTML = 'Car not found';
    resultDiv.classList.remove('success');
    resultDiv.classList.add('error');
  }
});