export function showPopUp(this: any, e: MouseEvent) {
	e.preventDefault();
	const popup = this.querySelector(".popup-language");

	if (!popup) return;
	const attrExpanded = popup.getAttribute("aria-expanded");
	if (!attrExpanded) return;
	console.log(attrExpanded);
	popup.setAttribute("aria-expanded", (!(attrExpanded === "true")).toString());

	popup.classList.toggle("show");
}

const btnMobileLanguage = document.getElementById("btn-mobile-language");
btnMobileLanguage?.addEventListener("click", showPopUp);

const btnDesktopLanguage = document.getElementById("btn-desktop-language");
btnDesktopLanguage?.addEventListener("click", showPopUp);
