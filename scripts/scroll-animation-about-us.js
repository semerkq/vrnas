export const initAboutUsAnimation = () => {
	const mainImage = document.querySelector(".about-us__main-image-wrapper");
	const sectionName = document.querySelector(".about-us__section-name");
	const title = document.querySelector(".about-us__title");
	const description = document.querySelector(".about-us__description");
	const list = document.querySelector(".about-us__list");
	const button = document.querySelector(".button--about-us");

	if (window.innerWidth > 780) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (
							entry.target.classList.contains("about-us__main-image-wrapper")
						) {
							mainImage.classList.add("about-us__main-image-wrapper--visible");
						} else if (
							entry.target.classList.contains("about-us__section-name")
						) {
							sectionName.classList.add("about-us__section-name--visible");
						} else if (entry.target.classList.contains("about-us__title")) {
							title.classList.add("about-us__title--visible");
						} else if (
							entry.target.classList.contains("about-us__description")
						) {
							description.classList.add("about-us__description--visible");
						} else if (entry.target.classList.contains("about-us__list")) {
							list.classList.add("about-us__list--visible");
						} else if (entry.target.classList.contains("button--about-us")) {
							button.classList.add("button--visible");
						}
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		observer.observe(mainImage);
		observer.observe(sectionName);
		observer.observe(title);
		observer.observe(description);
		observer.observe(list);
		observer.observe(button);
	}
};
