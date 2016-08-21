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
            fontawesome: {
                files: [
                    {
                        expand: true,
                        src: [
                            "bower_components/fontawesome/css/font-awesome.min.css"
                        ],
                        dest: "css/",
                        flatten: true,
                        filter: "isFile"
                    },
                    {
                        expand: true,
                        src: [
                            "bower_components/fontawesome/fonts/fontawesome-webfont.*"
                        ],
                        dest: "fonts/",
                        flatten: true,
                        filter: "isFile"
                    }
                ]
            },
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
            },
            styles: {
                files: [
                    {
                        expand: true,
                        src: [
                            "_site/css/main.min.css"
                        ],
                        dest: "css/",
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
            dist: {
                files: {
                    '_site/css/main.min.css': '_sass/main.scss'
                }
            }
        },

        shell: {
            jekyllServe: {
                command: "bundle exec jekyll serve --baseurl="
            },
            jekyllBuild: {
                command: "bundle exec jekyll build --config _config-dev.yml"
            },
            jekyllDeploy: {
                command: "bundle exec jekyll build --config _config.yml"
            }
        },

        watch: {
            styles: {
                files: ['_sass/**/*.scss', '_sass/*.scss'],
                tasks: ['sass']
            }
        }
    });

    require("load-grunt-tasks")(grunt);

    grunt.registerTask('serve', [
        'build',
        'concurrent:serve'
    ]);

    grunt.registerTask('build', [
        'newer:copy:jquery',
        'newer:copy:fontawesome',
        'newer:copy:fuselage',
        'shell:jekyllBuild',
        'sass'
    ]);

    grunt.registerTask('prep-deploy', [
        'newer:copy:jquery',
        'newer:copy:fontawesome',
        'newer:copy:fuselage',
        'shell:jekyllDeploy',
        'sass',
        'newer:copy:styles'
    ]);

    grunt.registerTask('default', ['build']);
}
