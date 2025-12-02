export const initWhyChooseUsAnimation = () => {
	const sectionName = document.querySelector(".why-choose-us__section-name");
	const title = document.querySelector(".why-choose-us__title");
	const reasons = document.querySelector(".why-choose-us__reasons-wrapper");
	const image = document.querySelector(".why-choose-us-image-wrapper");

	if (window.innerWidth > 780) {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (
							entry.target.classList.contains("why-choose-us__section-name")
						) {
							sectionName.classList.add("why-choose-us__section-name--visible");
						} else if (
							entry.target.classList.contains("why-choose-us__title")
						) {
							title.classList.add("why-choose-us__title--visible");
						} else if (
							entry.target.classList.contains("why-choose-us__reasons-wrapper")
						) {
							reasons.classList.add("why-choose-us__reasons-wrapper--visible");
						} else if (
							entry.target.classList.contains("why-choose-us-image-wrapper")
						) {
							image.classList.add("why-choose-us-image-wrapper--visible");
						}
					}
				});
			},
			{ threshold: 0.2 }
		);

		observer.observe(sectionName);
		observer.observe(title);
		observer.observe(reasons);
		observer.observe(image);
	}
};
