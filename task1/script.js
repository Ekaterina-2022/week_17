let userData = document.getElementById("main-user");
let submitBtn = document.querySelector(".btn");
let surName = document.getElementById("surname");
let firstName = document.querySelector("#first-name");
let secName = document.querySelector("#sec-name");
let arr = [];

submitBtn.addEventListener("click", function () {
	arr = userData.value
		.trim()
		.replace(/^ +| +$|( ) +/g, "$1")
		.split(" ");
	console.log(arr[0]);
	surName.innerHTML = `${arr[0][0].toUpperCase()}${arr[0]
		.slice(1)
		.toLowerCase()}`;
	firstName.innerHTML = `${arr[1][0].toUpperCase()}${arr[1]
		.slice(1)
		.toLowerCase()}`;
	secName.innerHTML = `${arr[2][0].toUpperCase()}${arr[2]
		.slice(1)
		.toLowerCase()}`;
});
