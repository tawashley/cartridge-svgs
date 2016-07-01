/* jshint node: true */

'use strict';

function getTaskConfig(projectConfig) {
	var taskConfig = {
		svgSrc: projectConfig.paths.src.svgs + '**/*.svg',
		outDir: '',

		settings: {
		    "dest": "",
		    "mode": {
		        "css": {
		        	"dest": projectConfig.paths.src.sass + "/_objects",
		        	"sprite": process.cwd() + '/' + projectConfig.paths.dest.svgs + '/svgsprite.svg',
		            "render": {
		            	"scss": {
		            		'dest': "_objects.svgsprite.scss"
		            	}
		            },
		           	"layout": "packed",
		           	"prefix": ".svgsprite--%s",
		           	"dimensions": "__dimensions",
		           	"bust": true
		        }
	    	}
	    }

	}

	return taskConfig;
}

module.exports = getTaskConfig;