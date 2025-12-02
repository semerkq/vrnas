export const showOpinionCard = () => {
	const opinionWrappers = document.querySelectorAll(
		".what-our-clients-are-saying__opinion-wrapper"
	);
	const imageWrapper = document.querySelectorAll(
		".what-our-clients-are-saying__client-image-wrapper"
	);
	const clientWrappers = document.querySelectorAll(
		".what-our-clients-are-saying__client-wrapper"
	);

	imageWrapper.forEach((wrapper, index) => {
		wrapper.addEventListener("click", () => {
			const isActive = wrapper.classList.contains(
				"what-our-clients-are-saying__client-image-wrapper--active"
			);

			const closeAll = () => {
				opinionWrappers.forEach((wrapper, i) => {
					wrapper.classList.remove(
						"what-our-clients-are-saying__opinion-wrapper--opened"
					);
					imageWrapper[i].classList.remove(
						"what-our-clients-are-saying__client-image-wrapper--active"
					);
				});

				clientWrappers.forEach((wrapper) => {
					wrapper.classList.remove(
						"what-our-clients-are-saying__client-wrapper--translate"
					);
					wrapper.classList.remove(
						"what-our-clients-are-saying__client-wrapper--translate-mobile"
					);
				});
			};

			if (!isActive) {
				closeAll();
				opinionWrappers[index].classList.add(
					"what-our-clients-are-saying__opinion-wrapper--opened"
				);
				wrapper.classList.add(
					"what-our-clients-are-saying__client-image-wrapper--active"
				);

				if (index === 2 && window.innerWidth > 780) {
					clientWrappers[index].classList.add(
						"what-our-clients-are-saying__client-wrapper--translate"
					);
				} else if (
					window.innerWidth <= 1280 &&
					window.innerWidth > 780 &&
					index === 5
				) {
					clientWrappers[index].classList.add(
						"what-our-clients-are-saying__client-wrapper--translate"
					);
				} else if (window.innerWidth <= 780) {
					if (index === 1 || index === 2 || index === 4 || index === 5) {
						clientWrappers[index].classList.add(
							"what-our-clients-are-saying__client-wrapper--translate-mobile"
						);
					}
				}
			} else {
				closeAll();
			}
		});
	});
};
