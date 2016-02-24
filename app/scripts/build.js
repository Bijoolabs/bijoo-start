// Shortcut alias
require.config({
    paths: {
        // Vendor
        jquery: [
            // jQuery loaded from the CDN with a fall back local version
            '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
            'vendor/jquery-2.2.0.min'
        ],

        // Plugins
        commonPlugin: 'plugins/common_plugin', // Set your plugins here

        // Modules
        commonModule: 'modules/common_module' // Set your modules here
    },

    shim: {
        jquery: {
          exports: 'jQuery'
        }
    }
});

// Load main app
require(['main'], function(){});