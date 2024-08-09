/* libs */
import traverse from "traverse";
import fs from "node:fs";

/* utils */
import { generateTable } from "./src/utils/index.js";

// ===============================

const prefixList = [];
const bodyList = [];
const descriptionList = [];

const parsedData = JSON.parse(
	fs.readFileSync("./dist/ampalibe-extension.code-snippets", "utf8"),
);

for (const item of traverse(parsedData)) {
	if (item.key === "prefix") {
		prefixList.push(item.value);
	} else if (item.key === "body") {
		bodyList.push(item.value);
	} else if (item.key === "description") {
		descriptionList.push(item.value);
	}
}

console.log(
	generateTable([
		prefixList,
		bodyList.map((body) => `${body.join("\n")}`),
		descriptionList,
	]),
);
