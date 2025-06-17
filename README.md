# Quiz Answer Checker - JavaScript Function

## 📋 Description
This project implements a simple JavaScript function named `checkAnswer` for a quiz web application. The function evaluates a user's answer selection from a group of radio buttons and provides immediate feedback based on the correctness of the selected answer.

## 🚀 Features
- Captures the user’s selected answer using `document.querySelector`.
- Compares the selected answer with a predefined correct answer.
- Displays feedback dynamically using DOM manipulation.
- Uses an event listener to trigger answer checking upon clicking the "Submit Answer" button.

## 🛠️ Function Breakdown

### 1. `checkAnswer()` Function
- **Purpose:** Checks if the selected answer is correct.
- **Steps:**
  - Declares `correctAnswer` and sets it to `"4"`.
  - Retrieves the selected radio input with `name="quiz"` using `querySelector`.
  - Compares it to the correct answer.
  - Updates the `#feedback` element's `textContent` with either a success or error message.

### 2. Event Listener
- The button with ID `submit-answer` listens for a click event.
- When clicked, it calls the `checkAnswer` function.

## 🧪 Example Usage (HTML)
```html
<form>
  <input type="radio" name="quiz" value="1"> Option 1<br>
  <input type="radio" name="quiz" value="2"> Option 2<br>
  <input type="radio" name="quiz" value="3"> Option 3<br>
  <input type="radio" name="quiz" value="4"> Option 4<br>
  <button type="button" id="submit-answer">Submit Answer</button>
</form>
<p id="feedback"></p>

