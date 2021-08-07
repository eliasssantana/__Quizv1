import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText:  "Dentro de qual elemento nós colocamos o nosso javascript?",
			answerOptions: [
				{ answerText: "<script>", isCorrect: true },
				{ answerText: "<javascript>", isCorrect: false},
				{ answerText: "<js>", isCorrect: false },
				{ answerText: "<code>", isCorrect: false },
			],
		},
		{
			questionText: "Qual a forma correta de se referenciar um script externo?",
			answerOptions: [
				{ answerText: "<script href='filename.js'>", isCorrect: false },
				{ answerText: "<script name='filename.js'>", isCorrect: false },
				{ answerText: "<script scr='filename.js'>", isCorrect: true },
				{ answerText: "<script file='filename.js'>", isCorrect: false },
			],
		},
		{
			questionText: "Qual a sintaxe correta para mudar o conteúdo do elemento HTML abaixo?<code><p id='demo'>I am bluemer</p><code>",
			answerOptions: [
				{ answerText:"document.getElement('p').innerHTML = 'Hello World!'" , isCorrect: false },
				{ answerText: "document.getElementById('demo').innerHTML = 'Hello World!'", isCorrect: true },
				{ answerText: "#demo.innerHTML = 'Hello World!'", isCorrect: false },
				{ answerText:"document.getElementByName('p').innerHTML = 'Hello World!'", isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Você acertou {score} de {questions.length} perguntas
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Pergunta {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}