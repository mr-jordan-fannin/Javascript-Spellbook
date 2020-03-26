/*
	Takes a string (s) and returns that string with the first letter in each word in uppercase and every other letter in lowercase.
*/

function Title_Case(s = ``) {
	return s.toLowerCase()
			.split(` `)
			.map(w => w.replace(w[0], w[0].toUpperCase()))
			.join(` `);
}