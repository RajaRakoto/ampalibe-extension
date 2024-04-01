/* libs */
import fs from "fs";
import path from "path";

/* src snippets sources */
import { basic } from './src/basic.js';
import { chat } from './src/chat.js';
import { deps } from './src/deps.js';
import { pattern } from './src/pattern.js';
import { query } from './src/query.js';
import { ui } from './src/ui.js';

// ========================================

// to ensure that the directory exists, creating it if necessary
function ensureDirectoryExists(directory) {
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory, { recursive: true });
	}
}

// all snippets list
const snippetsList = [basic, chat, deps, pattern, query, ui];

// merge all snippets
const concatenedSnippets = Object.assign(
	{},
	...snippetsList.map((snippet) => {
		return snippet;
	}),
);

// convert to JSON
const json = JSON.stringify(concatenedSnippets);

// write to file
const distDirectory = "./dist";
ensureDirectoryExists(distDirectory);
fs.writeFileSync(path.join(distDirectory, "ampalibe-extension.code-snippets"), json);
