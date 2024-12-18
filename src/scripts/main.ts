export function showPopUp(this: any) {
	const popup = this.querySelector(".popup-language");
	if (!popup) return;

	const attrExpanded = popup.getAttribute("aria-expanded");
	if (!attrExpanded) return;

	popup.setAttribute("aria-expanded", (!(attrExpanded === "true")).toString());
	popup.classList.toggle("show");
}

const btnMobileLanguage = document.getElementById("btn-mobile-language");
btnMobileLanguage?.addEventListener("click", showPopUp);

const btnDesktopLanguage = document.getElementById("btn-desktop-language");
btnDesktopLanguage?.addEventListener("click", showPopUp);

//close popup on outside click
window.onclick = (e) => {
	if (!e.target) return;
	const element = e.target as HTMLElement;

	if (!element.classList.contains("globe")) {
		const popup = document.querySelectorAll(".popup-language");

		if (!popup) return;

		popup.forEach((ele) => {
			ele.setAttribute("aria-expanded", "false");
			ele.classList.remove("show");
		});
	}
};
