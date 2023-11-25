function calculateNumbers(var1, var2) {
    // Path: skills.js
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var result = parseInt(firstNumber) + parseInt(secondNumber);
    document.getElementById('result').innerHTML = result;
}