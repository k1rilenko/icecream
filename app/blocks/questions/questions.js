app.questions = {
	questionList: document.querySelectorAll('.questions__title'),
	init() {
		if (this.questionList) {
			this.questionList.forEach(item => {
				item.addEventListener('click', evt => {
					evt.target.parentNode.classList.toggle('questions__item_open');
				});
			});
		}
	}
};
