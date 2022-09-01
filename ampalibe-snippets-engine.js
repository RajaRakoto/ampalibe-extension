import traverse from 'traverse';
import fs from 'fs';
import { basic } from './src/basic.js';
import { chat } from './src/chat.js';
import { deps } from './src/deps.js';
import { pattern } from './src/pattern.js'
import { query } from './src/query.js';
import { ui } from './src/ui.js';
import { header, footer } from './utils/docs.js'

// generator
function generateTable(data) {
	let table = `
<table>
<th>prefix</th>
<th>body</th>
<th>description</th>
`;
	for (let i = 0; i < data[0].length; i++) {
		table += `
<tr>
<td>
<strong>${data[0][i]}</strong>
</td>
<td>

\`\`\`python
${data[1][i]}
\`\`\`
</td>
<td>

>${data[2][i]}
</td>
</tr>
`;
	}
	table += `
</table>
`;
	return table;
}

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
fs.writeFileSync(
	'./dist/ampalibe.code-snippets',
	concatResult,
	'utf8',
	err => {
		console.log(err ? err : 'The file was saved!');
	},
);

let prefixList = [];
let bodyList = [];
let descriptionList = [];

traverse(JSON.parse(
	fs.readFileSync('./dist/ampalibe.code-snippets', 'utf8'),
)).forEach(function (e) {
	if (this.key == 'prefix') {
		prefixList.push(e);
	} else if (this.key == 'body') {
		bodyList.push(e);
	} else if (this.key == 'description') {
		descriptionList.push(e);
	}
});

console.log(header + generateTable([prefixList, bodyList.map(body => `${body.join('\n')}`), descriptionList]) + footer);