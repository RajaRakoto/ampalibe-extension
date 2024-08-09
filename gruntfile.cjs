/**
 * @description: gruntfile for ampalibe extension
 * @requires: grunt | load-grunt-tasks | grunt-contrib-compress
 */
module.exports = (grunt) => {
	require("load-grunt-tasks")(grunt);

	// backups destination
	const backupsDestination = "./backups/";

	// node-glob syntax
	const includeAllFiles = ["**/*", ".*/**/*", "**/.*", "**/.*/**/*"];

	// all grunt plugins config
	grunt.initConfig({
		pkg: grunt.file.readJSON("./package.json"),

		// compress files and folders (incremental backup)
		compress: {
			main: {
				options: {
					archive: `${backupsDestination}main.tar.gz`,
				},
				files: [{ src: ["./*", "./.*"] }],
				filter: "isFile",
			},
			vscode: {
				options: {
					archive: `${backupsDestination}vscode.tar.gz`,
				},
				expand: true,
				cwd: "./.vscode/",
				src: includeAllFiles,
				dest: "vscode",
			},
			assets: {
				options: {
					archive: `${backupsDestination}assets.tar.gz`,
				},
				expand: true,
				cwd: "./assets/",
				src: includeAllFiles,
				dest: "assets",
			},
			src: {
				options: {
					archive: `${backupsDestination}src.tar.gz`,
				},
				expand: true,
				cwd: "./src/",
				src: includeAllFiles,
				dest: "src",
			},
			tests: {
				options: {
					archive: `${backupsDestination}tests.tar.gz`,
				},
				expand: true,
				cwd: "./tests/",
				src: includeAllFiles,
				dest: "tests",
			},
			tmp: {
				options: {
					archive: `${backupsDestination}tmp.tar.gz`,
				},
				expand: true,
				cwd: "./tmp/",
				src: includeAllFiles,
				dest: "tmp",
			},
		},
	});

	// all grunt register tasks
	grunt.registerTask("backup", [
		"compress:main",
		"compress:vscode",
		"compress:assets",
		"compress:src",
		"compress:tests",
		"compress:tmp",
	]);

	// all tasks lists
	const plumTaskNames = ["backup"];
	const plumTaskStatus = [
		"compress: main | vscode | assets | src | tests | tmp",
	];

	// default tasks
	grunt.registerTask("default", () => {
		console.log(
			"\nHere are the lists of plugins (tasks) you can run with grunt:".green,
		);

		/**
		 *
		 * @param {string} taskTitle - task title (Eg: basics tasks)
		 * @param {array} taskNames - task names (Eg: basicsTaskNames)
		 * @param {array} taskStatus - task status (Eg: basicsTaskStatus)
		 * @param {string} taskTheme - colors of theme (Eg: black ,red ,green ,yellow ,blue ,magenta ,cyan ,white ,gray ,grey)
		 */
		function getTaskResume(taskTitle, taskNames, taskStatus, taskTheme) {
			switch (taskTheme) {
				case "cyan":
					console.log(`\n${taskTitle}`.cyan.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.cyan} -> ${taskStatus[index]}`);
					});
					break;
				case "magenta":
					console.log(`\n${taskTitle}`.magenta.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.magenta} -> ${taskStatus[index]}`);
					});
					break;
				case "yellow":
					console.log(`\n${taskTitle}`.yellow.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.yellow} -> ${taskStatus[index]}`);
					});
					break;
				case "blue":
					console.log(`\n${taskTitle}`.blue.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.blue} -> ${taskStatus[index]}`);
					});
					break;

				default:
					null;
					break;
			}
		}

		// task resume
		getTaskResume(
			"== AMPALIBE EXTENSION TASKS ==",
			plumTaskNames,
			plumTaskStatus,
			"yellow",
		);
	});
};
