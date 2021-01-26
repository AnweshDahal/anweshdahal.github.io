// Script File
var goUpButton = document.getElementById("goUp");
window.onscroll = function () {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		goUpButton.style.opacity = 1;
		goUpButton.style.cursor = "pointer";
	} else {
		goUpButton.style.opacity = 0;
		goUpButton.style.cursor = "default";
	}
};
