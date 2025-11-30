export const initWhatOurClientsAreSayingAnimation = () => {
	const sectionName = document.querySelector(
		".what-our-clients-are-saying__section-name"
	);
	const title = document.querySelector(".what-our-clients-are-saying__title");
	const section = document.querySelector(".what-our-clients-are-saying");

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (
						entry.target.classList.contains(
							"what-our-clients-are-saying__section-name"
						)
					) {
						sectionName.classList.add(
							"what-our-clients-are-saying__section-name--visible"
						);
					} else if (
						entry.target.classList.contains(
							"what-our-clients-are-saying__title"
						)
					) {
						title.classList.add("what-our-clients-are-saying__title--visible");
					} else if (
						entry.target.classList.contains("what-our-clients-are-saying")
					) {
						section.classList.add("what-our-clients-are-saying--visible");
						document.querySelector("body").style.overflowX = "hidden";
					}
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.2 }
	);

	observer.observe(sectionName);
	observer.observe(title);
	observer.observe(section);
};
