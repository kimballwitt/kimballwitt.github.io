//simple calculator code

function calculator() {
    //Input - User inputs two numbers, chooses an operator and enters their answer
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let operator = document.getElementById('operator').value;
    let answer = parseFloat(document.getElementById('answer').value);
    //Processing - Use a switch statement to verify and calculate answer
    let correctAnswer;
    switch (operator) {
        case '+':
            correctAnswer = number1 + number2;
        break;
        case '-':
            correctAnswer = number1 - number2;
        break;
        case '*':
            correctAnswer = number1 * number2;
        break;
        case '/':
            correctAnswer = number1 / number2;
        break;
    }
    //Output - Compare users answer to computer answer. If results are same display "Correct", otherwise "Incorrect".
        if (answer == correctAnswer) {
            message = 'Correct!!!! 🥳🏆'
        }
        else {
            message = 'Incorrect 🤬😂'
        }
        document.getElementById('output').innerHTML = message;
    }