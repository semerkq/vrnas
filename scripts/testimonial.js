export const calculateLocation = () => {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;
	const firstClient = document.querySelector(
		".what-our-clients-are-saying__client-image-wrapper:nth-of-type(2)"
	);
	firstClient.style.top = `${windowHeight * 0.1}px`;
	firstClient.style.left = `${windowWidth * 0.1}px`;
	console.log(firstClient);
	// console.log(windowWidth);
	// console.log(windowHeight);
};
