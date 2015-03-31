module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                includePaths: [
                    "scss/components"
                ],
                outputStyle: 'compressed',
                precision: 6,
                sourceComments: true,
                sourceMap: true
            },
            dist: {
                files: {
                    'css/fuselage.min.css': 'scss/fuselage.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9'],
                map: true
            },
            dist: {
                files: {
                    'css/fuselage.min.prefixed.css': 'css/fuselage.min.css'
                }
            },
        },

        watch: {
            dist: {
                files: ['scss/*.scss', 'scss/components/*.scss'],
                tasks: ['sass:dist', 'autoprefixer:dist']
            }
        }

    });

    require("load-grunt-tasks")(grunt);

    grunt.registerTask('build', [
        'sass:dist',
        'autoprefixer:dist'
    ]);

    grunt.registerTask('default', [
        'build',
        'watch'
    ]);
}
