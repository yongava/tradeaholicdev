export const numberWithCommas = (x) => {
	if (x !== null && x !== undefined) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	} else {
		return '';
	}
};

export const attachTwoDigits = (x) => {
	if (x !== null && x !== undefined) {
		return (Math.round(x * 100) / 100).toFixed(2);
	}
}