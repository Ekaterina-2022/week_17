let date = new Date("2023-01-15"); //сюда писать разное время

const formatDate = (date) => {
	let div = new Date() - date;

	let secTime = Math.floor(div / 1000);

	if (div < 1000) {
		return "Прямо сейчас";
	}
	if (secTime < 60) {
		return `${div} сек. назад`;
	}

	if (secTime < 60) {
		return `${secTime} сек. назад`;
	}

	let minTime = Math.floor(div / 60000);

	if (minTime < 60) {
		return `${minTime} мин. назад`;
	}
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let hour = date.getHours();
	let mins = date.getMinutes();
	day = day < 10 ? "0" + day : day;
	month = month < 10 ? "0" + month : month;
	year = year.toString().slice(-2);
	hour = hour < 10 ? "0" + hour : hour;
	mins = mins < 10 ? "0" + mins : mins;
	return `${day}.${month}.${year} ${hour}:${mins}`;
};

console.log(formatDate(date));
