export const initHowToGetStartedAnimation = () => {
	const sectionName = document.querySelector(
		".how-to-get-started__section-name"
	);
	const title = document.querySelector(".how-to-get-started__title");
	const video = document.querySelector(".how-to-get-started__video-container");

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (
						entry.target.classList.contains("how-to-get-started__section-name")
					) {
						sectionName.classList.add(
							"how-to-get-started__section-name--visible"
						);
					} else if (
						entry.target.classList.contains("how-to-get-started__title")
					) {
						title.classList.add("how-to-get-started__title--visible");
					} else if (
						entry.target.classList.contains(
							"how-to-get-started__video-container"
						)
					) {
						video.classList.add("how-to-get-started__video-container--visible");
					}
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.2 }
	);

	observer.observe(sectionName);
	observer.observe(title);
	observer.observe(video);
};
