/* eslint-disable no-unused-vars */
app.scroll = {
	init() {
		const scrollBtn = document.getElementById('scroll-to-top');
		const firstSection = document.querySelector('.promo');
		const secondSection = document.querySelector('.rules');

		const scrollFunction = () => {
			if (document.documentElement.clientWidth > 991 && scrollBtn) {
				if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
					scrollBtn.style.opacity = '1';
				} else {
					scrollBtn.style.opacity = '0';
				}
			} else {
				// eslint-disable-next-line no-lonely-if
				if (scrollBtn && document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000 ) {
					scrollBtn.style.opacity = '1';
				} else {
					scrollBtn.style.opacity = '0';
				}
			}
		};
		const scrollToTop = e => {
			e.preventDefault();
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		};
		window.onscroll = () => {
			if (scrollBtn) {
				scrollFunction();
				scrollBtn.addEventListener('click', scrollToTop);
			}
		};

		if (document.documentElement.clientWidth >= 1280 && firstSection) {
			$(firstSection).on('mousewheel DOMMouseScroll', event => {
				event.preventDefault();
				const wheelDelta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
				if (wheelDelta < 0) {
					secondSection.scrollIntoView({behavior: 'smooth'});
				}
			});
		}
	}
};
