const temperatureInput = document.querySelector('#temperature');
const unitSelect = document.querySelector('#unit');
const convertButton = document.querySelector('#convert');
const convertedTemperatureDisplay = document.querySelector('#converted-temperature');

convertButton.addEventListener('click', () => {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        alert('Please enter a valid number');
        return;
    }

    let convertedTemperature;
    if (unit === 'celsius') {
        convertedTemperature = (temperature * 9 / 5) + 32;
    } else {
        convertedTemperature = (temperature - 32) * 5 / 9;
    }


convertedTemperatureDisplay.textContent = convertedTemperature.toFixed(2) + ' ' + 
(unit === 'celsius' ? 'Fahrenheit' : 'Celsius');

});
