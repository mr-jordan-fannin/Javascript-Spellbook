/*
	Takes a string (s) that is a sentence and returns the length of the longest word in that sentence.
*/

function Length_of_Longest_Word(s = ``) {
	const s = s.split(' ');
	let w = s[0];
	for (let i = 1; i < s.length; i++) {
		if (w.length < s[i].length) {
			l = s[i];
		}
	}
	return w.length;
}

Length_of_Longest_Word('I in big dark caves.')