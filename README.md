# vscode-boilerplate 🚀

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)

**This minimalistic boilerplate is designed to help you quickly start developing extensions for Visual Studio Code. It provides a solid and ready-to-use base structure, allowing you to focus on implementing your unique features without wasting time setting up the development environment.**

**Usage**: You can install it by typing "My extension" in the extension tab of your IDE

---

### 📌 Notes

Visual Studio Code supports a wide range of extensions that can enhance your development experience in various ways. While this boilerplate is specifically tailored for creating `VSCode snippets`, it's important to note that there are several other types of extensions you can develop, such as language support, debugging tools, extension pack and more ... If you're interested in creating a different type of extension, you might need to adjust the template provided in this boilerplate. This could involve changing the `package.json` file, modifying source code to implement the desired functionality, and potentially adding new dependencies or scripts to your project.

> For more information, you can refer to the [VSCode Extension API](https://code.visualstudio.com/api/get-started/your-first-extension).

---

### 📌 Scripts

**Util**

- 📜 `es6` - To get all ES6 modules syntax from the source directory

**Clean**

- 📜 `clean` - Remove coverage data, prod, build.

**Build**

- 📜 `build` - Run the build.js script and utilize vsce to generate the vsix file for production

**Linting and Formatting**

- 📜 `eslint` - Lint source files with ESLint.
- 📜 `prettier` - Reformat source files with Prettier.

**Backup and Dependency Management**

- 📜 `backup` - Backup files with Grunt.
- 📜 `pkg-check` - Check useless dependencies with depcheck.
- 📜 `pkg-upgrade` - Upgrade outdated dependencies (interactive mode) with npm-check-updates.

**Versioning**

- 📜 `versioning` - Start ungit server.

**npm Commands**

- 📜 `npm-version:major` - Increments the major version number of your project using npm.
- 📜 `npm-version:minor` - Increments the minor version number of your project using npm.
- 📜 `npm-version:patch` - Increments the version patch number of your project using npm.

---

### 📌 Similar

You can also check out my other starter projects:

- 🚀 [bun-boilerplate](https://github.com/RajaRakoto/bun-boilerplate)
- 🚀 [node-boilerplate](https://github.com/RajaRakoto/node-boilerplate)
- 🚀 [react-boilerplate](https://github.com/RajaRakoto/react-boilerplate)
- 🚀 [next-boilerplate](https://github.com/RajaRakoto/next-boilerplate)
- 🚀 [quik-boilerplate](https://github.com/RajaRakoto/quik-boilerplate)
- 🚀 [cli-boilerplate](https://github.com/RajaRakoto/cli-boilerplate)