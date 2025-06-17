function checkAnswer() {
    let correctAnswer = "4";
}

const radioButtons = document.querySelectorAll('input[name="quiz"]');

const radios = document.getElementsByName('quiz');
let userAnswer = '';

for (let index = 0; index < radios.length; index++) {
    if (radios[index].checked) {
        userAnswer = radios[index].value;
        break;
    }
}
