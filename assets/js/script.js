console.log('loaded');
var num1, num2;

        function generateQuestion() {
            num1 = Math.floor(Math.random() *12) + 1;
            num2 = Math.floor(Math.random() * 12) + 1;
            document.getElementById('question').value = `${num1} x ${num2}`;
        }

        function checkAnswer() {
            const userAnswer = parseInt(document.getElementById('answer').value);
            const correctAnswer = num1 * num2;
            const resultDiv = document.getElementById('result');

            if (userAnswer === correctAnswer) {
                resultDiv.innerHTML = '<div class="alert alert-success">Correct!</div>';
            } else {
                resultDiv.innerHTML = `<div class="alert alert-danger">Incorrect. The correct answer is ${correctAnswer}.</div>`;
            }

            generateQuestion();
            document.getElementById('answer').value = '';
        }

        // Initialize the first question
        generateQuestion();
