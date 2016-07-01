/* jshint node: true */

'use strict';

function getTaskConfig(projectConfig) {
	var taskConfig = {
		svgSrc: projectConfig.paths.src.svgs + '**/*.svg', // Source of SVGs
		outDir: '', // If using modes, leave this empty and configure on a mode level - determines the main output dir for all files when not configured individually

		settings: {
		    "dest": "", // If using modes, leave this empty and configure on a mode level - determines where to put the SVG symbol/css sprite/def
		    "mode": {
		        "css": {
		        	"dest": projectConfig.paths.src.sass + "/_objects", // where it specifically puts the css file (not where it'd put the def / symbol etc)
		        	"sprite": process.cwd() + '/' + projectConfig.paths.dest.svgs + '/svgsprite.svg', // where it puts the svg file and what it names it
		            "render": {
		            	"scss": { // make it render scss and not css
		            		'dest': "_objects.svgsprite.scss" // scss file name
		            	}
		            },
		           	"layout": "packed", // default - layout of svg in the sprite
		           	"prefix": ".svgsprite--%s", // custom - prefix for svg classes
		           	"dimensions": "__dimensions", // custom - suffix for dimensions class e.g. .svgsprite--hamburger__dimensions
		           	"bust": true // default - cache busting
		        }
	    	}
	    }

	}

	return taskConfig;
}

module.exports = getTaskConfig;