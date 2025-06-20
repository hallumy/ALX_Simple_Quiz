function checkAnswer() {
    // Declare the correct answer inside the function
    const correctAnswer = "4";

    // Get all radio buttons with name="quiz"
    const radioButtons = document.getElementsByName("quiz");
    let userAnswer = '';

    // Loop to find which radio is selected
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            userAnswer = radioButtons[i].value;
            break;
        }
    }

    // Compare user's answer with the correct answer
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    }   else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // Optional: red for incorrect
    }
}

// Attach the event listener once the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
});


