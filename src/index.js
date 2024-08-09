export const snippets = {
	"[fizzbuzz]: Fizzbuzz program in Javascript using recursion": {
		prefix: "snippet-fizzbuzz",
		body: [
			"function myFunction(number, current = 1, results = []) { \n" +
				"    if (current > number) { \n" +
				"        return results; \n" +
				"    } \n\n" +
				"    let output = []; \n" +
				"    if (current % 3 === 0) output.push('Fizz'); \n" +
				"    if (current % 5 === 0) output.push('Buzz'); \n\n" +
				"    if (output.length === 0) { \n" +
				"        results.push(current); \n" +
				"    } else { \n" +
				"        results.push(output.join('')); \n" +
				"    } \n\n" +
				"    return myFunction(number, current + 1, results); \n" +
				"} ",
		],
		description: "[fizzbuzz]: Fizzbuzz program in Javascript using recursion",
	},
};
