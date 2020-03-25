app.slider = {
	init() {
		app.common.initScript('swiper.min', 'mySwiper', () => {
			const sliderRules = new Swiper('.swiper-rules', this.options);
			this.runSlider('.rating__slider .swiper-container', this.optionsRating);
			this.runSlider('.swiper-gifts', this.options);
		});
		app.common.initStyle('swiper.min');
		this.destroyRulesSlider();
	},
	runSlider(selector, options) {
		const slider = new Swiper(selector, options);
	},
	options: {
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		slidesPerView: 1.15,
		centeredSlides: true,
		spaceBetween: 10
	},
	optionsRating: {
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		slidesPerView: 1.15,
		centeredSlides: true,
		spaceBetween: 10
	},
	destroyRulesSlider() {
		if (window.innerWidth > 1280) {
			sliderRules.destroy();
		}
	}
};
