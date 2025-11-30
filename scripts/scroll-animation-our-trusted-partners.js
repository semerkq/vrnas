export const initOurTrustedPartnersAnimation = () => {
	const sectionName = document.querySelector(
		".our-trusted-partners__section-name"
	);
	const title = document.querySelector(".our-trusted-partners__title");
	const section = document.querySelector(".our-trusted-partners");

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (
						entry.target.classList.contains(
							"our-trusted-partners__section-name"
						)
					) {
						sectionName.classList.add(
							"our-trusted-partners__section-name--visible"
						);
					} else if (
						entry.target.classList.contains("our-trusted-partners__title")
					) {
						title.classList.add("our-trusted-partners__title--visible");
					} else if (entry.target.classList.contains("our-trusted-partners")) {
						section.classList.add("our-trusted-partners--visible");
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
