app.slider = {
	init(selector, options) {
		app.common.initScript('swiper.min', 'mySwiper', () => {
			this.runSlider('.swiper-rules', options || this.options);
			this.runSlider('.rating__slider .swiper-container', this.options);
			this.runSlider('.swiper-gifts', this.options);
		});
		app.common.initStyle('swiper.min');
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
	}
};
