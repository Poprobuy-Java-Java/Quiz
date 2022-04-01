// Выводим на экран вопрос
window.onload = function(){
	let result = {}; 
	// result постоянно будем обновлять и выводить
	let step = 0;
	// step - будет следить на каком вопросе мы находимся, благодаря этой переменной можно потом будет сделать переключение между вопросами.

	function showQuestion (questionNumber){
		document.querySelector(".question").innerHTML = quiz[step]['q'];
		// и выводим варианты ответа
		let answer = "";
		for (let key in quiz[step]['a']){
			answer += `<li data-v="${key}" class="answer-variant">${quiz[step]['a'][key]}</li>`
		}
		document.querySelector(".answer").innerHTML = answer;
	}

	document.onclick = function(event){
		event.stopPropagation();
		if (event.target.classList.contains('answer-variant') && step < quiz.length){
			//console.log(event.target);
			if (result[event.target.dataset.v] != undefined){
				result[event.target.dataset.v]++;
			}
			else{
				result[event.target.dataset.v] = 0;
			}
			step++;
			if (step == quiz.length){
				document.querySelector('.question').remove();
				document.querySelector('.answer').remove();
				showResult();
			}
			else{
				showQuestion(step);
			}
		}
		console.log(result);
	}

	function showResult(){
		let key = Object.keys(result).reduce(function(a,b){
			return result[a] > result[b] ? a : b;
		});
		console.log(key);

		let img = document.createElement('img');
		img.classList.add('img-result');
		img.src = answers[key]['image'];
		document.querySelector('main').appendChild(img);

		let div = document.createElement('div');
		div.classList.add('result');
		div.innerHTML = answers[key]['description']
		document.querySelector('main').appendChild(div);


	}

	showQuestion(step);
}

