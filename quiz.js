function checkAnswer() {
    // Declare the correct answer inside the function
    const correctAnswer = "4";

    // Get all radio buttons with name="quiz"
    const radioButtons = document.querySelector('input[name=quiz]');
    let userAnswer = '';

    // Loop to find which radio is selected
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            userAnswer = radioButtons[i].value;
            break;
        }
    }

    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Attach the event listener once the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
});


