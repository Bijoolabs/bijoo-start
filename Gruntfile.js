module.exports = function( grunt ) {

    'use strict';

    // Add timing graph after each task
    require( 'time-grunt' )( grunt );

    // load all task listed and speed up build process
    require( 'jit-grunt' )( grunt );

    // Project configuration
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),
        meta: {
            day: '<%= grunt.template.today("dd-mm-yyyy") %>',
            hour: '<%= grunt.template.today("HH:MM") %>',
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= meta.day %> <%= meta.hour %> */\n',
            dev: {
                assets: 'app',
                less: '<%= meta.dev.assets %>/styles',
                js: '<%= meta.dev.assets %>/scripts',
                img: '<%= meta.dev.assets %>/images',
                fonts: '<%= meta.dev.assets %>/fonts'
            },
            prod: {
                assets: 'build',
                css: '<%= meta.prod.assets %>/styles',
                js: '<%= meta.prod.assets %>/scripts',
                img: '<%= meta.prod.assets %>/images',
                fonts: '<%= meta.prod.assets %>/fonts'
            }
        },
        eslint: {
            options: {
                configFile: 'conf/.eslintrc'
            },
            target: ['<%= meta.dev.js %>/main.js']
        },
        // Clean files assets in folders
        clean: {
            assets: [ '<%= meta.prod.assets %>' ]
        },
        // Copy files and folders
        copy: {
            font: {
                expand: true, // Enable dynamic expansion
                cwd: '<%= meta.dev.fonts %>/', // Src matches are relative to this path
                src: [ '*.{eot,svg,ttf,otf,woff,woff2}' ], // Actual patterns to match
                dest: '<%= meta.prod.fonts %>/' // Destination path prefix
            },
            jsvendor: {
                expand: true,
                cwd: '<%= meta.dev.js %>/vendor/',
                src: [ '*.js' ],
                dest: '<%= meta.prod.js %>/vendor/'
            }
        },
        // Concat JS files
        concat: {
            options: {
                sourceMap: true
            },
            dev: {
                src: [ '<%= meta.dev.js %>/plugin/*.js',
                    '<%= meta.dev.js %>/main.js'
                ],
                dest: '<%= meta.prod.js %>/main.js'
            }
        },
        // Grunt PostCSS task
        postcss: {
            options: {
                map: true,
                processors: [
                    require('postcss-import'),
                    require('postcss-custom-properties'),
                    require('postcss-calc'),
                    require('postcss-custom-media'),
                    require('postcss-media-minmax'),
                    require('postcss-custom-selectors'),
                    require('postcss-color-hex-alpha'),
                    require('postcss-color-function'),
                    require('postcss-selector-matches'),
                    require('postcss-selector-not'),
                    require('postcss-neat')({
                        neatMaxWidth: '100%'
                    }),
                    require('postcss-nested'),
                    require("css-mqpacker")(),
                    require('autoprefixer')({
                        browsers: ['> 1%', 'IE 9']
                    }),
                ]
            },
            dev: {
                src: '<%= meta.dev.less %>/main.css',
                dest: '<%= meta.prod.css %>/main.css'
            },
            prod: {
                options: {
                    map: false
                },
                src: '<%= meta.dev.less %>/main.less',
                dest: '<%= meta.prod.css %>/main.css'
            }
        },
        // Minify PNG, JPEG and GIF images
        imagemin: {
            images: {
                files: [ {
                    expand: true,
                    cwd: '<%= meta.dev.img %>/',
                    src: [ '**/*.{png,jpg,gif,svg}' ],
                    dest: '<%= meta.prod.img %>/'
                } ]
            }
        },
        // Minify CSS
        csswring: {
            options : {
                removeAllComments: true
            },
            prod: {
                src: '<%= postcss.dev.dest %>',
                dest: '<%= meta.prod.css %>/main.css'
            }
        },
        // Minify JS files
        uglify: {
            prod: {
                src: '<%= concat.dev.src %>',
                dest: '<%= meta.prod.js %>/main.js'
            }

        },
        // Watch and livereload with help of grunt-newer
        watch: {
            options: {
                livereload: 6325
            },
            js: {
                files: [ '<%= meta.dev.js %>/main.js', '<%= meta.dev.js %>/plugins/*.js' ],
                tasks: [ 'newer:concat:dev' ]
            },
            image: {
                files: '<%= meta.dev.img %>/**/*.{png,jpg,gif,svg}',
                tasks: [ 'newer:imagemin:images' ]
            },
            css: {
                files: ['<%= meta.dev.css %>/main.css', '<%= meta.dev.css %>/**/layout.css', '<%= meta.dev.css %>/**/*.css'],
                tasks: [ 'postcss:dev' ]
            },
            template: {
                files: 'path/to/template/**/*.*'
            }
        }

    } );

    // Default task
    grunt.registerTask( 'default', ['clean', 'postcss:dev', 'concat', 'copy', 'imagemin' ] );
    // Lint task
    grunt.registerTask( 'lint', [ 'eslint' ] );
    // Prod task
    grunt.registerTask( 'prod', ['clean', 'postcss:prod', 'csswring', 'criticalcss', 'concat', 'uglify', 'copy', 'imagemin' ] );
};