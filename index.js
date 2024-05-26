function convertTemperature() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputScale = document.getElementById('inputScale').value;
    
    let celsius, fahrenheit, kelvin;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

    if (inputScale === 'celsius') {
        celsius = inputValue;
        fahrenheit = (inputValue * 9/5) + 32;
        kelvin = inputValue + 273.15;
    } else if (inputScale === 'fahrenheit') {
        celsius = (inputValue - 32) * 5/9;
        fahrenheit = inputValue;
        kelvin = (inputValue - 32) * 5/9 + 273.15;
    } else if (inputScale === 'kelvin') {
        celsius = inputValue - 273.15;
        fahrenheit = (inputValue - 273.15) * 9/5 + 32;
        kelvin = inputValue;
    }

    document.getElementById('celsiusResult').textContent = `Celsius: ${celsius.toFixed(2)}`;
    document.getElementById('fahrenheitResult').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    document.getElementById('kelvinResult').textContent = `Kelvin: ${kelvin.toFixed(2)}`;
}
