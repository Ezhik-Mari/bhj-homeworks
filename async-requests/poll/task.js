'use strict'
let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');
fetch('https://students.netoservices.ru/nestjs-backend/poll')
	.then(response => response.json())
	.then(data => {
		pollTitle.textContent = data.data.title;
		data.data.answers.forEach(answer => {
			let button = document.createElement('button');
			button.className = 'poll__answer';
			button.textContent = answer;
			button.addEventListener('click', () => {
				alert('Спасибо, ваш голос засчитан!')
			});
			pollAnswers.appendChild(button);
		});
	});