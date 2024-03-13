/* libs */
import fs from 'fs'
import path from 'path'
/* src snippets sources */
import { snippets } from './src'

// ========================================

// to ensure that the directory exists, creating it if necessary
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
  }
}

// all snippets list
const snippetsList = [snippets]

// merge all snippets
const concatenedSnippets = Object.assign(
  {},
  ...snippetsList.map((snippet) => {
    return snippet
  }),
)

// convert to JSON
const json = JSON.stringify(concatenedSnippets)

// write to file
const distDirectory = './dist'
ensureDirectoryExists(distDirectory)
fs.writeFileSync(path.join(distDirectory, 'my-extension.code-snippets'), json)
