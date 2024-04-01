/* libs */
import traverse from "traverse";
import fs from "fs";

/* utils */
import { generateTable } from "./src/utils/index.js";

// ===============================

let prefixList = [];
let bodyList = [];
let descriptionList = [];

traverse(
	JSON.parse(
		fs.readFileSync("./dist/ampalibe-extension.code-snippets", "utf8"),
	),
).forEach(function (e) {
	if (this.key == "prefix") {
		prefixList.push(e);
	} else if (this.key == "body") {
		bodyList.push(e);
	} else if (this.key == "description") {
		descriptionList.push(e);
	}
});

console.log(
	generateTable([
		prefixList,
		bodyList.map((body) => `${body.join("\n")}`),
		descriptionList,
	]),
);
