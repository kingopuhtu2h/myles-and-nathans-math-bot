function calculateExpression() {
    const equationInput = document.getElementById('equation').value;
    const resultElement = document.getElementById('result');

    try {
        const result = eval(equationInput);
        resultElement.textContent = `Result: ${result}`;
    } catch (error) {
        resultElement.textContent = 'Invalid expression. Please provide a valid mathematical expression.';
    }
}
