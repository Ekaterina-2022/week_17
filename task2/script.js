const sendBtn = document.querySelector(".btn");
const messageArea = document.querySelector(".messages");
const newComment = document.querySelector(".user-text");
let arr = ["Hi", "how are you?"];

const checkSpam = () => {
	let a = newComment.value;
	let b = "";
	if (a.includes("viagra")) {
		b = a.replace(/viagra/gi, "***");
		arr.push(b);
	} else if (a.includes("XXX")) {
		b = a.replace("XXX", "***");
		arr.push(b);
	} else {
		arr.push(a);
	}

	newComment.value = "";

	messageArea.innerHTML = arr.join("<br/><hr>");
};
sendBtn.addEventListener("click", checkSpam);
