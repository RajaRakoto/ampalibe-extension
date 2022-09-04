/**
 * @author: Raja
 * @description: grunt file for ampalibe extension
 * @requires: grunt | load-grunt-tasks | grunt-contrib-compress
 */
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	// all files destination (example)
	const backupsDestination = './backups/';

	// node-glob syntax
	const includeAllFiles = ['**/*', '.*/**/*', '**/.*', '**/.*/**/*'];

	/**
	 * ~ ALL GRUNT PLUGINS CONFIG ~
	 */
	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),

		/**
		 * Compress files and folders (incremental backup)
		 */
		compress: {
			main: {
				options: {
					archive: backupsDestination + 'main.tar.gz',
				},
				files: [{ src: ['./*', './.*'] }],
				filter: 'isFile',
			},
			node_modules: {
				options: {
					archive: backupsDestination + 'node_modules.tar.gz',
				},
				expand: true,
				cwd: './node_modules/',
				src: includeAllFiles,
				dest: 'node_modules',
			},
			src: {
				options: {
					archive: backupsDestination + 'src.tar.gz',
				},
				expand: true,
				cwd: './src/',
				src: includeAllFiles,
				dest: 'src',
			},
			test: {
				options: {
					archive: backupsDestination + 'test.tar.gz',
				},
				expand: true,
				cwd: './test/',
				src: includeAllFiles,
				dest: 'test',
			},
			dist: {
				options: {
					archive: backupsDestination + 'dist.tar.gz',
				},
				expand: true,
				cwd: './dist/',
				src: includeAllFiles,
				dest: 'dist',
			},
			utils: {
				options: {
					archive: backupsDestination + 'utils.tar.gz',
				},
				expand: true,
				cwd: './utils/',
				src: includeAllFiles,
				dest: 'utils',
			},
			assets: {
				options: {
					archive: backupsDestination + 'assets.tar.gz',
				},
				expand: true,
				cwd: './assets/',
				src: includeAllFiles,
				dest: 'assets',
			},
			docs: {
				options: {
					archive: backupsDestination + 'docs.tar.gz',
				},
				expand: true,
				cwd: './docs/',
				src: includeAllFiles,
				dest: 'docs',
			},
		},
	});

	// all grunt register tasks
	grunt.registerTask('compress-all', [
		'compress:main',
		'compress:node_modules',
		'compress:src',
		'compress:test',
		'compress:dist',
		'compress:utils',
		'compress:assets',
		'compress:docs',
	]);

	// all tasks lists
	const myTasksNames = ['compress-all'];

	// tasks status (description)
	const myTasksStatus = [
		'compress: main | node_modules | src | test | dist | utils | assets | docs',
	];

	// default tasks
	grunt.registerTask('default', () => {
		console.log(
			'\nHere are the lists of plugins (tasks) you can run with grunt:'.green,
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
				case 'cyan':
					console.log(`\n${taskTitle}`.cyan.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(taskNames.cyan + ` -> ${taskStatus[index]}`);
					});
					break;
				case 'magenta':
					console.log(`\n${taskTitle}`.magenta.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(taskNames.magenta + ` -> ${taskStatus[index]}`);
					});
					break;
				case 'yellow':
					console.log(`\n${taskTitle}`.yellow.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(taskNames.yellow + ` -> ${taskStatus[index]}`);
					});
					break;
				case 'blue':
					console.log(`\n${taskTitle}`.blue.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(taskNames.blue + ` -> ${taskStatus[index]}`);
					});
					break;

				default:
					null;
					break;
			}
		}

		// task resume
		getTaskResume(
			'🍈 AMPALIBE EXTENSION GRUNT TASKS 🍈',
			myTasksNames,
			myTasksStatus,
			'yellow', // color theme
		);
	});
};
