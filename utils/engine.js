import traverse from 'traverse';
import fs from 'fs';
import { basic } from '../src/basic.js';
import { chat } from '../src/chat.js';
import { deps } from '../src/deps.js';
import { query } from '../src/query.js';
import { ui } from '../src/ui.js';

// function getNullAttrib() {
// 	const pkgFile = fs.readFileSync('../pkg.json', 'utf8');
// 	const pkg = JSON.parse(pkgFile);
// 	let parentKeyList = [];
// 	let childKeyList = [];
// 	traverse(pkg).forEach(function (e) {
// 		if (e == null) {
// 			parentKeyList.push(this.parent.key);
// 		}
// 	});
// 	traverse(pkg).forEach(function (e) {
// 		if (e == null) {
// 			childKeyList.push(this.key);
// 		}
// 	});
// 	return [parentKeyList, childKeyList];
// }

// snippets data
let sourceList = [basic, chat, deps, query, ui];
let concatResult = '{';

// concat snippets data
sourceList.forEach(source => {
	source = JSON.stringify(source);
	source = source.slice(1, source.length - 1);
	concatResult += source + ',';
});

concatResult = concatResult.slice(0, concatResult.length - 2) + '}}';

// to ampalibe code snippets
fs.writeFileSync(
	'../dist/ampalibe.code-snippets',
	concatResult,
	'utf8',
	err => {
		console.log(err ? err : 'The file was saved!');
	},
);

const distFile = JSON.parse(fs.readFileSync('../dist/ampalibe.code-snippets', 'utf8'));

traverse(distFile).forEach(function (e) {
	if (this.key == "prefix") {
		console.log(e)
	}
});
