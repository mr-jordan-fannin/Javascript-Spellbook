/*
	Takes a number (n) and returns the factorial of n.
*/

export const Factorializer = (n = 0) => {
	let f = 1;
	for (let i = n; i > 0; i--) {
		f *= i;
	}
	return f;
}