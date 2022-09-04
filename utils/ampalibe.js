import traverse from 'traverse';
import fs from 'fs';
// engine importation\
import { generateTable } from './_utils-engine_.js';
// docs importation
import { banner } from '../docs/banner.js';
import { contrib } from '../docs/contrib.js';
import { desc } from '../docs/desc.js';
import { install } from '../docs/install.js';
// snippets importation
import { basic } from '../src/basic.js';
import { chat } from '../src/chat.js';
import { deps } from '../src/deps.js';
import { pattern } from '../src/pattern.js';
import { query } from '../src/query.js';
import { ui } from '../src/ui.js';
import { header, footer } from './docs.js';

// snippets data
let sourceList = [basic, chat, deps, pattern, query, ui];
let concatResult = '{';

// concat snippets data
sourceList.forEach(source => {
	source = JSON.stringify(source);
	source = source.slice(1, source.length - 1);
	concatResult += source + ',';
});

concatResult = concatResult.slice(0, concatResult.length - 2) + '}}';

// to ampalibe code snippets
fs.writeFileSync('./dist/ampalibe.code-snippets', concatResult, 'utf8', err => {
	console.log(err ? err : 'The file was saved!');
});

let prefixList = [];
let bodyList = [];
let descriptionList = [];

traverse(
	JSON.parse(fs.readFileSync('./dist/ampalibe.code-snippets', 'utf8')),
).forEach(function (e) {
	if (this.key == 'prefix') {
		prefixList.push(e);
	} else if (this.key == 'body') {
		bodyList.push(e);
	} else if (this.key == 'description') {
		descriptionList.push(e);
	}
});

console.log(banner);
console.log(desc);
console.log(install);
console.log(contrib);
console.log(`
---

### 📌 Usage
`);
console.log(
	generateTable([
		prefixList,
		bodyList.map(body => `${body.join('\n')}`),
		descriptionList,
	]),
);
console.log(`
<div align="center">

#### Enjoy it 😉
</div>
`);
