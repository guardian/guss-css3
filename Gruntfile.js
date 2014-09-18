module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.loadNpmTasks('grunt-scss-lint');

    grunt.task.renameTask('release', 'git-release');

    grunt.initConfig({
        clean: {
            docs: [
                'docs'
            ],
        },
        scsslint: {
            css3: [
                'src'
            ],
            options: {
                bundleExec: true,
                config: 'scss-lint.yml',
                reporterOutput: null
            }
        },
        sassdoc: {
            css3: {
                src: 'src',
                dest: 'docs'
            }
        },
        'git-release': {
            options: {
                file: 'bower.json',
                npm: false
            }
        },
        'gh-pages': {
            docs: {
                options: {
                    base: 'docs',
                    message: 'Releasing docs to http://guardian.github.io/guss-css3/'
                },
                src: [
                    '*.html',
                    'build/**/*',
                    'theme-build/**/*'
                ]
            }
        }
    });

    grunt.registerTask('validate', ['scsslint:css3']);
    grunt.registerTask('docs', ['validate', 'clean:docs', 'sassdoc:css3']);
    grunt.registerTask('release', function (type) {
        var releaseTarget = type ? ':' + type : '';
        grunt.task.run(['git-release' + releaseTarget, 'clean:docs', 'sassdoc:css3', 'gh-pages:docs']);
    });
};
