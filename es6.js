import fs from "fs";
import path from "path";

// ========================================

// to get all ES6 modules syntax from the source directory
function getES6moduleSyntaxBySource(sources, extension) {
	const fixVarName = (varName) => varName.replace(/-/g, "_");
	const dropRight = (arr, n = 1) => arr.slice(0, -n);

	function exploreDirectory(currentDir, sourcePrefix) {
		let files = fs.readdirSync(currentDir);
		let sourceES6 = [];
		files.forEach((file) => {
			const filePath = path.join(currentDir, file);
			const stats = fs.statSync(filePath);
			if (stats.isDirectory()) {
				sourceES6 = sourceES6.concat(exploreDirectory(filePath, sourcePrefix));
			} else if (stats.isFile() && file.endsWith(extension)) {
				const fileNameWithoutExtension = dropRight(file, extension.length);
				const relativePath = path.relative(__dirname, filePath); // Get relative path
				sourceES6.push(
					`import { ${fixVarName(
						fileNameWithoutExtension,
					)} } from '${sourcePrefix}/${relativePath}';`,
				);
			}
		});
		return sourceES6.join("\n");
	}
	if (!Array.isArray(sources)) {
		sources = [sources];
	}
	let result = "";
	sources.forEach((source) => {
		const sourcePrefix = source.startsWith("./") ? "." : "";
		result += exploreDirectory(source, sourcePrefix) + "\n";
	});
	return result;
}

console.log(getES6moduleSyntaxBySource(["./src"], ".js"));
