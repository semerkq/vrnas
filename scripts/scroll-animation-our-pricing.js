export const initOurPricingAnimation = () => {
	const sectionName = document.querySelector(".our-pricing__section-name");
	const title = document.querySelector(".our-pricing__title");
	const description = document.querySelector(".our-pricing__description");
	const pricing = document.querySelector(".our-pricing__pricing");

	if (window.innerWidth > 780) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.classList.contains("our-pricing__section-name")) {
							sectionName.classList.add("our-pricing__section-name--visible");
						} else if (entry.target.classList.contains("our-pricing__title")) {
							title.classList.add("our-pricing__title--visible");
						} else if (
							entry.target.classList.contains("our-pricing__description")
						) {
							description.classList.add("our-pricing__description--visible");
						} else if (
							entry.target.classList.contains("our-pricing__pricing")
						) {
							pricing.classList.add("our-pricing__pricing--visible");
						}
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		observer.observe(sectionName);
		observer.observe(title);
		observer.observe(description);
		observer.observe(pricing);
	}
};
