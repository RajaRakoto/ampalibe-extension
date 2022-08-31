import traverse from 'traverse';
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

console.log(chat);
