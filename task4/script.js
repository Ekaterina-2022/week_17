const submit = document.querySelector("#btn");
const newArray = document.querySelector(".new-array");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const avNum = document.querySelector(".avarage-num");
const sum = document.querySelector(".sum-num");
const mult = document.querySelector(".mult-num");
let arr = [];

const numbers = () => {
	for (let i = 0; i <= 10; i++) {
		let a = -10 - 0.5 + Math.random() * 21;
		arr.push(Math.round(a * 10));
	}
};

const sumArray = () => {
	let counter = 0;
	for (let i = 0; i < arr.length; i++) {
		counter += arr[i];
	}
	return counter / arr.length;
};

const multArray = () => {
	let multipl = 1;
	for (let i = 0; i < arr.length; i++) {
		multipl *= arr[i];
	}
	return multipl;
};

submit.addEventListener("click", numbers());
submit.addEventListener("click", function () {
	newArray.innerHTML = arr;
	minNum.innerHTML = Math.min.apply(null, arr);
	maxNum.innerHTML = Math.max.apply(null, arr);
	avNum.innerHTML = sumArray();
	sum.innerHTML = sumArray() * arr.length;
	mult.innerHTML = multArray();
});
