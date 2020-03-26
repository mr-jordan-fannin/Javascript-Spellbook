/*
	Takes an array of arrays of numbers (a) and returns an array (l) made up of the largest number of each of the sub-arrays.
*/

export const Array_of_Largests = (a = []) => {
	const l = [];
	for (let i = 0; i < a.length; i++) {
		let t = a[i][0];
		for (let j = 0; j < a[i].length; j++) {
			if (a[i][j] > t) {
				t = a[i][j];
			}
		}
		l[i] = t;
	}
	return l;
}