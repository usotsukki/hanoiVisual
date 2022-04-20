const towers = document.querySelectorAll(".tower");
const btns = document.querySelectorAll(".btn-h");
const input = document.querySelector("#height");
const height = input;

btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		setTimeout(() => {
			document.activeElement.blur();
		}, 300);
		const btnId = btn.getAttribute("id");
		switch (btnId) {
			case "start":
				start();
			case "next":
				next();
			case "reset":
				reset();
		}
	});
});

function start() {
	if (!height) console.log("no height");
	else console.log(height);
}
function next() {}
function reset() {}
