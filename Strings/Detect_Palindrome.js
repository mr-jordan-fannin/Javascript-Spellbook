/*
	Takes a string (s) and returns a boolean of whether or not that string is a palindrome, ignoring punctuation.
*/

function DetectPalindrome(s = ``) {
	s = s.toLowerCase().replace(/[^a-z0-9+]+/g, ``);
	let l = 0;
	let r = s.length - 1;
	while (l < r) {
		if (s[l++] !== s[r--]) {
			return false;
		}
	}
	return true;
}