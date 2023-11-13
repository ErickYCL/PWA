const inputValue = document.getElementById('inputValue');
const unitFrom = document.getElementById('unitFrom');
const unitTo = document.getElementById('unitTo');
const convertButton = document.getElementById('convertButton');
const result = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const value = parseFloat(inputValue.value);
    const fromUnit = unitFrom.value;
    const toUnit = unitTo.value;

    if (isNaN(value)) {
        result.textContent = 'Ingrese un valor válido.';
        return;
    }

    const units = {
        cm: 1,        // 1 centímetro = 1 centímetro
        in: 2.5400, // 1 pulgada ≈ 0.393701 centímetros
        m: 100,      // 1 metro = 100 centímetros
        mm: .10,       // 1 milímetro = 10 centímetros
        km: 100000  // 1 kilómetro = 100,000 centímetros
    };
    
    const convertedValue = value * units[fromUnit] / units[toUnit];
    result.textContent = `${value} ${fromUnit} son ${convertedValue.toFixed(2)} ${toUnit}.`;
});
