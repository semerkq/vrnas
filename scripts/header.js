export const changeColorOfHeader = () => {
	const header = document.querySelector(".header");

	window.addEventListener("scroll", () => {
		if (pageYOffset > 60) {
			header.classList.add("header--active");
		} else {
			const header = document.querySelector(".header");
			header.classList.remove("header--active");
		}
	});
};
