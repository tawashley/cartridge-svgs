var spawn = require('child_process').spawn;
var path = require('path');
var fs = require('fs-extra');
var chai = require('chai');
var expect = chai.expect;

chai.use(require('chai-fs'));
chai.should();

var ROOT_DIR = process.cwd();
var MOCK_PROJECT_DIR = path.join(process.cwd(), 'test', 'mock-project');
var MODULE_NAME_HERE_SRC_DIR = path.join(MOCK_PROJECT_DIR, '_source', 'module');
var MODULE_NAME_HERE_DEST_DIR = path.join(MOCK_PROJECT_DIR, 'public', '_client', 'images');

process.chdir(MOCK_PROJECT_DIR);

//Delete generated files/folders
function cleanUp() {
	// fs.removeSync(/* path here */);
}

function runGulpTask(options, callback) {

    var gulp = spawn('gulp', options)

    //Log gulp task output for debugging purposes
    //
    // gulp.stdout.on('data', function(data) {
    // 	console.log(new Buffer(data).toString('utf8'));
    // })

    // gulp.stderr.on('data', function(data) {
    // 	console.log(new Buffer(data).toString('utf8'));
    // })

    gulp.on('close', function() {
        callback();
    });

}

describe('As a user of the cartridge-images module', function() {

	this.timeout(10000);

	describe('when `gulp task-name` is run WITHOUT production flag', function() {

		before(function(done) {
			runGulpTask(['task-name'], done)
		})

		after(function() {
			cleanUp();
		})

		it('should expect true to be true', function() {
			expect(true).to.be.a.true
		})

	})

	describe('when `gulp task-name` is run WITH production flag', function() {

		before(function(done) {
			runGulpTask(['task-name', '--prod'], done)
		})

		after(function() {
			cleanUp();
		})

		it('should expect true to be true', function() {
			expect(true).to.be.a.true
		})

	})

})