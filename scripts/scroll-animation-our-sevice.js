export const initOurServiceAnimation = () => {
	const sectionName = document.querySelector(".our-service__section-name");
	const title = document.querySelector(".our-service__title");
	const description = document.querySelector(".our-service__description");
	const columns = document.querySelectorAll(".our-service__column-wrapper");

	if (window.innerWidth > 780) {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.classList.contains("our-service__section-name")) {
							sectionName.classList.add("our-service__section-name--visible");
						} else if (entry.target.classList.contains("our-service__title")) {
							title.classList.add("our-service__title--visible");
						} else if (
							entry.target.classList.contains("our-service__description")
						) {
							description.classList.add("our-service__description--visible");
						} else if (
							entry.target.classList.contains("our-service__column-wrapper")
						) {
							columns.forEach((col) => {
								col.classList.add("our-service__column-wrapper--visible");
							});
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
		columns.forEach((col) => {
			observer.observe(col);
		});
	}
};
