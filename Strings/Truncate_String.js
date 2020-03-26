/*
	Takes a string (s) and a number (n) and returns a truncated version of that string that is n characters long + '...'.
*/

function Truncate_String(s = ``, n = 0) {
	if (s.length > n && n > 3) return `${s.slice(0, (n - 3))}...`;
	if (s.length > n && n <= 3) return `${s.slice(0, n)}...`;
	return s;
}