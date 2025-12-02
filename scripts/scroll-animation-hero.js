export const initHeroScrollAnimation = () => {
	const heroClientsContainer = document.querySelector(
		".hero__clients-container"
	);
	const video = document.querySelector(".hero__video");

	if (window.innerWidth > 780) {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.classList.contains("hero__clients-container")) {
							heroClientsContainer.classList.add(
								"hero__clients-container--visible"
							);
						} else if (entry.target.classList.contains("hero__video")) {
							video.classList.add("hero__video--visible");
						}

						observer.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: "-245px 0px" }
		);

		observer.observe(heroClientsContainer);
		observer.observe(video);
	}
};
