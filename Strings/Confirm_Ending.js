/*
	Takes a string (s) and a string (t) and returns a boolean of whether or not the string s ends with the string t.
*/

function Confirm_Ending(s = ``, t = ``) {
	return (s.substring(s.length - t.length) === t);
}