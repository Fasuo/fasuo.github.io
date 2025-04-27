const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = Math.sqrt((num1 * num2) / 6);
    resultElement.textContent = `Result: ${result.toFixed(2)}`;
});