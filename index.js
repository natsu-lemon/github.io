const btn = document.getElementById("btn");
const box = document.getElementById("box");
btn.addEventListener("click", () => {
	box.emit("btnPush");
});