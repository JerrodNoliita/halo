module.exports = function(grunt){

	grunt.initConfig({

		sass: {
			options:{
				style:'expanded'
			},
			navigation: {
				files: {
					"navigation/dist/navigation.css":"navigation/source/navigation.scss"
				}
			}
		}
		
	});

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt, {scope:"devDependencies"});

};