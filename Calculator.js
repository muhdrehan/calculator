var inquirer = require('inquirer');
// Prompt user for input
inquirer.prompt([
    {
        type: 'input',
        name: 'num1',
        message: 'Enter the first number:',
        validate: function (value) { return !isNaN(parseFloat(value)) || 'Please enter a valid number'; },
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter the second number:',
        validate: function (value) { return !isNaN(parseFloat(value)) || 'Please enter a valid number'; },
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Select an operation:',
        choices: ['+', '-', '*', '/'],
    },
]).then(function (answers) {
    var num1 = parseFloat(answers.num1);
    var num2 = parseFloat(answers.num2);
    var operator = answers.operator;
    var result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
            break;
        default:
            result = 'Invalid operator';
            break;
    }
    console.log("Result: ".concat(result));
}).catch(function (error) {
    console.log('Error:', error);
});
