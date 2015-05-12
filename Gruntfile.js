module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concurrent: {
            serve: [
                'sass',
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        },

        copy: {
            fuselage: {
                files: [
                    {
                        expand: true,
                        src: [
                            "bower_components/fuselage/scss/fuselage.scss",
                            "bower_components/fuselage/scss/_settings.scss"
                        ],
                        dest: "_sass/",
                        flatten: true,
                        filter: "isFile"
                    }
                ]
            },
            jquery: {
                files: [
                    {
                        expand: true,
                        src: [
                            "bower_components/jquery/dist/jquery.min.js",
                            "bower_components/jquery/dist/jquery.min.map"
                        ],
                        dest: "js/",
                        flatten: true,
                        filter: "isFile"
                    }
                ]
            }
        },

        sass: {
            options: {
                includePaths: ['bower_components/fuselage/scss/components'],
                outputStyle: 'expanded',
                sourceMap: true
            },
            fuselage: {
                files: {
                    '_site/css/fuselage.min.css': '_sass/fuselage.scss'
                }
            },
            global: {
                files: {
                    '_site/css/main.min.css': '_sass/main.scss'
                }
            }
        },

        shell: {
            jekyllServe: {
                command: "jekyll serve --baseurl="
            },
            jekyllBuild: {
                command: "jekyll build --config _config-dev.yml"
            }
        },

        watch: {
            styles: {
                files: ['_sass/_components/*.scss', '_sass/*.scss'],
                tasks: ['sass:global', 'sass:fuselage']
            }
        }
    });

    require("load-grunt-tasks")(grunt);

    grunt.registerTask('serve', [
        'concurrent:serve'
    ]);

    grunt.registerTask('build', [
        'newer:copy:jquery',
        'newer:copy:fuselage',
        'shell:jekyllBuild',
        'sass:fuselage',
        'sass:global'
    ]);

    grunt.registerTask('default', ['build']);
}
