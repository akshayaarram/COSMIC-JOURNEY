
const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: 1,
    explanation: "Mars looks reddish because iron minerals in its surface have oxidized, or rusted."
  },
  {
    question: "Which is the largest planet in our Solar System?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    answer: 2,
    explanation: "Jupiter is the largest planet in our Solar System."
  },
  {
    question: "What is the name of our galaxy?",
    options: ["Andromeda", "Whirlpool", "Sombrero", "Milky Way"],
    answer: 3,
    explanation: "Our Solar System is located in the Milky Way galaxy."
  },
  {
    question: "Which star is closest to Earth?",
    options: ["Sirius", "The Sun", "Polaris", "Proxima Centauri"],
    answer: 1,
    explanation: "The Sun is our closest star. Proxima Centauri is the closest star beyond the Sun."
  },
  {
    question: "What does a black hole have?",
    options: [
      "A surface made of ice",
      "No gravity",
      "Gravity so strong that light cannot escape from inside its event horizon",
      "Only gas and no mass"
    ],
    answer: 2,
    explanation: "Inside a black hole's event horizon, nothing can escape outward, not even light."
  }
];

const quizForm = document.getElementById("quiz-form");
const questionsContainer = document.getElementById("questions-container");
const submitButton = document.getElementById("submit-quiz");
const resultSection = document.getElementById("quiz-result");
const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("result-score");
const resultMessage = document.getElementById("result-message");
const retryButton = document.getElementById("retry-quiz");

function renderQuestions() {
  questionsContainer.replaceChildren();

  questions.forEach((question, questionIndex) => {
    const card = document.createElement("fieldset");
    card.className = "question-card";

    const legend = document.createElement("legend");
    legend.textContent = `${questionIndex + 1}. ${question.question}`;
    card.appendChild(legend);

    const optionsList = document.createElement("div");
    optionsList.className = "answer-options";

    question.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "answer-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${questionIndex}`;
      input.value = optionIndex;
      input.required = true;

      const optionText = document.createElement("span");
      optionText.textContent = option;

      label.append(input, optionText);
      optionsList.appendChild(label);
    });

    const feedback = document.createElement("p");
    feedback.className = "question-feedback";
    feedback.id = `feedback-${questionIndex}`;
    feedback.hidden = true;
    feedback.setAttribute("aria-live", "polite");

    card.append(optionsList, feedback);
    questionsContainer.appendChild(card);
  });
}

function submitQuiz(event) {
  event.preventDefault();

  if (!quizForm.reportValidity()) {
    return;
  }

  let score = 0;

  questions.forEach((question, questionIndex) => {
    const selected = quizForm.querySelector(
      `input[name="question-${questionIndex}"]:checked`
    );

    const selectedAnswer = Number(selected.value);
    const isCorrect = selectedAnswer === question.answer;
    const feedback = document.getElementById(`feedback-${questionIndex}`);

    if (isCorrect) {
      score++;
    }

    feedback.hidden = false;
    feedback.textContent =
      `${isCorrect ? "Correct!" : "Not quite."} ` +
      `Correct answer: ${question.options[question.answer]}. ` +
      question.explanation;

    feedback.classList.toggle("correct-feedback", isCorrect);
    feedback.classList.toggle("incorrect-feedback", !isCorrect);

    const options = quizForm.querySelectorAll(
      `input[name="question-${questionIndex}"]`
    );

    options.forEach((input) => {
      input.disabled = true;
    });
  });

  resultTitle.textContent =
    score === questions.length ? "Outstanding, Space Explorer!" :
    score >= 3 ? "Great Work, Space Explorer!" :
    "Mission Complete!";

  resultScore.textContent = `Your score: ${score} out of ${questions.length}`;

  resultMessage.textContent =
    score === questions.length ? "Perfect score! You know your cosmic facts." :
    score >= 3 ? "Nice work! Explore more topics and keep learning." :
    "Keep exploring! Review the explanations and give it another try.";

  resultSection.hidden = false;
  submitButton.disabled = true;
  resultSection.scrollIntoView({ behavior: "smooth", block: "center" });
}

function retryQuiz() {
  quizForm.reset();
  resultSection.hidden = true;
  submitButton.disabled = false;
  renderQuestions();

  document.getElementById("quiz-title").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

quizForm.addEventListener("submit", submitQuiz);
retryButton.addEventListener("click", retryQuiz);

renderQuestions();
