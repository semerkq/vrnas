export const initAdvantagesAnimation = () => {
	const advantagesContainer = document.querySelector(".advantages__container");

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("advantages__container--visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.5 }
	);

	observer.observe(advantagesContainer);
};
