# vscode-boilerplate 🚀

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)

**This minimalistic boilerplate is designed to help you quickly start developing extensions for Visual Studio Code. It provides a solid and ready-to-use base structure, allowing you to focus on implementing your unique features without wasting time setting up the development environment.**

**IDE**: You can install it by typing "My extension" in the extension tab of your IDE

Instant Value - All basic tools included and configured:

- 🧅 Bun.js >= 1.0.26
- 🧅 Use Bun as package manager
- 🌈 ESM
- 🧪 Biome for code formatting and linting
- ✅ Jest or Bun test for fast unit testing and code coverage
- ⚙️ EditorConfig for consistent coding style
- 📦 NPM scripts for common operations
- 📝 Best package.json configuration for VSCode extension
- 📝 Simple example of Snippet code and unit test
- 🐗 Run tasks with Grunt (example for backup)
- 🚄 Build faster with a preconfigured file and VSCE tool
- 🖥️ Ungit for version control (git) with a GUI

---

### 📌 Notes

Visual Studio Code supports a wide range of extensions that can enhance your development experience in various ways. While this boilerplate is specifically tailored for creating `VSCode snippets`, it's important to note that there are several other types of extensions you can develop, such as language support, debugging tools, extension pack and more ... If you're interested in creating a different type of extension, you might need to adjust the template provided in this boilerplate. This could involve changing the `package.json` file, modifying source code to implement the desired functionality, and potentially adding new dependencies or scripts to your project.

> For more information, you can refer to the [VSCode Extension API](https://code.visualstudio.com/api/get-started/your-first-extension).

---

### 📌 Usage

To use this template, use the following commands:

```bash
bun create github.com/RajaRakoto/vscode-boilerplate <project-name>
cd <project-name>
bun run pkg-upgrade # to upgrade outdated dependencies in interactive mode
```

> NOTE 1: I employ the `MIT license` for this starter kit, which includes my name and GitHub profile. Please remember to adjust or remove it if deemed unnecessary.

> NOTE 2: In order to help you better understand the structure of this boilerplate, there is a `README.md` file in each subdirectory of src.

> NOTE 3: For certain configurations in the `package.json` file, you need to modify them to tailor them to your project (e.g: name, description, author, keywords, main, repository, ...).

---

### 📌 NPM Scripts

**Util**

- 📜 `es6` - To get all ES6 modules syntax from the source directory

**Clean**

- 📜 `clean` - Remove coverage data, prod, build.

**Build**

- 📜 `build` - Run the build.js script and utilize vsce to generate the vsix file for production

**Testing**

- 📜 `test` - Run unit testing with Bun.js.

**Linting and Formatting**

- 📜 `biome:start` - Starts the Biome daemon server. You can specify a custom configuration file path using the `--config-path` option.
- 📜 `biome:stop` - Stops the Biome daemon server.
- 📜 `biome:fix` - Runs a source code check and applies automatic fixes (linter & formatter) according to the defined rules.
- 📜 `biome:unsafe` - Works like `biome:fix`, but may apply more invasive or risky changes.

**Backup and Dependency Management**

- 📜 `backup` - Backup files with Grunt.
- 📜 `pkg-check` - Check useless dependencies with depcheck.
- 📜 `pkg-upgrade` - Upgrade outdated dependencies (interactive mode) with npm-check-updates.

**Versioning**

- 📜 `versioning` - Start ungit server.

**NPM Commands**

- 📜 `npm-version:major` - Increments the major version number of your project using npm.
- 📜 `npm-version:minor` - Increments the minor version number of your project using npm.
- 📜 `npm-version:patch` - Increments the version patch number of your project using npm.

**NVM**

- 📜 `nvm` - Manage multiple node.js versions. Easily switch between node versions per project to ensure compatibility.

---

### 📌 Similar

You can also check out my other starter projects:

- 🚀 [bun-boilerplate](https://github.com/RajaRakoto/bun-boilerplate)
- 🚀 [node-boilerplate](https://github.com/RajaRakoto/node-boilerplate)
- 🚀 [react-boilerplate](https://github.com/RajaRakoto/react-boilerplate)
- 🚀 [next-boilerplate](https://github.com/RajaRakoto/next-boilerplate)
- 🚀 [qwik-boilerplate](https://github.com/RajaRakoto/qwik-boilerplate)
- 🚀 [cli-boilerplate](https://github.com/RajaRakoto/cli-boilerplate)
