/*
	Takes an array (a) and a number (n) and returns an array (c).
	(c) is made up of sub-arrays that are "chunks" of (a) containing a maximum number of elements equal to (n).
	The order of the original array is preserved.
*/

function Chunk_Array(a = [], n = 0) {
	const c = [];
	for (var i = 0; i < a.length; i += n) c.push(a.slice(i, i + n));
	return c
}