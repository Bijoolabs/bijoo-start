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
                css: '<%= meta.dev.assets %>/styles',
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
            js: {
                expand: true,
                cwd: '<%= meta.dev.js %>/',
                src: [ '**/*.js' ],
                dest: '<%= meta.prod.js %>/'
            },
            images: {
                expand: true,
                cwd: '<%= meta.dev.img %>/',
                src: [ '**/*.*' ],
                dest: '<%= meta.prod.img %>/'
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
                    require('postcss-nested'),
                    require("css-mqpacker")(),
                    require('autoprefixer')({
                        browsers: ['> 1%', 'IE 9']
                    }),
                    require('postcss-neat')({
                        neatMaxWidth: '100%'
                    })
                ]
            },
            lint: {
                options: {
                    map: false,
                    processors: [
                        require( 'stylelint' )({
                            configFile: "conf/.stylelintrc"
                        })
                    ]
                },
                src: [ "<%= meta.dev.css %>/**/*.css" ]
            },
            docs: {
                options: {
                    processors: [
                        require('mdcss')
                    ]
                },
                src: [ "<%= meta.dev.css %>/**/*.css" ]
            },
            dev: {
                src: '<%= meta.dev.css %>/main.css',
                dest: '<%= meta.prod.css %>/main.css'
            },
            prod: {
                options: {
                    map: false
                },
                src: '<%= meta.dev.css %>/main.css',
                dest: '<%= meta.prod.css %>/main.css'
            }
        },
        // Minify PNG, JPEG and GIF images
        imagemin: {
            images: {
                files: [ {
                    expand: true,
                    cwd: '<%= meta.dev.img %>/',
                    src: [ '**/*.{png,jpg,gif,svg,ico}' ],
                    dest: '<%= meta.prod.img %>/'
                } ]
            }
        },
        // Minify CSS
        csswring: {
            options : {
                map: false,
                removeAllComments: true
            },
            prod: {
                src: '<%= postcss.prod.dest %>',
                dest: '<%= meta.prod.css %>/main.css'
            }
        },
        // Minify JS
        uglify: {
            options: {
                banner: "<%= meta.banner %>"
            },
            prod: {
                expand: true,
                cwd: '<%= meta.dev.js %>/',
                src: [ '**/*.js' ],
                dest: '<%= meta.prod.js %>/'
            }
        },
        // Process throught phatomJS to create the critical css File
        critical: {
            prod: {
                options: {
                    // Inline the generated critical-path CSS
                    // - true generates HTML
                    // - false generates CSS
                    inline: false,
                    width: 1280,
                    height: 768,
                    minify: true,
                    // Extract inlined styles from referenced stylesheets
                    extract: true,
                    // ignore some css rules
                    ignore: ['font-face',/some-regexp/],
                },
                src: 'http://getbootstrap.com/',
                dest: '<%= meta.prod.css %>/critical.css'
            }
        },
        // Watch and livereload with help of grunt-newer
        watch: {
            options: {
                livereload: 6325
            },
            js: {
                files: [ '<%= meta.dev.js %>/main.js', '<%= meta.dev.js %>/modules/*.js' ],
                tasks: [ 'newer:copy:js' ]
            },
            image: {
                files: '<%= meta.dev.img %>/**/*.{png,jpg,gif,svg,ico}',
                tasks: [ 'newer:copy:images' ]
            },
            css: {
                files: ['<%= meta.dev.css %>/main.css', '<%= meta.dev.css %>/**/*.css'],
                tasks: [ 'postcss:dev' ]
            },
            template: {
                files: 'path/to/template/**/*.*'
            }
        },
        // Run grunt tasks concurrently
        concurrent: {
            base: [ "postcss:dev",
                    "copy"
                    ],
            prod: [ "postcss:prod",
                    "imagemin",
                    "copy:font"
                    ],
            compress: [ "uglify", "csswring" ],
            lint: [ "postcss:lint", "eslint" ]
        }
    } );

    // Default task
    grunt.registerTask( "default", [ "concurrent:base" ]);

    // Lint task
    grunt.registerTask( "lint", [ "concurrent:lint" ] );

    // Prod task
    grunt.registerTask( "prod", [ "clean", "concurrent:prod", "concurrent:compress", "critical" ]);
};
