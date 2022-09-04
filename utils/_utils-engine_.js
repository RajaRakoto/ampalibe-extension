// table generator
export function generateTable(data) {
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