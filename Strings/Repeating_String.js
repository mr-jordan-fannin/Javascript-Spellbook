/*
	Takes a string (s) and a number (n) and concatenates duplicates of that string to itself n times.
*/

function Repeating_String(s = ``, n = 0) {
	let a = ``;
	for (let i = 0; i < n; i++) {
		a += s;
	}
	return a;
}